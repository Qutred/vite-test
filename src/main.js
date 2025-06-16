import './style.scss';
import htmlacademy from './htmlacademy.svg';
import viteLogo from '/vite.svg';

console.log(import.meta.env);

document.querySelector('#app').innerHTML = `
<ol>
    <li>
      <a href="/pages/about/">О нас</a>
    </li>

    <li>
      <a href="/pages/contacts/">Контакты</a>
    </li>

    <li>
      <a href="/pages/articles/">Статьи</a>
    </li>
</ol>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://htmlacademy.ru/" target="_blank">
      <img src="${htmlacademy}" class="logo vanilla" alt="Htmlacademy logo" />
    </a>
    <h1>Hello Vite!</h1>
  </div>
`;
