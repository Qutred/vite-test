import { describe, expect, test, beforeEach, afterEach, vi } from 'vitest';
import createCounter from './counter.js';

describe('Test counter functionality', () => {
  let counterElement;
  let button;
  let counterValue;
  const root = document.createElement('div');
  root.setAttribute('id', 'root');

  beforeEach(() => {
    document.body.append(root);
    counterElement = createCounter();
    root.appendChild(counterElement);
    button = counterElement.querySelector('#button-increment');
    counterValue = counterElement.querySelector('#counter-value');
  });

  afterEach(() => {
    root.remove();
  });

  it('Should create a counter element with initial value 0', () => {
    expect(counterValue.textContent).toBe('0');
  });

  it('Should increment the counter value when button is clicked', () => {
    button.click();
    expect(counterValue.textContent).toBe('1');

    button.click();
    expect(counterValue.textContent).toBe('2');
  });

  it('Should contain a button', () => {
    expect(counterElement.innerHTML).toContain(
      '<button id="button-increment">Increment</button>'
    );
  });

  it('Callback function should be called on button click', () => {
    const mockFunction = vi.fn();
    button.addEventListener('click', mockFunction);
    button.click();
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
