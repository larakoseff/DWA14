import { LitElement, html, css } from "../libs/lit-html.js"


class App extends LitElement {

    static styles = css`
  :root {
--color-green: #31c48d;
--color-red-light: #f2dede;
--color-red-dark: #a94442;
--color-white: #ffffff;
--color-dark-grey: #33333d;
--color-medium-grey: #424250;
--color-light-grey: #9ca3ae;
}

* {
    box-sizing: border-box;
}

html {
    height: 100vh;
}

body {
    margin: 0;
    background: var(--color-medium-grey);
    color: var(--color-white);
    font-family: Roboto, Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}

/* header */

.header {
    text-align: center;
}

.header__title {
    font-size: 3rem;
    font-weight: 900;
    color: var(--color-light-grey);
}

/* controls */

.controls {
    background: yellow;
}

/* counter */
.counter {
    max-width: 30rem;
    background: var(--color-dark-grey);
}

.counter__value {
    width: 100%;
    height: 15rem;
    text-align: center;
    font-size: 6rem;
    font-weight: 900;
    color: var(--color-white);
    background: none;
    border-width: 0;
    border-bottom: 1px solid var(--color-light-grey);
}

.counter__actions {
    display: flex;
}

.counter__button {
background: none;
width: 50%;
border-width: 0;
color: var(--color-white);
font-size: 3rem;
height: 10rem;
border-bottom: 1px solid var(--color-light-grey);
transition: transform 0.1s;
transform: translateY(0);
}

.counter__button:disabled {
    opacity: 0.2;
}

.counter__button:active {
    background: var(--color-medium-grey);
    transform: translateY(2%);
}

.counter__button_first {
    border-right: 1px solid var(--color-light-grey);
}
    `;

constructor() {
    super();
    this.number = 0; 
  }

  subtractHandler(event) {
    event.preventDefault();

    const MIN_NUMBER = -100;
    const STEP_AMOUNT = 1;

    this.number -= STEP_AMOUNT;

    if (this.number <= MIN_NUMBER) {
    }
  }

  addHandler(event) {
    event.preventDefault();
    const MAX_NUMBER = 100;
    const STEP_AMOUNT = 1;

    this.number += STEP_AMOUNT;

    if (this.number >= MAX_NUMBER) {
    }
  }

  render() {
    return html`
      <header class="header">
        <h1 class="header__title">Tally Count</h1>
      </header>
      <main class="counter">
        <input class="counter__value" readonly .value="${String(this.number)}" />
        <div class="counter__actions">
          <button @click="${this.subtractHandler}" class="counter__button counter__button_first">-</button>
          <button @click="${this.addHandler}" class="counter__button">+</button>
        </div>
      </main>
    `;
  }
}

customElements.define('tally-app', App);


