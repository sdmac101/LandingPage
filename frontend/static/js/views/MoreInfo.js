import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("More Information");

    }

    async getHtml() {
        return `
            <h1> Testing the more info Page </h1>
        `;
    }
}