import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Rutherford County Services");

    }

    async getHtml() {
        return `
            <h1> Testing the Rutherford Services Page </h1>
        `;
    }
}