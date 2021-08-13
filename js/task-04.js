const butIncrement = document.querySelector('button[data-action="increment"]');
const butDecrement = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value');
let rez = 0;

butIncrement.addEventListener(
  'click',
  () => (counterValue.textContent = `${++rez}`)
);
butDecrement.addEventListener(
  'click',
  () => (counterValue.textContent = `${--rez}`)
);
