// Keep hash-based page navigation separate from Lenis anchor scrolling.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function configureSmoothScroll() {
  window.portfolioScroll?.destroy();
  window.portfolioScroll = null;

  // Native scrolling remains available if the CDN is unavailable.
  if (document.documentElement.dataset.motion === 'off' || reducedMotion.matches || typeof window.Lenis !== 'function') return;

  window.portfolioScroll = new window.Lenis({
    autoRaf: true,
    duration: 1.1,
    smoothWheel: true,
    syncTouch: false,
    anchors: false,
  });

  if (document.querySelector('#viewer')?.open) window.portfolioScroll.stop();
}

reducedMotion.addEventListener('change', configureSmoothScroll);
configureSmoothScroll();
