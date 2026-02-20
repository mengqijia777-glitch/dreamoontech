/**
 * DreamoonTech 主题切换脚本
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'theme-preference';

  // 太阳图标 - 暗黑模式显示
  const sunIcon = '<path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>';

  // 月亮图标 - 明亮模式显示
  const moonIcon = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9c0-.83.15-1.64.43-2.38A5.99 5.99 0 0 0 12 3z"/>';

  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    setupToggleButton();
    updateIcon();
  }

  function setupToggleButton() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    btn.addEventListener('click', function() {
      const html = document.documentElement;
      const isLight = html.getAttribute('data-theme') === 'light';

      if (isLight) {
        html.removeAttribute('data-theme');
        localStorage.setItem(STORAGE_KEY, 'dark');
      } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem(STORAGE_KEY, 'light');
      }
      updateIcon();
    });
  }

  function updateIcon() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';

    // 暗黑模式 = 太阳，明亮模式 = 月亮
    const icon = isLight ? moonIcon : sunIcon;

    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">' + icon + '</svg>';
  }

  // 页面加载时初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
