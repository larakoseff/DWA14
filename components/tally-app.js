import { LitElement, html } from "../libs/lit-html.js"




class App extends LitElement {

constructor() {
    super()
}
    /**
     * 
     * @returns {any}
     */
render() {
    return html `<div>12234</div>`
}
}

customElements.define("tally-app", App)