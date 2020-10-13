import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Posts");

    }

    async getHtml() {
        return `<h1>This is where the posts are </h1>
            <p>
                <a href="/" data-link>View dashboard</a>
            </p>

        `;
    }
}