import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Press Releases");

    }

    async getHtml() {
        return `
            <h1> Testing the press release Page </h1>
        `;
    }
}