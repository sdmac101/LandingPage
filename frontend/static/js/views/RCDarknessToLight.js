import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Rutherford County Darkness To Light");

    }

    async getHtml() {
        return `
            <h1> Testing the Rutherford D2L Page </h1>
        `;
    }
}