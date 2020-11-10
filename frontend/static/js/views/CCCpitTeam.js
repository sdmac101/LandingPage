import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Cannon County CPIT Team");

    }

    async getHtml() {
        return `
            <h1> Testing the Cannon CPIT Page </h1>
        `;
    }
}