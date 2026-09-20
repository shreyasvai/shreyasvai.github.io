(function(){
  function init(){
    // Mobile menu toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('icon-open');
    const closeIcon = document.getElementById('icon-close');
    if (btn && menu) {
      btn.addEventListener('click', function(){
        const nowHidden = menu.classList.toggle('hidden');
        btn.setAttribute('aria-expanded', String(!nowHidden));
        if (openIcon) openIcon.classList.toggle('hidden');
        if (closeIcon) closeIcon.classList.toggle('hidden');
      });
    }

    // Theme toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleSun = document.getElementById('theme-toggle-sun');
    const themeToggleMoon = document.getElementById('theme-toggle-moon');

    // Sync theme toggle icons based on current class
    function syncThemeIcons() {
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        if (themeToggleSun) themeToggleSun.classList.remove('hidden');
        if (themeToggleMoon) themeToggleMoon.classList.add('hidden');
      } else {
        if (themeToggleSun) themeToggleSun.classList.add('hidden');
        if (themeToggleMoon) themeToggleMoon.classList.remove('hidden');
      }
    }

    if (themeToggleBtn) {
      // Set initial icon state
      syncThemeIcons();

      themeToggleBtn.addEventListener('click', function() {
        // Toggle dark class
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        }
        syncThemeIcons();
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();