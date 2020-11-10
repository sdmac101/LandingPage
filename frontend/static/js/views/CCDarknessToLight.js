import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Cannon County Darkness To Light");

    }

    async getHtml() {
        return `
            <h1> Testing the Cannon D2L Page </h1>
        `;
    }
}