import './styles/blocks/form.scss';

const MIN_LENGTH = 2;
const MAX_LENGTH = 25;

export function createForm() {
  const formElement = document.createElement('div');
  formElement.innerHTML = `
    <form class="input-form">
      <input type="text" class="input-field">
      <button type="submit" class="submit-button">Отправить</button>
    </form>
    <ul class="item-list"></ul>
  `;

  const form = formElement.querySelector('.input-form');
  const inputField = formElement.querySelector('.input-field');
  const itemList = formElement.querySelector('.item-list');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const value = inputField.value.trim();

    if (value) {
      const { length } = value;
      if (length < MIN_LENGTH || length > MAX_LENGTH) return;

      const listItem = document.createElement('li');
      listItem.textContent = value;
      itemList.appendChild(listItem);
      inputField.value = '';
    }
  });

  return formElement;
}
