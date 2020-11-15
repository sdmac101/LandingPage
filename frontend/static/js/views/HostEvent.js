import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Host An Event");

    }

    async getHtml() {
        return `
            <h1> Testing the Host Event Page </h1>
        `;
    }
}