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
    let history = JSON.parse(localStorage.getItem('divinationHistory') || '[]');
    history.unshift(record);
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
 * 显示提示消息
 * @param {string} message - 消息内容
 * @param {number} duration - 显示时长（毫秒）
 */
function showToast(message, duration = 3000) {
    // 创建toast元素
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 bg-tarot-gold text-tarot-dark font-semibold rounded-full shadow-lg animate-fade-in';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // 自动移除
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

/**
 * 生成整体解读
 * @param {Object} card - 卡牌对象
 * @param {boolean} isReversed - 是否逆位
 * @returns {string} 解读文本
 */
function generateOverallReading(card, isReversed) {
    const position = isReversed ? '逆位' : '正位';
    let reading = `${card.name}牌${position}出现在你的占卜中`;
    
    if (isReversed) {
        reading += `，暗示着${card.keywords.join('、')}等能量的阻滞或内在化。`;
        reading += `这可能表示你正在经历${card.name.toLowerCase()}能量的挑战，需要更多耐心和自我反思。`;
    } else {
        reading += `，象征着${card.keywords.join('、')}等积极能量的显现。`;
        reading += `这表示${card.name.toLowerCase()}的能量正在你的生活中发挥作用。`;
    }
    
    reading += `\n\n${card.meaning}`;
    
    return reading;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 生成星空背景
    createStars('stars', 100);
    
    // 移动端菜单切换
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});
