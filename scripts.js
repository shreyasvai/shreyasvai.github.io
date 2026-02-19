(function(){
  function init(){
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('icon-open');
    const closeIcon = document.getElementById('icon-close');
    if (!btn) return;
    btn.addEventListener('click', function(){
      const nowHidden = menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!nowHidden));
      if (openIcon) openIcon.classList.toggle('hidden');
      if (closeIcon) closeIcon.classList.toggle('hidden');
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
