import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Gratitude");

    }

    async getHtml() {
        return `
            <h1> Testing the Gratitude Page </h1>
        `;
    }
}