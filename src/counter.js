export default () => {
  const counterElement = document.createElement('div');
  counterElement.className = 'counter-wrapper';
  counterElement.innerHTML = `
    <h1>Counter</h1>
    <button id="button-increment">Increment</button>
    <span id="counter-value">0</span>
  `;

  let count = 0;
  const button = counterElement.querySelector('#button-increment');
  const counterValue = counterElement.querySelector('#counter-value');
  button.addEventListener('click', () => {
    count += 1;
    counterValue.textContent = count;
  });
  return counterElement;
};
