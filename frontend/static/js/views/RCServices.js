import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Rutherford County Services");

    }

    async getHtml() {
        return `

            <div class="jumbotron jumbotron-fluid RC-hero">
                <div class="container">
                    <h1 class="display-4">Rutherford County</h1>
                    
                </div>
            </div>
            
        `;
    }
}