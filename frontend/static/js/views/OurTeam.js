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
            <div class="card-wrapper">
                <div class="ot-card">
                    <img src="static/ourteamimages/young-pic1.jpg" class="profile-img-front">
                    <img src="static/ourteamimages/adult-pic1.jpg" class="profile-img-back">
                    <h2>Long Name Is A Bad Thing</h2>
                    <p class="job-title">Job Tilte</p>
                </div>
                <div class="ot-card">
                    <img src="static/ourteamimages/young-pic2.jpg" class="profile-img-front">
                    <img src="static/ourteamimages/adult-pic2.jpg" class="profile-img-back">
                    <h2>Long Name Is A Bad Thing</h2>
                    <p class="job-title">Job Tilte</p>
                </div>
                <div class="ot-card">
                    <img src="static/ourteamimages/young-pic3.jpg" class="profile-img-front">
                    <img src="static/ourteamimages/adult-pic3.jpg" class="profile-img-back">
                    <h2>Another Long Name </h2>
                    <p class="job-title">Job Tilte</p>
                </div>
                <div class="ot-card">
                    <img src="static/ourteamimages/young-pic1.jpg" class="profile-img-front">
                    <img src="static/ourteamimages/adult-pic1.jpg" class="profile-img-back">
                    <h2>Another Random Name</h2>
                    <p class="job-title">Job Tilte</p>
                </div>
                
            </div>
        </section>
        `;
    }
}