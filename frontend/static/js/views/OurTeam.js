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


        <div class = "pImg1">
            <div class = "pText1">
                <span class = "border1">
                    Executive Committee
                </span>
            </div>
        </div>
            
        <div class="card-group">
            <div class="card" style="width: 18rem; text-align: center;">
                <div class="card-body">
                    <h4 class="card-title">Jennings H. Jones</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Board of Directors President</h6>
                    <h6 class="card-subtitle mb-2 text-muted">District Attorney General</h6>
                </div>
            </div>

            <div class="card" style="width: 18rem; text-align: center;">
                <div class="card-body">
                    <h4 class="card-title">Terry A. Fann</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Vice President</h6>
                </div>
            </div>

            <div class="card" style="width: 18rem; text-align: center;">
                <div class="card-body">
                    <h4 class="card-title">Tammy Greer, CPA</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Treasurer</h6>
                </div>
            </div>
            
            <div class="card" style="width: 18rem; text-align: center;">
                <div class="card-body">
                    <h4 class="card-title">Catherine M. Post</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Secretary</h6>
                </div>
            </div>

            <div class="card" style="width: 18rem; text-align: center;">
                <div class="card-body">
                    <h4 class="card-title">Elizabeth Renegar Parker</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Nominating Committee Chair person</h6>
                </div>
            </div>

            <div class="card" style="width: 18rem; text-align: center;">
                <div class="card-body">
                    <h4 class="card-title">Tracy D. Sheppard</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Fundraising Committee Chair</h6>
                </div>
            </div>
        </div>

        <div class = "pImg1">
            <div class = "pText1">
                <span class = "border1">
                    Board Members
                </span>
            </div>
        </div>

        <div class="card-group">
            <div class="card" style="width: 18rem; text-align: center;">
                <div class="card-body">
                    <h4 class="card-title">Taminko Amuzu</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Department of Children’s Services</h6>
                </div>
            </div>

            <div class="card" style="width: 18rem; text-align: center;">
                <div class="card-body">
                    <h4 class="card-title">Chief Kevin Arnold</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Smyrna Police Department</h6>
                </div>
            </div>

            <div class="card" style="width: 18rem; text-align: center;">
                <div class="card-body">
                    <h4 class="card-title">Chief Michael Bowen</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Murfreesboro Police Department</h6>
                </div>
            </div>
            
            <div class="card" style="width: 18rem; text-align: center;">
                <div class="card-body">
                    <h4 class="card-title">Dr. Tammy Garrett</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Murfreesboro City Schools</h6>
                </div>
            </div>

            <div class="card" style="width: 18rem; text-align: center;">
                <div class="card-body">
                    <h4 class="card-title">Aurelia Holden</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Charity Circle Representative</h6>
                </div>
            </div>

            <div class="card" style="width: 18rem; text-align: center;">
                <div class="card-body">
                    <h4 class="card-title">Emily Hutchinson</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Junior League Representative</h6>
                </div>
            </div>

            <div class="card" style="width: 18rem; text-align: center;">
                <div class="card-body">
                    <h4 class="card-title">Katie Jordan</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Charity Circle Representative</h6>
                </div>
            </div>

            <div class="card" style="width: 18rem; text-align: center;">
                <div class="card-body">
                    <h4 class="card-title">Deirdre C. Lackey</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Tennessee Office of Child Welfare Reform</h6>
                </div>
            </div>

            <div class="card" style="width: 18rem; text-align: center;">
                <div class="card-body">
                    <h4 class="card-title">Betsy Murfree</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Junior League Representative</h6>
                </div>
            </div>

            <div class="card" style="width: 18rem; text-align: center;">
                <div class="card-body">
                    <h4 class="card-title">William C. Whitesell, Jr.</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Retired District Attorney General</h6>
                </div>
            </div>
        </div>
        `;
    }
}