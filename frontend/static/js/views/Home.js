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
                        <img class="d-block w-100" src="/static/Slideshowimages/KidRunning.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/static/Slideshowimages/TTO.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/static/Slideshowimages/secret_santa.jpg" alt="Third slide">
                    </div>
                </div>
            </div>
        

        <div class="statistics">
            <div class="statistics-header"><h2>IN THE PAST 20 YEARS</h2></div>
            <div class="statistics-flexbox">
                <div class="statistics-item">
                    <div class="statistics-value">2,400</div>
                    PEOPLE SERVED
                </div>
                <div class="statistics-item">
                    <div class="statistics-value">16,000</div>
                    CHILD ABUSE CASES INVESTIGATED
                </div>
                <div class="statistics-item">
                    <div class="statistics-value">12,000</div>
                    ADULTS TRAINED
                </div>
            </div>
        </div>

            
            <div class="container my-4">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/kALhKx71dT8" allowfullscreen></iframe>
              </div>
          </div>



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