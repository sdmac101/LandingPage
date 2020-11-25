import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Rutherford County Services");

    }

    async getHtml() {
        return `
            <div class = "RCImg">
                <h1>Rutherford County</h1>   
            </div>

            <h1 id="services-header"> Services </h1>


            <div class="service-block">
                <div class="block-item">
                    <h1>Forensic Interview</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, vel mollitia. Neque quod alias expedita nam deleniti earum dolorum beatae voluptatem, vitae corporis laudantium natus, repellat ex dicta eum ullam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, recusandae? Quia, praesentium molestias repellat, optio rerum magni iure minus debitis aperiam accusamus ab quam iste, corporis ullam harum unde quis!</p>
                </div>
                <div class="block-item">
                    <img src="static/css/Miscimages/forensic-services-image.jpg" width="440px">
                </div>
            </div>

            <div class="service-block">
                <div class="block-item">
                    <img src="static/css/Miscimages/family-services-image.jpg" width="440px">
                </div>
                <div class="block-item">
                    <h1>Family Services</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, vel mollitia. Neque quod alias expedita nam deleniti earum dolorum beatae voluptatem, vitae corporis laudantium natus, repellat ex dicta eum ullam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, recusandae? Quia, praesentium molestias repellat, optio rerum magni iure minus debitis aperiam accusamus ab quam iste, corporis ullam harum unde quis!</p>
                </div>
            </div>

            <div class="service-block">
                <div class="block-item">
                    <h1>Drug Endangered Children Program</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, vel mollitia. Neque quod alias expedita nam deleniti earum dolorum beatae voluptatem, vitae corporis laudantium natus, repellat ex dicta eum ullam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, recusandae? Quia, praesentium molestias repellat, optio rerum magni iure minus debitis aperiam accusamus ab quam iste, corporis ullam harum unde quis!</p>
                </div>
                <div class="block-item">
                    <img src="static/css/Miscimages/drug-endangered-children-program-image.jpg" width="440px" height="300px">
                </div>
            </div>

            <div class="service-block">
                <div class="block-item">
                    <img src="static/css/Miscimages/bilingual-services-image.jpg" width="440px">
                </div>
                <div class="block-item">
                    <h1>Bilingual Services</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, vel mollitia. Neque quod alias expedita nam deleniti earum dolorum beatae voluptatem, vitae corporis laudantium natus, repellat ex dicta eum ullam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, recusandae? Quia, praesentium molestias repellat, optio rerum magni iure minus debitis aperiam accusamus ab quam iste, corporis ullam harum unde quis!</p>
                </div>
            </div>
        `;
    }
}
