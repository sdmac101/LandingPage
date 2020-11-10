import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Our Team");

    }

    async getHtml() {
        return `
            <h1> Testing the Family Services Page </h1>
        `;
    }
}