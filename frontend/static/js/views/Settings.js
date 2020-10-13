import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Settings");

    }

    async getHtml() {
        return `<h1>This is where the settings are </h1>
            <p>
                <a href="/posts" data-link>View recent posts</a>
            </p>

        `;
    }
}