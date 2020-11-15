import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Volunteer");

    }

    async getHtml() {
        return `
            <h1> Testing the Volunteer Page </h1>
        `;
    }
}