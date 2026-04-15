/**
 * 星语塔罗 - AI智能解读服务
 * 接入火山引擎 DeepSeek-V3 API
 */

// API配置
const AI_CONFIG = {
    apiUrl: 'https://ark.cn-beijing.volces.com/api/v3/responses',
    model: 'deepseek-v3-2-251201',
    apiKey: '41c9c45c-f352-4978-b56b-cd736dec9247'
};

/**
 * 构建AI解读提示词
 * @param {string} question - 用户问题
 * @param {Array} cards - 抽到的牌数组
 * @param {Object} spreadType - 牌阵类型
 * @returns {string} 完整的提示词
 */
function buildInterpretationPrompt(question, cards, spreadType) {
    // 构建牌面信息
    const cardsInfo = cards.map((card, index) => {
        const position = spreadType.positions[index];
        return `
第${index + 1}张牌 - ${position.name}（${position.description}）：
- 牌名：${card.name} ${card.isReversed ? '逆位' : '正位'}
- 关键词：${card.keywords.join('、')}
- 基本含义：${card.meaning}
- 建议：${card.advice}
${card.element ? `- 元素：${card.element}` : ''}
${card.planet ? `- 行星：${card.planet}` : ''}
`;
    }).join('\n');

    // 检测问题类型，添加针对性引导
    const questionType = detectQuestionType(question);
    const typeGuidance = {
        '感情': '感情问题往往最让人纠结，解读时要特别温柔，像知心朋友一样倾听和安慰。',
        '事业': '事业选择关系到未来发展，解读时要既务实又有鼓励，帮助对方看清方向。',
        '财运': '财务问题容易让人焦虑，解读时要理性分析，同时给予信心。',
        '健康': '健康是头等大事，解读时要充满关怀，提醒对方重视身体。',
        '学业': '学习压力大家都懂，解读时要像学长学姐一样给予支持和建议。',
        '人际': '人际关系复杂微妙，解读时要帮助对方理解他人，也理解自己。',
        '综合': '生活中的困惑各式各样，解读时要像老朋友聊天一样自然亲切。'
    };

    return `你是一位专业又亲切的塔罗牌解读师，就像用户的知心朋友一样。请根据以下信息为用户提供温暖、接地气、有深度的塔罗解读。

## 用户问题
"${question}"

## 使用的牌阵
${spreadType.name} - ${spreadType.description}

## 抽到的牌面信息
${cardsInfo}

## 解读风格要求
${typeGuidance[questionType]}

**语言风格**：
- 用"你"来称呼用户，像朋友聊天一样自然
- 多用口语化表达，比如"其实吧..."、"说实话..."、"我觉得..."
- 适当使用 emoji 增加亲切感
- 可以分享一些生活化的例子或类比
- 避免过于学术化或生硬的术语
- 像闺蜜/兄弟一样说话，温暖又直接

**解读要点**：
1. **整体氛围**：先说说这组牌给你的整体感觉，像聊天开场白
2. **逐张解读**：结合位置，用生活化的语言解释每张牌的意思
3. **牌间关联**：说说这些牌之间有什么有趣的联系或故事
4. **具体建议**：给出实实在在能做的事，不要太空泛
5. **情感支持**：让用户感到被理解，不是一个人在面对

## 输出格式
请以以下结构输出解读：

### 🔮 整体感觉
[用轻松的语气说说整体氛围，像聊天一样，2-3句话]

### 📖 牌面故事
[逐张解读，每张牌像讲故事一样，说说它在这个位置代表什么]

### 💡 给你的建议
[3-4条具体可行的建议，像朋友给建议一样直接实用]

### 🌟 想说的话
[温暖的结束语，给用户打打气]

**重要提醒**：
- 即使是逆位牌，也要从积极角度解读，告诉用户"这其实是提醒你要..."
- 多用鼓励性语言，比如"别担心..."、"其实你已经..."、"接下来可以..."
- 适当加入一些生活化的比喻，让解读更易懂
- 让用户感到：被理解、被支持、有方向`;
}

/**
 * 调用AI API获取解读
 * @param {string} question - 用户问题
 * @param {Array} cards - 抽到的牌数组
 * @param {Object} spreadType - 牌阵类型
 * @returns {Promise<string>} AI解读结果
 */
async function getAIInterpretation(question, cards, spreadType) {
    const prompt = buildInterpretationPrompt(question, cards, spreadType);
    
    try {
        const response = await fetch(AI_CONFIG.apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${AI_CONFIG.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: AI_CONFIG.model,
                stream: false,
                input: [
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'input_text',
                                text: prompt
                            }
                        ]
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`API请求失败: ${response.status}`);
        }

        const data = await response.json();
        
        // 解析API响应
        if (data.output && data.output.text) {
            return data.output.text;
        } else if (data.choices && data.choices[0] && data.choices[0].message) {
            return data.choices[0].message.content;
        } else {
            throw new Error('API响应格式异常');
        }
    } catch (error) {
        console.error('AI解读请求失败:', error);
        // 返回本地生成的解读作为 fallback
        return generateLocalInterpretation(question, cards, spreadType);
    }
}

/**
 * 生成本地解读（作为AI解读失败时的备用方案）
 * @param {string} question - 用户问题
 * @param {Array} cards - 抽到的牌数组
 * @param {Object} spreadType - 牌阵类型
 * @returns {string} 本地生成的解读
 */
function generateLocalInterpretation(question, cards, spreadType) {
    // 分析整体氛围
    const overallTheme = analyzeOverallTheme(cards);
    
    // 构建解读
    let interpretation = `### 🔮 整体能量\n\n`;
    interpretation += `${overallTheme}\n\n`;
    
    interpretation += `### 📖 牌面详解\n\n`;
    
    cards.forEach((card, index) => {
        const position = spreadType.positions[index];
        const positionText = card.isReversed ? '逆位' : '正位';
        interpretation += `**${position.name} - ${card.name} ${positionText}**\n\n`;
        interpretation += `${card.meaning}\n\n`;
        interpretation += `💭 *${card.advice}*\n\n`;
    });
    
    interpretation += `### 💡 智慧指引\n\n`;
    interpretation += `1. **倾听内心**：塔罗牌显示你内心深处已经知道答案，相信自己。\n`;
    interpretation += `2. **保持开放**：无论结果如何，保持开放的心态迎接变化。\n`;
    interpretation += `3. **采取行动**：根据牌面的指引，采取具体的行动步骤。\n\n`;
    
    interpretation += `### 🌟 祝福寄语\n\n`;
    interpretation += `愿塔罗的智慧指引你找到内心的平静与方向。记住，你拥有创造自己命运的力量。✨`;
    
    return interpretation;
}

/**
 * 分析整体牌面主题
 * @param {Array} cards - 抽到的牌数组
 * @returns {string} 整体主题分析
 */
function analyzeOverallTheme(cards) {
    // 统计元素分布
    const elements = {};
    const suits = {};
    let reversedCount = 0;
    
    cards.forEach(card => {
        if (card.element) {
            elements[card.element] = (elements[card.element] || 0) + 1;
        }
        if (card.suit) {
            suits[card.suit] = (suits[card.suit] || 0) + 1;
        }
        if (card.isReversed) {
            reversedCount++;
        }
    });
    
    // 构建主题描述
    let theme = '这组牌显示出';
    
    // 分析主导元素
    const dominantElement = Object.entries(elements).sort((a, b) => b[1] - a[1])[0];
    if (dominantElement) {
        const elementDescriptions = {
            '火': '强烈的行动力和创造力',
            '水': '丰富的情感和直觉',
            '风': '活跃的思维和沟通',
            '土': '务实的态度和稳定性'
        };
        theme += `${elementDescriptions[dominantElement[0]]}。`;
    }
    
    // 分析逆位比例
    if (reversedCount === 0) {
        theme += '所有牌均为正位，显示能量流动顺畅，事情发展较为顺利。';
    } else if (reversedCount === cards.length) {
        theme += '牌面显示你可能正处于一个需要内省和调整的阶段。';
    } else if (reversedCount > cards.length / 2) {
        theme += '牌面显示你可能面临一些内在的挑战和阻碍，需要更多耐心。';
    } else {
        theme += '牌面能量较为平衡，正逆位的交织显示这是一个充满学习和成长的时期。';
    }
    
    return theme;
}

/**
 * 流式获取AI解读（用于实时显示）
 * @param {string} question - 用户问题
 * @param {Array} cards - 抽到的牌数组
 * @param {Object} spreadType - 牌阵类型
 * @param {Function} onChunk - 每次收到数据时的回调
 * @returns {Promise<void>}
 */
async function getAIInterpretationStream(question, cards, spreadType, onChunk) {
    const prompt = buildInterpretationPrompt(question, cards, spreadType);
    
    try {
        const response = await fetch(AI_CONFIG.apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${AI_CONFIG.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: AI_CONFIG.model,
                stream: true,
                input: [
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'input_text',
                                text: prompt
                            }
                        ]
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`API请求失败: ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value);
            const lines = chunk.split('\n');
            
            for (const line of lines) {
                if (line.trim() === '') continue;
                if (line.startsWith('data: ')) {
                    const data = line.slice(6);
                    if (data === '[DONE]') return;
                    
                    try {
                        const parsed = JSON.parse(data);
                        if (parsed.choices && parsed.choices[0] && parsed.choices[0].delta) {
                            const content = parsed.choices[0].delta.content;
                            if (content) {
                                onChunk(content);
                            }
                        }
                    } catch (e) {
                        // 忽略解析错误
                    }
                }
            }
        }
    } catch (error) {
        console.error('流式AI解读请求失败:', error);
        // 返回本地生成的解读
        const localResult = generateLocalInterpretation(question, cards, spreadType);
        onChunk(localResult);
    }
}

/**
 * 检测问题类型，用于优化解读
 * @param {string} question - 用户问题
 * @returns {string} 问题类型
 */
function detectQuestionType(question) {
    const keywords = {
        '感情': ['感情', '爱情', '恋爱', '分手', '复合', '婚姻', '对象', '桃花', '喜欢', '爱'],
        '事业': ['工作', '事业', '职业', '升职', '跳槽', '创业', '老板', '同事', '面试', 'offer'],
        '财运': ['钱', '财', '收入', '投资', '赚钱', '经济', '财务', '财富', '奖金', '工资'],
        '健康': ['健康', '身体', '病', '医院', '医生', '治疗', '康复', '养生'],
        '学业': ['学习', '考试', '成绩', '学校', '专业', '考研', '留学', '证书', '面试'],
        '人际': ['人际', '关系', '朋友', '家人', '矛盾', '冲突', '相处', '社交']
    };
    
    const lowerQuestion = question.toLowerCase();
    for (const [type, words] of Object.entries(keywords)) {
        if (words.some(word => lowerQuestion.includes(word))) {
            return type;
        }
    }
    
    return '综合';
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        getAIInterpretation, 
        getAIInterpretationStream, 
        generateLocalInterpretation,
        detectQuestionType 
    };
}
