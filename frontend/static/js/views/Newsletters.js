import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Newsletters");

    }

    async getHtml() {
        return `
            <h1> Testing the newsletter Page </h1>
        `;
    }
}