/**
 * 星语塔罗 - 公共JavaScript
 * 包含通用功能和工具函数
 */

// 大阿尔卡纳牌数据
const tarotCards = [
    { name: '愚人', emoji: '🃏', keywords: ['新的开始', '冒险', '纯真'], meaning: '愚人代表着新的开始和无限的潜能。它象征着跳出舒适区，勇敢地踏上未知旅程的勇气。', advice: '保持开放的心态，勇敢地迈出第一步。相信宇宙会接住你。' },
    { name: '魔术师', emoji: '🎩', keywords: ['创造力', '行动力', '自信'], meaning: '魔术师拥有实现目标所需的所有资源和能力。他象征着创造力和将想法转化为现实的力量。', advice: '相信自己的能力，运用你的技能和资源去实现目标。' },
    { name: '女祭司', emoji: '🌙', keywords: ['直觉', '神秘', '潜意识'], meaning: '女祭司代表着内在的智慧和直觉。她鼓励你倾听内心的声音，相信你的直觉。', advice: '花时间独处和冥想，答案就在你的内心深处。' },
    { name: '皇后', emoji: '👑', keywords: ['丰饶', '母性', '创造力'], meaning: '皇后象征着丰饶、滋养和创造力。她代表着大自然的丰盛和母性的关怀。', advice: '照顾好自己的需求，让创造力自由流动。' },
    { name: '皇帝', emoji: '🏛️', keywords: ['权威', '稳定', '控制'], meaning: '皇帝代表着结构、秩序和权威。他象征着通过纪律和规划实现目标的能力。', advice: '建立稳定的结构，用理性和逻辑来解决问题。' },
    { name: '教皇', emoji: '⛪', keywords: ['传统', '信仰', '教育'], meaning: '教皇代表着传统、信仰和精神指引。他象征着寻求智慧和指导的需求。', advice: '尊重传统，向有经验的人寻求建议。' },
    { name: '恋人', emoji: '💕', keywords: ['爱情', '选择', '和谐'], meaning: '恋人牌代表着爱情、关系和重要的选择。它象征着心灵的结合和价值观的一致性。', advice: '跟随你的心，做出符合你价值观的选择。' },
    { name: '战车', emoji: '🏆', keywords: ['意志', '胜利', '控制'], meaning: '战车代表着通过意志力和决心克服困难。它象征着成功和目标的实现。', advice: '保持专注，用你的意志力去克服障碍。' },
    { name: '力量', emoji: '🦁', keywords: ['勇气', '耐心', '内在力量'], meaning: '力量代表着内在的勇气和耐心。它象征着用温柔和同情心去驯服内在野兽的能力。', advice: '用耐心和同情心来处理情况，相信你的内在力量。' },
    { name: '隐士', emoji: '🕯️', keywords: ['内省', '孤独', '智慧'], meaning: '隐士代表着内省和寻求内在真理的旅程。他象征着独处中寻找智慧的时期。', advice: '花时间独处，寻找内在的答案和智慧。' },
    { name: '命运之轮', emoji: '☸️', keywords: ['变化', '命运', '周期'], meaning: '命运之轮代表着生命的周期和变化。它象征着命运的转动和机遇的到来。', advice: '接受变化，顺应生命的流动。好运正在路上。' },
    { name: '正义', emoji: '⚖️', keywords: ['公正', '平衡', '因果'], meaning: '正义代表着公正、平衡和因果法则。它象征着清晰的思维和公正的决策。', advice: '寻求真相，做出公正的决定。你的行为会有相应的结果。' },
    { name: '倒吊人', emoji: '🙃', keywords: ['牺牲', '等待', '新视角'], meaning: '倒吊人代表着暂停、牺牲和从新的角度看问题。它象征着通过放下来获得启迪。', advice: '暂停一下，从不同的角度看待情况。有时候放手是最好的选择。' },
    { name: '死神', emoji: '💀', keywords: ['结束', '转变', '重生'], meaning: '死神代表着结束和转变。它象征着旧事物的结束为新事物的开始腾出空间。', advice: '接受结束，拥抱转变。新的开始正在等待着你。' },
    { name: '节制', emoji: '🏺', keywords: ['平衡', '调和', '耐心'], meaning: '节制代表着平衡、调和和耐心。它象征着找到中间道路和整合对立面的能力。', advice: '寻求平衡，避免极端。耐心和适度是关键。' },
    { name: '恶魔', emoji: '😈', keywords: ['束缚', '欲望', '物质主义'], meaning: '恶魔代表着束缚、欲望和物质主义。它象征着那些限制我们自由的自我设限。', advice: '认识到你的束缚是自找的。你有力量打破这些枷锁。' },
    { name: '塔', emoji: '🗼', keywords: ['突变', '觉醒', '破坏'], meaning: '塔代表着突然的变化和旧结构的崩塌。它象征着必要的破坏为新的成长铺平道路。', advice: '接受突然的变化，虽然痛苦但必要。新的基础将会建立。' },
    { name: '星星', emoji: '⭐', keywords: ['希望', '灵感', '宁静'], meaning: '星星代表着希望、灵感和宁静。它象征着在困难之后的平静和信心的恢复。', advice: '保持希望，相信你的梦想会实现。宁静和治愈正在到来。' },
    { name: '月亮', emoji: '🌙', keywords: ['幻觉', '恐惧', '潜意识'], meaning: '月亮代表着潜意识的世界和内心的直觉。它暗示着事情可能不像表面看起来那样清晰。', advice: '相信你的直觉，但也要分辨真实与幻象。' },
    { name: '太阳', emoji: '☀️', keywords: ['成功', '快乐', '活力'], meaning: '太阳代表着成功、快乐和活力。它象征着清晰的视野和生命的喜悦。', advice: '享受当下的快乐，你的努力得到了回报。' },
    { name: '审判', emoji: '📯', keywords: ['重生', '觉醒', '评价'], meaning: '审判代表着重生和觉醒。它象征着从过去的经验中学习和成长的时刻。', advice: '反思过去，从中学习。一个新的阶段正在开始。' },
    { name: '世界', emoji: '🌍', keywords: ['完成', '成就', '圆满'], meaning: '世界代表着完成、成就和圆满。它象征着旅程的结束和目标的实现。', advice: '庆祝你的成就，享受完成的感觉。新的循环即将开始。' }
];

/**
 * 生成星空背景
 * @param {string} containerId - 容器元素ID
 * @param {number} count - 星星数量
 */
function createStars(containerId = 'stars', count = 100) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.opacity = Math.random() * 0.7 + 0.3;
        
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        container.appendChild(star);
    }
}

/**
 * 格式化时间
 * @param {Date} date - 日期对象
 * @returns {string} 格式化后的时间字符串
 */
function formatTime(date) {
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return '今天';
    if (days === 1) return '昨天';
    if (days < 7) return days + '天前';
    return date.toLocaleDateString('zh-CN');
}

/**
 * 格式化日期
 * @param {Date} date - 日期对象
 * @returns {string} 格式化后的日期字符串
 */
function formatDate(date) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const recordDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    
    if (recordDate.getTime() === today.getTime()) {
        return '今天 ' + date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    } else if (recordDate.getTime() === yesterday.getTime()) {
        return '昨天 ' + date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    } else {
        return date.toLocaleDateString('zh-CN') + ' ' + date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    }
}

/**
 * 保存占卜记录到本地存储
 * @param {Object} record - 占卜记录对象
 */
function saveDivinationRecord(record) {
    const history = JSON.parse(localStorage.getItem('divinationHistory') || '[]');
    history.unshift(record);
    
    // 最多保存50条
    if (history.length > 50) {
        history.pop();
    }
    
    localStorage.setItem('divinationHistory', JSON.stringify(history));
}

/**
 * 获取占卜历史记录
 * @returns {Array} 历史记录数组
 */
function getDivinationHistory() {
    return JSON.parse(localStorage.getItem('divinationHistory') || '[]');
}

/**
 * 显示Toast提示
 * @param {string} message - 提示消息
 * @param {number} duration - 显示时长（毫秒）
 */
function showToast(message, duration = 2000) {
    let toast = document.getElementById('toast');
    
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 glass px-6 py-3 rounded-full text-tarot-gold opacity-0 transition-opacity duration-300 pointer-events-none z-50';
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.classList.remove('opacity-0');
    
    setTimeout(() => {
        toast.classList.add('opacity-0');
    }, duration);
}

/**
 * 移动端菜单切换
 * @param {string} menuId - 菜单元素ID
 */
function toggleMobileMenu(menuId = 'mobileMenu') {
    const menu = document.getElementById(menuId);
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

/**
 * 生成整体解读文本
 * @param {Object} card - 卡牌对象
 * @param {boolean} reversed - 是否逆位
 * @returns {string} 解读文本
 */
function generateOverallReading(card, reversed) {
    const positionPrefix = reversed ? '逆位的' : '正位的';
    const energyText = reversed ? '这种能量可能表现为阻碍或需要重新审视的方面' : '这种能量将为你带来积极的影响';
    
    return `${positionPrefix}${card.name}出现在你的占卜中，象征着${card.keywords.join('、')}。这张牌暗示着你当前的情况与这些主题密切相关。${energyText}。建议你${card.advice.replace('你', '')}`;
}

/**
 * 随机抽取一张牌
 * @returns {Object} 包含卡牌和是否逆位的对象
 */
function drawRandomCard() {
    const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    const isReversed = Math.random() < 0.5;
    return { card, isReversed };
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化星空背景
    createStars();
    
    // 初始化移动端菜单按钮
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());
    }
});
