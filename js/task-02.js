const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulIngr = document.querySelector('#ingredients');
let str = '';
ingredients.forEach(elem => {
  str += `<li>${elem}</li>`;
});
ulIngr.insertAdjacentHTML('afterbegin', str);
