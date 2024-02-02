import 'htmx.org';
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <button id="counter" hx-get="/counter">Counter is 0</button>
`;