import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Home");

    }

    async getHtml() {
        return `
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="/static/footerimages/cactn.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Third slide">
                    </div>
                </div>
            </div>
        
        <h1>Welcome back dude! </h1>
            <p>
                this is a test for single page application to be used for cac
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>
            </p>


        <section class="newsletter">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="content">
                            <form>
                                <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                                <div class="input-group">
                                    <input type="email" class="form-control" placeholder="Enter your email">
                                    <span class="input-group-btn">
                                        <button class="btn" type="submit">Join</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        `;
    }
}