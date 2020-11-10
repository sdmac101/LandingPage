import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Community Partners");

    }

    async getHtml() {
        return `
            <h1> Testing the Community Partners Page </h1>
        `;
    }
}