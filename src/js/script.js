let sections = document.querySelectorAll('section');
let valueDisplays = document.querySelectorAll('.numbers');
let interval = 1000;

function checkVisibility() {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 250;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  });
}

function startAnimationIfVisible() {
  valueDisplays.forEach(valueDisplay => {
    let rect = valueDisplay.getBoundingClientRect();
    let isInViewport = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

    if (isInViewport && !valueDisplay.hasAttribute('data-animated')) {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute('data-val'), 10);
      console.log(`endValue for this element: ${endValue}`);

      let duration = Math.floor(interval / (endValue - startValue));

      let counter = setInterval(() => {
        if (startValue <= endValue) {
          valueDisplay.textContent = startValue;
          startValue += 1;
        } else {
          clearInterval(counter);
          valueDisplay.setAttribute('data-animated', 'true');
        }
      }, duration);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  checkVisibility();
  startAnimationIfVisible();
});


window.onscroll = () => {
  checkVisibility();
  startAnimationIfVisible();
};
