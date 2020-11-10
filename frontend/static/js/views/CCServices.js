import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Cannon County Services");

    }

    async getHtml() {
        return `
            <h1> Testing the Cannon Services Page </h1>
        `;
    }
}