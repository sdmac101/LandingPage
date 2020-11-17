import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Our Team");

    }

    async getHtml() {
        return `
        <div class = "pImg">
            <div class = "pText">
                <span class = "border">
                    CAC Staff
                </span>
            </div>
        </div>

        <section class = "section-light">
            <div class="row">
                <div class="column">
                   <div class="card">
                    <a href= "#" class="team"></a>
                        <div class="container">
                            <h2>Jane Doe</h2>
                            <p class="title">CEO &amp; Founder</p>
                        </div>
                    </div>
                </div>
            
                <div class="column">
                <div class="card">
                <a href= "#" class="team"></a>
                    <div class="container">
                    <h2>Mike Ross</h2>
                    <p class="title">Art Director</p>
                    </div>
                </div>
                </div>
            
                <div class="column">
                <div class="card">
                <a href= "#" class="team"></a>
                    <div class="container">
                    <h2>John Doe</h2>
                    <p class="title">Designer</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        `;
    }
}