import { describe, expect, test, beforeEach, afterEach, vi } from 'vitest';
import { createForm } from './form.js';

describe('Test form functionality', () => {
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  const formElement = createForm();
  const form = formElement.querySelector('.input-form');
  const inputField = formElement.querySelector('.input-field');
  const itemList = formElement.querySelector('.item-list');

  beforeEach(() => {
    root.appendChild(formElement);
    document.body.append(root);
  });

  afterEach(() => {
    root.remove();
  });

  it('Should render a form with an input field and a submit button', () => {
    expect(root.innerHTML).toContain(
      `<form class="input-form">
      <input type="text" class="input-field">
      <button type="submit" class="submit-button">Отправить</button>
    </form>
    <ul class="item-list"></ul>
  `
    );
  });

  it('When clicking submit button, the value from the input is converted into a list item.', () => {
    inputField.value = 'Test Item';
    form.dispatchEvent(new Event('submit'));
    expect(itemList.innerHTML).toContain('<li>Test Item</li>');
  });

  it('When clicking submit button, the value from the input is cleared.', () => {
    inputField.value = 'Test Item';
    form.dispatchEvent(new Event('submit'));
    expect(inputField.value).toBe('');
  });

  it('callback will be called like event listener on submit event.', () => {
    const mockFunction = vi.fn();

    form.addEventListener('submit', mockFunction);
    inputField.value = 'Test Item';
    form.dispatchEvent(new Event('submit'));
    expect(mockFunction).toHaveBeenCalled();
  });

  it('callback will be called like event listener on submit event with submit event object', () => {
    const mockFunction = vi.fn();
    const event = new Event('submit');
    form.addEventListener('submit', mockFunction);
    inputField.value = 'Test Item';
    form.dispatchEvent(event);
    expect(mockFunction).toHaveBeenCalledWith(event);
  });

  it('You cannot add an item to a list that consists entirely of spaces.', () => {
    inputField.value = '   ';
    form.dispatchEvent(new Event('submit'));
    expect(itemList.innerHTML).not.toContain('<li>   </li>');
  });

  it('The value must not be less than 2 and more than 25 characters.', () => {
    inputField.value = 'A';
    form.dispatchEvent(new Event('submit'));
    expect(itemList.innerHTML).not.toContain('<li>A</li>');

    inputField.value = 'This is a very long input value';
    form.dispatchEvent(new Event('submit'));
    expect(itemList.innerHTML).not.toContain(
      '<li>This is a very long input value</li>'
    );
  });
});
