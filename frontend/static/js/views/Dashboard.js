import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Dashboard");

    }

    async getHtml() {
        return `<h1>Welcome back dude! </h1>
            <p>
                this is a test for single page application to be used for cac
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>
            </p>

        `;
    }
}