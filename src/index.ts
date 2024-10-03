const inputElement = document.getElementById('inputValue') as HTMLInputElement;
const displayElement = document.getElementById('displayValue') as HTMLParagraphElement;

inputElement.addEventListener('input', () => {
  displayElement.textContent = inputElement.value;
});

if (module.hot) {
  module.hot.accept();
}
