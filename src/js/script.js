let sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 250;
    let height = sec.offsetHeight;
  
    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    }
    else {
      sec.classList.remove('show-animate');
    }
    })
}

let valueDisplays = document.querySelectorAll('.numbers');
let interval = 1000;

valueDisplays.forEach((valueDisplay) => {
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
    }
  }, duration);
});
window.onscroll = startAnimationIfVisible;
document.addEventListener('DOMContentLoaded', startAnimationIfVisible);