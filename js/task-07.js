const defSize = window
  .getComputedStyle(document.querySelector('body'))
  .getPropertyValue('font-size'); //находим font-size по default
const vol = document.getElementById('font-size-control');
vol.value = 0;
const str = document.getElementById('text');
vol.addEventListener('input', () => {
  str.style.fontSize = `${parseInt(defSize) * parseInt(vol.value)}px`;
});
