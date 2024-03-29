// -> cd /Users/solene/Sites/bonjoursolene ; npm run watch
// -> cd /Users/solene/Sites/bonjoursolene ; npm run build; git add -A; git commit -am "update"; git push
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: false
});

scroll.on('scroll', (args) => {
    if(typeof args.currentElements['footer'] === 'object') {
        scroll.update();
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
