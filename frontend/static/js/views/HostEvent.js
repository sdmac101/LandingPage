import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Host An Event");
    }

    async getHtml() {
        return `
        <div class="conatiner post-body bg-light-gray">
            <h1 class="host-event-title">Host an Event</h1>
            <div class="baseline-1"></div>
            <div class="baseline-2"></div>
            <p class="events-para">Would like to host an event? <br />
                Send us the information!</p>
            <div>
                <div class="lights-bg-img">
                    <img src="/static/images/lights-bg.png"></img>
                    <div class="event-form-body">

                        <form class="event-form">
                            <div class="form-group">
                                <input type="text" class="form-control form-control-hover " id="userName" aria-describedby="userName" placeholder="Name" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control form-control-hover" id="userEmail" aria-describedby="emailHelp" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control form-control-hover" id="eventName" aria-describedby="eventName" placeholder="Name of the event" />
                            </div>
                            <div class="form-group">
                                <textarea class="form-control form-control-hover event-textarea" id="aboutEvent" rows="3" placeholder="Brief description of the event"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary submit-btn">Submit Request</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>`

    }
}
