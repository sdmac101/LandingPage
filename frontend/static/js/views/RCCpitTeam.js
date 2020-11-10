import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Rutherford County CPIT Team");

    }

    async getHtml() {
        return `
            <h1> Testing the Rutherford CPIT Page </h1>
        `;
    }
}