import 'htmx.org';
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <button id="counter" hx-trigger="click" hx-get="/counter" hx-swap="outerHTML">0</button>
`;