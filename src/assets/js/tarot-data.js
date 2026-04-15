/**
 * 星语塔罗 - 完整78张塔罗牌数据
 * 包含22张大阿尔卡纳 + 56张小阿尔卡纳
 */

// 大阿尔卡纳（22张）- 主牌，代表重大人生课题
const majorArcana = [
    { 
        id: 0, name: '愚人', emoji: '🃏', englishName: 'The Fool',
        keywords: ['新的开始', '冒险', '纯真', '信任'],
        meaning: '愚人代表着新的开始和无限的潜能。它象征着跳出舒适区，勇敢地踏上未知旅程的勇气。',
        advice: '保持开放的心态，勇敢地迈出第一步。相信宇宙会接住你。',
        element: '风', planet: '天王星'
    },
    { 
        id: 1, name: '魔术师', emoji: '🎩', englishName: 'The Magician',
        keywords: ['创造力', '行动力', '自信', '显化'],
        meaning: '魔术师拥有实现目标所需的所有资源和能力。他象征着创造力和将想法转化为现实的力量。',
        advice: '相信自己的能力，运用你的技能和资源去实现目标。',
        element: '风', planet: '水星'
    },
    { 
        id: 2, name: '女祭司', emoji: '🌙', englishName: 'The High Priestess',
        keywords: ['直觉', '神秘', '潜意识', '内在智慧'],
        meaning: '女祭司代表着内在的智慧和直觉。她鼓励你倾听内心的声音，相信你的直觉。',
        advice: '花时间独处和冥想，答案就在你的内心深处。',
        element: '水', planet: '月亮'
    },
    { 
        id: 3, name: '皇后', emoji: '👑', englishName: 'The Empress',
        keywords: ['丰饶', '母性', '创造力', '滋养'],
        meaning: '皇后象征着丰饶、滋养和创造力。她代表着大自然的丰盛和母性的关怀。',
        advice: '照顾好自己的需求，让创造力自由流动。',
        element: '土', planet: '金星'
    },
    { 
        id: 4, name: '皇帝', emoji: '🏛️', englishName: 'The Emperor',
        keywords: ['权威', '稳定', '控制', '结构'],
        meaning: '皇帝代表着结构、秩序和权威。他象征着通过纪律和规划实现目标的能力。',
        advice: '建立稳定的结构，用理性和逻辑来解决问题。',
        element: '火', planet: '火星'
    },
    { 
        id: 5, name: '教皇', emoji: '⛪', englishName: 'The Hierophant',
        keywords: ['传统', '信仰', '教育', '指导'],
        meaning: '教皇代表着传统、信仰和精神指引。他象征着寻求智慧和指导的需求。',
        advice: '尊重传统，向有经验的人寻求建议。',
        element: '土', planet: '木星'
    },
    { 
        id: 6, name: '恋人', emoji: '💕', englishName: 'The Lovers',
        keywords: ['爱情', '选择', '和谐', '价值观'],
        meaning: '恋人牌代表着爱情、关系和重要的选择。它象征着心灵的结合和价值观的一致性。',
        advice: '跟随你的心，做出符合你价值观的选择。',
        element: '风', planet: '金星'
    },
    { 
        id: 7, name: '战车', emoji: '🏆', englishName: 'The Chariot',
        keywords: ['意志', '胜利', '控制', '决心'],
        meaning: '战车代表着通过意志力和决心克服困难。它象征着成功和目标的实现。',
        advice: '保持专注，用你的意志力去克服障碍。',
        element: '水', planet: '月亮'
    },
    { 
        id: 8, name: '力量', emoji: '🦁', englishName: 'Strength',
        keywords: ['勇气', '耐心', '内在力量', '同情心'],
        meaning: '力量代表着内在的勇气和耐心。它象征着用温柔和同情心去驯服内在野兽的能力。',
        advice: '用耐心和同情心来处理情况，相信你的内在力量。',
        element: '火', planet: '太阳'
    },
    { 
        id: 9, name: '隐士', emoji: '🕯️', englishName: 'The Hermit',
        keywords: ['内省', '孤独', '智慧', '寻找真理'],
        meaning: '隐士代表着内省和寻求内在真理的旅程。他象征着独处中寻找智慧的时期。',
        advice: '花时间独处，寻找内在的答案和智慧。',
        element: '土', planet: '水星'
    },
    { 
        id: 10, name: '命运之轮', emoji: '☸️', englishName: 'Wheel of Fortune',
        keywords: ['变化', '命运', '周期', '转折点'],
        meaning: '命运之轮代表着生命的周期和变化。它象征着命运的转动和机遇的到来。',
        advice: '接受变化，顺应生命的流动。好运正在路上。',
        element: '火', planet: '木星'
    },
    { 
        id: 11, name: '正义', emoji: '⚖️', englishName: 'Justice',
        keywords: ['公正', '平衡', '因果', '真理'],
        meaning: '正义代表着公正、平衡和因果法则。它象征着清晰的思维和公正的决策。',
        advice: '寻求真相，做出公正的决定。你的行为会有相应的结果。',
        element: '风', planet: '金星'
    },
    { 
        id: 12, name: '倒吊人', emoji: '🙃', englishName: 'The Hanged Man',
        keywords: ['牺牲', '等待', '新视角', '放手'],
        meaning: '倒吊人代表着暂停、牺牲和从新的角度看问题。它象征着通过放下来获得启迪。',
        advice: '暂停一下，从不同的角度看待情况。有时候放手是最好的选择。',
        element: '水', planet: '海王星'
    },
    { 
        id: 13, name: '死神', emoji: '💀', englishName: 'Death',
        keywords: ['结束', '转变', '重生', '释放'],
        meaning: '死神代表着结束和转变。它象征着旧事物的结束为新事物的开始腾出空间。',
        advice: '接受结束，拥抱转变。新的开始正在等待着你。',
        element: '水', planet: '冥王星'
    },
    { 
        id: 14, name: '节制', emoji: '🏺', englishName: 'Temperance',
        keywords: ['平衡', '调和', '耐心', '中庸'],
        meaning: '节制代表着平衡、调和和耐心。它象征着找到中间道路和整合对立面的能力。',
        advice: '寻求平衡，避免极端。耐心和适度是关键。',
        element: '火', planet: '木星'
    },
    { 
        id: 15, name: '恶魔', emoji: '😈', englishName: 'The Devil',
        keywords: ['束缚', '欲望', '物质主义', '成瘾'],
        meaning: '恶魔代表着束缚、欲望和物质主义。它象征着那些限制我们自由的自我设限。',
        advice: '认识到你的束缚是自找的。你有力量打破这些枷锁。',
        element: '土', planet: '土星'
    },
    { 
        id: 16, name: '塔', emoji: '🗼', englishName: 'The Tower',
        keywords: ['突变', '觉醒', '破坏', '启示'],
        meaning: '塔代表着突然的变化和旧结构的崩塌。它象征着必要的破坏为新的成长铺平道路。',
        advice: '接受突然的变化，虽然痛苦但必要。新的基础将会建立。',
        element: '火', planet: '火星'
    },
    { 
        id: 17, name: '星星', emoji: '⭐', englishName: 'The Star',
        keywords: ['希望', '灵感', '宁静', '疗愈'],
        meaning: '星星代表着希望、灵感和宁静。它象征着在困难之后的平静和信心的恢复。',
        advice: '保持希望，相信你的梦想会实现。宁静和治愈正在到来。',
        element: '风', planet: '天王星'
    },
    { 
        id: 18, name: '月亮', emoji: '🌙', englishName: 'The Moon',
        keywords: ['幻觉', '恐惧', '潜意识', '直觉'],
        meaning: '月亮代表着潜意识的世界和内心的直觉。它暗示着事情可能不像表面看起来那样清晰。',
        advice: '相信你的直觉，但也要分辨真实与幻象。',
        element: '水', planet: '月亮'
    },
    { 
        id: 19, name: '太阳', emoji: '☀️', englishName: 'The Sun',
        keywords: ['成功', '快乐', '活力', '清晰'],
        meaning: '太阳代表着成功、快乐和活力。它象征着清晰的视野和生命的喜悦。',
        advice: '享受当下的快乐，你的努力得到了回报。',
        element: '火', planet: '太阳'
    },
    { 
        id: 20, name: '审判', emoji: '📯', englishName: 'Judgement',
        keywords: ['重生', '觉醒', '评价', '召唤'],
        meaning: '审判代表着重生和觉醒。它象征着从过去的经验中学习和成长的时刻。',
        advice: '反思过去，从中学习。一个新的阶段正在开始。',
        element: '火', planet: '冥王星'
    },
    { 
        id: 21, name: '世界', emoji: '🌍', englishName: 'The World',
        keywords: ['完成', '成就', '圆满', '整合'],
        meaning: '世界代表着完成、成就和圆满。它象征着旅程的结束和目标的实现。',
        advice: '庆祝你的成就，享受完成的感觉。新的循环即将开始。',
        element: '土', planet: '土星'
    }
];

// 小阿尔卡纳 - 权杖组（Wands）- 火元素 - 代表行动、创造力、热情
const wandsSuit = [
    // 数字牌
    { id: 'wands-ace', name: '权杖王牌', emoji: '🪄', englishName: 'Ace of Wands', number: 1, court: false, keywords: ['新机会', '灵感', '创造力', '潜能'], meaning: '权杖王牌象征着新的机会和灵感的火花。它代表着创造力的萌芽和行动的开始。', advice: '抓住这个新机会，让你的热情引领你前进。', element: '火' },
    { id: 'wands-2', name: '权杖二', emoji: '🌍', englishName: 'Two of Wands', number: 2, court: false, keywords: ['规划', '决策', '远见', '探索'], meaning: '权杖二代表着规划和决策的时刻。你站在选择的十字路口，需要展望未来。', advice: '制定长期计划，勇敢地探索新的可能性。', element: '火' },
    { id: 'wands-3', name: '权杖三', emoji: '⚓', englishName: 'Three of Wands', number: 3, court: false, keywords: ['扩展', '进展', '合作', '远见'], meaning: '权杖三象征着扩展和进展。你的努力开始显现成果，新的机会正在到来。', advice: '继续扩展你的视野，与他人合作实现更大的目标。', element: '火' },
    { id: 'wands-4', name: '权杖四', emoji: '🏰', englishName: 'Four of Wands', number: 4, court: false, keywords: ['庆祝', '稳定', '和谐', '成就'], meaning: '权杖四代表着庆祝和稳定。这是一个享受成果、与他人分享快乐的时刻。', advice: '庆祝你的成就，享受与亲友的美好时光。', element: '火' },
    { id: 'wands-5', name: '权杖五', emoji: '⚔️', englishName: 'Five of Wands', number: 5, court: false, keywords: ['冲突', '竞争', '挑战', '分歧'], meaning: '权杖五象征着冲突和竞争。你可能面临挑战或与他人产生分歧。', advice: '面对冲突时保持冷静，寻找建设性的解决方案。', element: '火' },
    { id: 'wands-6', name: '权杖六', emoji: '🏆', englishName: 'Six of Wands', number: 6, court: false, keywords: ['胜利', '认可', '成功', '自信'], meaning: '权杖六代表着胜利和认可。你的努力得到了回报，他人开始认可你的成就。', advice: '享受成功的喜悦，但保持谦逊。', element: '火' },
    { id: 'wands-7', name: '权杖七', emoji: '🛡️', englishName: 'Seven of Wands', number: 7, court: false, keywords: ['防御', '坚持', '勇气', '立场'], meaning: '权杖七象征着防御和坚持。你需要为自己的立场而战，面对挑战不退缩。', advice: '坚定你的立场，相信自己的能力。', element: '火' },
    { id: 'wands-8', name: '权杖八', emoji: '⚡', englishName: 'Eight of Wands', number: 8, court: false, keywords: ['速度', '进展', '行动', '消息'], meaning: '权杖八代表着快速进展和行动。事情正在加速发展，好消息即将到来。', advice: '抓住机会快速行动，不要错过时机。', element: '火' },
    { id: 'wands-9', name: '权杖九', emoji: '🤕', englishName: 'Nine of Wands', number: 9, court: false, keywords: ['韧性', '坚持', '防备', '疲惫'], meaning: '权杖九象征着韧性和坚持。你可能感到疲惫，但最后的胜利就在眼前。', advice: '坚持到最后，你的韧性将带来胜利。', element: '火' },
    { id: 'wands-10', name: '权杖十', emoji: '🏋️', englishName: 'Ten of Wands', number: 10, court: false, keywords: ['负担', '责任', '压力', '完成'], meaning: '权杖十代表着负担和责任。你可能承担了太多，感到压力重重。', advice: '学会分担责任，不要独自承担所有重担。', element: '火' },
    // 宫廷牌
    { id: 'wands-page', name: '权杖侍从', emoji: '📜', englishName: 'Page of Wands', number: 11, court: true, keywords: ['探索', '热情', '新想法', '冒险'], meaning: '权杖侍从象征着新的探索和热情。他带来新想法和冒险的精神。', advice: '保持好奇心，勇敢地探索新的可能性。', element: '火' },
    { id: 'wands-knight', name: '权杖骑士', emoji: '🐎', englishName: 'Knight of Wands', number: 12, court: true, keywords: ['行动', '冲动', '冒险', '热情'], meaning: '权杖骑士代表着行动和冒险。他充满热情，但有时过于冲动。', advice: '勇敢地追求目标，但要考虑后果。', element: '火' },
    { id: 'wands-queen', name: '权杖王后', emoji: '👸', englishName: 'Queen of Wands', number: 13, court: true, keywords: ['自信', '魅力', '独立', '热情'], meaning: '权杖王后象征着自信和魅力。她独立、热情，能够激励他人。', advice: '相信自己的能力，用你的热情感染他人。', element: '火' },
    { id: 'wands-king', name: '权杖国王', emoji: '🤴', englishName: 'King of Wands', number: 14, court: true, keywords: ['领导力', '远见', '魅力', '创业'], meaning: '权杖国王代表着领导力和远见。他有魅力、有愿景，能够带领他人实现目标。', advice: '发挥你的领导力，用远见引领方向。', element: '火' }
];

// 小阿尔卡纳 - 圣杯组（Cups）- 水元素 - 代表情感、关系、直觉
const cupsSuit = [
    { id: 'cups-ace', name: '圣杯王牌', emoji: '🏆', englishName: 'Ace of Cups', number: 1, court: false, keywords: ['新感情', '爱', '直觉', '灵感'], meaning: '圣杯王牌象征着新的感情和爱的涌现。它代表着情感的充盈和直觉的觉醒。', advice: '敞开心扉，接受爱的流动。', element: '水' },
    { id: 'cups-2', name: '圣杯二', emoji: '💑', englishName: 'Two of Cups', number: 2, court: false, keywords: ['合作', '和谐', '爱情', '联结'], meaning: '圣杯二代表着和谐的关系和合作。它象征着平等、互惠的伙伴关系。', advice: '珍惜这段关系，培养相互理解和支持。', element: '水' },
    { id: 'cups-3', name: '圣杯三', emoji: '🎉', englishName: 'Three of Cups', number: 3, court: false, keywords: ['庆祝', '友谊', '社交', '快乐'], meaning: '圣杯三象征着庆祝和友谊。这是一个与亲友共度欢乐时光的时刻。', advice: '享受与他人的联系，庆祝生活中的美好。', element: '水' },
    { id: 'cups-4', name: '圣杯四', emoji: '😔', englishName: 'Four of Cups', number: 4, court: false, keywords: ['不满', '沉思', '冷漠', '错失'], meaning: '圣杯四代表着不满和沉思。你可能对现状感到不满足，忽视了身边的机会。', advice: '重新审视你的处境，不要忽视眼前的机会。', element: '水' },
    { id: 'cups-5', name: '圣杯五', emoji: '😢', englishName: 'Five of Cups', number: 5, court: false, keywords: ['失落', '悲伤', '失望', '遗憾'], meaning: '圣杯五象征着失落和悲伤。你可能正在经历失望或失去的痛苦。', advice: '允许自己悲伤，但也要看到仍然拥有的美好。', element: '水' },
    { id: 'cups-6', name: '圣杯六', emoji: '🌸', englishName: 'Six of Cups', number: 6, court: false, keywords: ['回忆', '童年', '怀旧', '纯真'], meaning: '圣杯六代表着回忆和怀旧。它象征着与过去的联系和纯真的美好。', advice: '从过去的经验中学习，但不要沉溺于回忆。', element: '水' },
    { id: 'cups-7', name: '圣杯七', emoji: '💭', englishName: 'Seven of Cups', number: 7, court: false, keywords: ['幻想', '选择', '迷惑', '梦想'], meaning: '圣杯七象征着幻想和选择。面对众多选择，你可能感到迷惑。', advice: '区分幻想与现实，做出明智的选择。', element: '水' },
    { id: 'cups-8', name: '圣杯八', emoji: '🚶', englishName: 'Eight of Cups', number: 8, court: false, keywords: ['离开', '放弃', '追寻', '成长'], meaning: '圣杯八代表着离开和追寻。你可能需要放弃某些东西，去寻找更有意义的事物。', advice: '勇敢地离开不再适合你的情况，追寻真正的满足。', element: '水' },
    { id: 'cups-9', name: '圣杯九', emoji: '😊', englishName: 'Nine of Cups', number: 9, court: false, keywords: ['满足', '愿望', '幸福', '享受'], meaning: '圣杯九象征着满足和幸福。你的愿望正在实现，享受这份满足感。', advice: '感恩你所拥有的，享受当下的幸福。', element: '水' },
    { id: 'cups-10', name: '圣杯十', emoji: '👨‍👩‍👧‍👦', englishName: 'Ten of Cups', number: 10, court: false, keywords: ['和谐', '家庭', '幸福', '圆满'], meaning: '圣杯十代表着家庭和和谐。它象征着情感上的圆满和幸福的生活。', advice: '珍惜与家人和亲友的关系，享受和谐的时光。', element: '水' },
    { id: 'cups-page', name: '圣杯侍从', emoji: '📨', englishName: 'Page of Cups', number: 11, court: true, keywords: ['消息', '创意', '敏感', '直觉'], meaning: '圣杯侍从象征着创意和直觉的消息。他带来情感上的新开始。', advice: '倾听你的直觉，接受新的情感体验。', element: '水' },
    { id: 'cups-knight', name: '圣杯骑士', emoji: '🐴', englishName: 'Knight of Cups', number: 12, court: true, keywords: ['浪漫', '追求', '理想', '邀请'], meaning: '圣杯骑士代表着浪漫和追求。他带来爱情的邀请或创意的追求。', advice: '跟随你的心，但要保持现实。', element: '水' },
    { id: 'cups-queen', name: '圣杯王后', emoji: '👸', englishName: 'Queen of Cups', number: 13, court: true, keywords: ['同情', '直觉', '温柔', '理解'], meaning: '圣杯王后象征着同情和直觉。她温柔、理解，能够感受他人的情感。', advice: '相信你的直觉，用同情心对待他人。', element: '水' },
    { id: 'cups-king', name: '圣杯国王', emoji: '👑', englishName: 'King of Cups', number: 14, court: true, keywords: ['平衡', '控制', '智慧', '慈悲'], meaning: '圣杯国王代表着情感上的平衡和控制。他智慧、慈悲，能够管理自己的情绪。', advice: '保持情感的平衡，用智慧处理关系。', element: '水' }
];

// 小阿尔卡纳 - 宝剑组（Swords）- 风元素 - 代表思想、冲突、挑战
const swordsSuit = [
    { id: 'swords-ace', name: '宝剑王牌', emoji: '⚔️', englishName: 'Ace of Swords', number: 1, court: false, keywords: ['清晰', '突破', '真理', '力量'], meaning: '宝剑王牌象征着思想的清晰和突破。它代表着真理的力量和新的理解。', advice: '保持头脑清晰，追求真理。', element: '风' },
    { id: 'swords-2', name: '宝剑二', emoji: '⚖️', englishName: 'Two of Swords', number: 2, court: false, keywords: ['僵局', '选择', '回避', '平衡'], meaning: '宝剑二代表着僵局和艰难的选择。你可能在回避做决定，感到左右为难。', advice: '面对选择，相信自己的判断。', element: '风' },
    { id: 'swords-3', name: '宝剑三', emoji: '💔', englishName: 'Three of Swords', number: 3, court: false, keywords: ['心痛', '悲伤', '痛苦', '释放'], meaning: '宝剑三象征着心痛和悲伤。它代表着情感上的痛苦和必要的释放。', advice: '允许自己感受痛苦，这是疗愈的开始。', element: '风' },
    { id: 'swords-4', name: '宝剑四', emoji: '😴', englishName: 'Four of Swords', number: 4, court: false, keywords: ['休息', '恢复', '冥想', '平静'], meaning: '宝剑四代表着休息和恢复。你需要暂停一下，让身心得到恢复。', advice: '给自己时间休息和恢复，不要过度劳累。', element: '风' },
    { id: 'swords-5', name: '宝剑五', emoji: '🏴‍☠️', englishName: 'Five of Swords', number: 5, court: false, keywords: ['冲突', '胜利', '损失', '自私'], meaning: '宝剑五象征着冲突和代价高昂的胜利。你可能赢了战斗，但失去了更多。', advice: '反思你的行为，考虑长远后果。', element: '风' },
    { id: 'swords-6', name: '宝剑六', emoji: '🚣', englishName: 'Six of Swords', number: 6, court: false, keywords: ['过渡', '离开', '疗愈', '前进'], meaning: '宝剑六代表着过渡和离开。你正在离开困难的情况，向更好的未来前进。', advice: '接受变化，相信前方有更好的事物。', element: '风' },
    { id: 'swords-7', name: '宝剑七', emoji: '🥷', englishName: 'Seven of Swords', number: 7, court: false, keywords: ['欺骗', '策略', '隐秘', '逃避'], meaning: '宝剑七象征着欺骗和策略。可能有人在隐瞒真相，或你需要采取非常手段。', advice: '诚实面对情况，避免欺骗行为。', element: '风' },
    { id: 'swords-8', name: '宝剑八', emoji: '🔒', englishName: 'Eight of Swords', number: 8, court: false, keywords: ['束缚', '限制', '无助', '恐惧'], meaning: '宝剑八代表着束缚和限制。你可能感到被困住，但束缚往往是自我设限。', advice: '认识到你有力量打破束缚，获得自由。', element: '风' },
    { id: 'swords-9', name: '宝剑九', emoji: '😰', englishName: 'Nine of Swords', number: 9, court: false, keywords: ['焦虑', '噩梦', '恐惧', '担忧'], meaning: '宝剑九象征着焦虑和恐惧。你可能被担忧和负面想法困扰。', advice: '面对你的恐惧，寻求支持和帮助。', element: '风' },
    { id: 'swords-10', name: '宝剑十', emoji: '⚰️', englishName: 'Ten of Swords', number: 10, court: false, keywords: ['结束', '痛苦', '背叛', '重生'], meaning: '宝剑十代表着痛苦的结束。虽然看起来很糟，但这也是新开始的契机。', advice: '接受结束，相信新的开始即将到来。', element: '风' },
    { id: 'swords-page', name: '宝剑侍从', emoji: '📰', englishName: 'Page of Swords', number: 11, court: true, keywords: ['好奇', '警觉', '新想法', '沟通'], meaning: '宝剑侍从象征着好奇和警觉。他带来新想法和沟通的机会。', advice: '保持好奇心，但要谨慎行事。', element: '风' },
    { id: 'swords-knight', name: '宝剑骑士', emoji: '🏇', englishName: 'Knight of Swords', number: 12, court: true, keywords: ['行动', '冲动', '决心', '直接'], meaning: '宝剑骑士代表着果断的行动。他直接、果断，但有时过于冲动。', advice: '果断行动，但要考虑周全。', element: '风' },
    { id: 'swords-queen', name: '宝剑王后', emoji: '👸', englishName: 'Queen of Swords', number: 13, court: true, keywords: ['独立', '清晰', '诚实', '智慧'], meaning: '宝剑王后象征着独立和清晰的思维。她诚实、智慧，能够看透真相。', advice: '保持独立思考，诚实面对真相。', element: '风' },
    { id: 'swords-king', name: '宝剑国王', emoji: '👑', englishName: 'King of Swords', number: 14, court: true, keywords: ['权威', '真理', '公正', '智慧'], meaning: '宝剑国王代表着权威和真理。他公正、智慧，能够做出明智的决策。', advice: '运用你的智慧和权威，做出公正的决策。', element: '风' }
];

// 小阿尔卡纳 - 星币组（Pentacles）- 土元素 - 代表物质、工作、财富
const pentaclesSuit = [
    { id: 'pentacles-ace', name: '星币王牌', emoji: '💰', englishName: 'Ace of Pentacles', number: 1, court: false, keywords: ['新机会', '财富', '物质', '实现'], meaning: '星币王牌象征着物质上的新机会。它代表着财富、资源和实现的可能。', advice: '抓住物质上的机会，脚踏实地地实现目标。', element: '土' },
    { id: 'pentacles-2', name: '星币二', emoji: '🤹', englishName: 'Two of Pentacles', number: 2, court: false, keywords: ['平衡', '适应', '灵活', '多任务'], meaning: '星币二代表着平衡和适应。你可能在多个任务或责任之间周旋。', advice: '保持灵活，学会在多个优先事项间平衡。', element: '土' },
    { id: 'pentacles-3', name: '星币三', emoji: '🏗️', englishName: 'Three of Pentacles', number: 3, court: false, keywords: ['合作', '技能', '学习', '质量'], meaning: '星币三象征着合作和技能的发展。通过团队合作，你能够创造出高质量的成果。', advice: '与他人合作，不断学习和提升技能。', element: '土' },
    { id: 'pentacles-4', name: '星币四', emoji: '🏦', englishName: 'Four of Pentacles', number: 4, court: false, keywords: ['控制', '稳定', '保守', '占有欲'], meaning: '星币四代表着对物质的控制。你可能过于保守或占有欲强。', advice: '学会放手，不要过于执着于物质。', element: '土' },
    { id: 'pentacles-5', name: '星币五', emoji: '🥶', englishName: 'Five of Pentacles', number: 5, court: false, keywords: ['困难', '损失', '孤立', '匮乏'], meaning: '星币五象征着物质上的困难。你可能正在经历财务或健康上的挑战。', advice: '寻求帮助，困难是暂时的。', element: '土' },
    { id: 'pentacles-6', name: '星币六', emoji: '🎁', englishName: 'Six of Pentacles', number: 6, court: false, keywords: ['慷慨', '分享', '给予', '接受'], meaning: '星币六代表着慷慨和分享。它象征着给予和接受的平衡。', advice: '慷慨地给予，也学会接受他人的帮助。', element: '土' },
    { id: 'pentacles-7', name: '星币七', emoji: '🌱', englishName: 'Seven of Pentacles', number: 7, court: false, keywords: ['评估', '耐心', '成长', '投资'], meaning: '星币七象征着评估和耐心。你需要停下来评估进展，等待成果成熟。', advice: '耐心等待，评估你的投资和努力。', element: '土' },
    { id: 'pentacles-8', name: '星币八', emoji: '🔨', englishName: 'Eight of Pentacles', number: 8, court: false, keywords: ['技能', '勤奋', '专注', '精通'], meaning: '星币八代表着勤奋和技能的发展。通过专注和努力，你正在精通某项技能。', advice: '专注于提升技能，勤奋工作会带来回报。', element: '土' },
    { id: 'pentacles-9', name: '星币九', emoji: '🌺', englishName: 'Nine of Pentacles', number: 9, court: false, keywords: ['独立', '奢华', '自给自足', '享受'], meaning: '星币九象征着独立和自给自足。你通过努力获得了物质上的舒适和独立。', advice: '享受你的成就，保持独立和自信。', element: '土' },
    { id: 'pentacles-10', name: '星币十', emoji: '🏠', englishName: 'Ten of Pentacles', number: 10, court: false, keywords: ['财富', '家庭', '传承', '长期'], meaning: '星币十代表着财富和家庭的稳定。它象征着长期的物质安全和家族传承。', advice: '珍惜家庭的支持，为长远做打算。', element: '土' },
    { id: 'pentacles-page', name: '星币侍从', emoji: '📚', englishName: 'Page of Pentacles', number: 11, court: true, keywords: ['学习', '机会', '务实', '专注'], meaning: '星币侍从象征着学习和务实的机会。他带来新的学习或财务机会。', advice: '专注于学习，抓住务实的机会。', element: '土' },
    { id: 'pentacles-knight', name: '星币骑士', emoji: '🐴', englishName: 'Knight of Pentacles', number: 12, court: true, keywords: ['勤奋', '可靠', '耐心', '务实'], meaning: '星币骑士代表着勤奋和可靠。他务实、耐心，能够稳步实现目标。', advice: '保持耐心和勤奋，稳步前进。', element: '土' },
    { id: 'pentacles-queen', name: '星币王后', emoji: '👸', englishName: 'Queen of Pentacles', number: 13, court: true, keywords: ['滋养', '务实', '慷慨', '稳定'], meaning: '星币王后象征着滋养和务实。她慷慨、稳定，能够创造舒适的环境。', advice: '照顾他人，同时保持务实和稳定。', element: '土' },
    { id: 'pentacles-king', name: '星币国王', emoji: '👑', englishName: 'King of Pentacles', number: 14, court: true, keywords: ['成功', '财富', '领导力', '安全'], meaning: '星币国王代表着成功和财富。他有领导力，能够创造物质上的安全。', advice: '运用你的经验和资源，创造稳定和成功。', element: '土' }
];

// 合并所有牌数据
const tarotCards = [...majorArcana, ...wandsSuit, ...cupsSuit, ...swordsSuit, ...pentaclesSuit];

// 牌阵定义
const tarotSpreads = {
    single: {
        id: 'single',
        name: '单张牌',
        description: '简单快捷，适合每日运势或简单是非问题',
        cardCount: 1,
        positions: [
            { name: '核心答案', description: '问题的核心答案和指引' }
        ]
    },
    threeTime: {
        id: 'threeTime',
        name: '三张牌-时间之流',
        description: '了解事情的发展过程：过去-现在-未来',
        cardCount: 3,
        positions: [
            { name: '过去', description: '过去的影响和基础' },
            { name: '现在', description: '现在的状况和挑战' },
            { name: '未来', description: '未来的发展和结果' }
        ]
    },
    threeProblem: {
        id: 'threeProblem',
        name: '三张牌-问题分析',
        description: '分析问题并获得建议：问题-障碍-建议',
        cardCount: 3,
        positions: [
            { name: '问题本质', description: '问题的核心本质' },
            { name: '面临障碍', description: '当前面临的障碍或挑战' },
            { name: '行动建议', description: '建议采取的行动' }
        ]
    },
    celticCross: {
        id: 'celticCross',
        name: '凯尔特十字',
        description: '深度全面分析复杂问题（10张牌）',
        cardCount: 10,
        positions: [
            { name: '现状', description: '当前状况的核心' },
            { name: '挑战', description: '面临的阻碍或助力' },
            { name: '基础', description: '问题的基础/过去' },
            { name: '过去', description: '最近过去的影响' },
            { name: '目标', description: '期望的结果/未来' },
            { name: '未来', description: '近期发展' },
            { name: '自我', description: '求问者的态度' },
            { name: '环境', description: '外部环境因素' },
            { name: '希望/恐惧', description: '内心的期待或担忧' },
            { name: '结果', description: '最终可能的结果' }
        ]
    },
    relationship: {
        id: 'relationship',
        name: '关系牌阵',
        description: '专门分析感情关系（5张牌）',
        cardCount: 5,
        positions: [
            { name: '你', description: '你在这段关系中的状态' },
            { name: '对方', description: '对方在这段关系中的状态' },
            { name: '关系现状', description: '当前关系的状况' },
            { name: '挑战', description: '关系面临的挑战' },
            { name: '发展', description: '关系的发展方向' }
        ]
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { tarotCards, majorArcana, wandsSuit, cupsSuit, swordsSuit, pentaclesSuit, tarotSpreads };
}
