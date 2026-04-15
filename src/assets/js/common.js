/**
 * 星语塔罗 - 公共JavaScript
 * 包含通用功能和工具函数
 * 
 * 注意：塔罗牌数据在 tarot-data.js 中定义，此处不再重复定义
 */

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
