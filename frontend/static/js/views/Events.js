import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Events");

    }

    async getHtml() {
        return `
        <div class="conatiner post-body">
            <h1 class="heading-1">Events</h1>
            <div class="baseline-1"></div>
            <div class="baseline-2"></div>

            <div class="row content-row">
                <div class="col-6 left-content">
                    <h1>NOVEMBER 1~19 2020</h1>
                    <p class="right-content-p">19 Days of Activism for the Prevention of Violence and Abuse Against Children and Youth</p>
                    <div class="right-join-btn">
                        <button class="">Join</button>
                    </div>
                </div>
                <div class="col-6 img-col">
                    <img src="/static/images/shoes.png"> </img>
                </div>
            </div>

            <div class="row content-row">
                <div class="col-6 img-col">
                    <img src="/static/images/ball.png"> </img>
                </div>
                <div class="col-6 right-content">
                    <h1>NOVEMBER 7 2020</h1>
                    <h3 class="content-h3">Turkey Tee Off</h3>
                    <span class="right-content-span">The Turkey Tee Off is a golf tournament held on the first Saturday in November.  
                    Registration begins at 8 a.m., with a breakfast, guest speakers, and a 9 a.m. tee off.  
                    A Slick Pig BBQ lunch is provided after the tournament with a silent auction and prizes for the winners.  
                    Phillip and Steven Smith and the Smith family were the founders of the event.  
                    2020 is the 10th year for the Turkey Tee Off.</span>
                    <div class="right-join-btn">
                        <button class="">Register</button>
                    </div>
                </div>

            </div>

            <div class="row content-row">
                <div class="col-6 left-content">
                    <h1>APRIL 2021</h1>
                    <h3 class="content-h3">Hometown Heroes Walk for Children</h3>
                    <span class="right-content-span">Child Advocacy Center celebrates Child Abuse Prevention Month in April, with the 
                    Hometown Heroes Walk for Children. The free event is held on one of the last Fridays in April. 
                    The Walk begins at the Murfreesboro Civic Plaza. The event concludes with a picnic lunch at the 
                    Child Advocacy Center. Sponsors, law enforcement, and local supporters are included in over 
                    400 people that attend the event.  Awards are presented to local hometown heroes.
                    Prior to that, the Child Advocacy Center hosted Andrea Walks for Tennessee’s Children for 6 years. 
                    Former First Lady Andrea Conte was the founder of the event.</span>
                    <div class="right-join-btn">
                        <button class="">Join</button>
                    </div>
                </div>
                <div class="col-6 img-col">
                    <img src="/static/images/children_playing.png"> </img>
                </div>
            </div>

            <div class="row content-row">
                <div class="col-6 img-col">
                    <img src="/static/images/road.png"> </img>
                </div>
                <div class="col-6 right-content">
                    <h1>MAY 2021</h1>
                    <h3 class="content-h3">Cannon Runs for Children</h3>
                    <span class="right-content-span">Cannon Runs for Children is a fun run that is held on a Saturday.  
                    Children and their parents run in the event.  The Run funds the Cannon County Child Advocacy Center.  
                    It is a 3.1 mile course.  The race begins at 7:30 a.m. at Dillon Park, registration starts at 6:45 a.m., with speakers at 7:15 a.m. 
                    There is a $20 entry fee for adults and children run FREE!!  2021 is the 4th year for the event. </span>
                    <div class="right-join-btn">
                        <button class="">Register</button>
                    </div>
                </div>

            </div>

            <div class="row content-row">
                <div class="col-6 left-content">
                    <h1>SEPTEMBER 2021</h1>
                    <h3 class="content-h3">Light Up the Night</h3>
                    <span class="right-content-span">Light Up the Night is an end of the summer party that has been held on a Friday evening in September.  
                    Guests dance under the starts, mix and mingle, and enjoy a summer evening.  
                    Guests are asked to wear white to help Light Up the Night.  2021 is the 4th year for the event. </span>
                    <div class="right-join-btn">
                        <button class="">Register</button>
                    </div>
                </div>
                <div class="col-6 img-col">
                    <img src="/static/images/lights.png"> </img>
                </div>
            </div>
        </div>`
    }
}
