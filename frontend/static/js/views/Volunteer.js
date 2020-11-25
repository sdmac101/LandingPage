import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Volunteer");

    }

    async getHtml() {
        return `
        <div class="volunteer-view">
            <div class="header" id="parallex">
                <div class="bg-image"></div>
                <div class="heading-tag">
                    <h1>Volunteer</h1>
                </div>
            </div>
        </div>
            <div class="section volunteer-section">
                <div class="container">
                    <div>
                        <p class="para-text-1">Get Involved</p>

                        <form class="volunteer-form">
                            <div class="row">
                                <div class="col-6 left-padding-0">
                                    <div class="form-group">
                                        <input type="text" class="form-control input-box-shadow name-form-control" id="userName" aria-describedby="userName" placeholder="Name" />
                                    </div>
                                </div>
                                <div class="col-6 padding-right-0">
                                    <div class="form-group">
                                        <input type="email" class="form-control input-box-shadow email-form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Email" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control input-box-shadow" id="volunteerRef" aria-describedby="volunteerRef" placeholder="Where did you hear about us" />
                            </div>
                            <div class="form-group">
                                <textarea class="form-control input-box-shadow event-textarea" id="aboutEvent" rows="3" placeholder="Tell us a bit abut your experience with NPO or volunteerwork "></textarea>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control input-box-shadow event-textarea" id="aboutEvent" rows="3" placeholder="What programs are you interested working with?"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary volunteer-btn">Submit Request</button>
                        </form>
                    </div>
                </div>
            </div>
          `
    }
}
