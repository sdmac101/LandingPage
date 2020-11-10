import Home from "./views/Home.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";
// Rutherford County pages
import RCServices from "./views/RCServices.js";
import RCDarknessToLight from "./views/RCDarknessToLight.js";
import RCCPITTeam from "./views/RCCpitTeam.js";
// Cannon County Pages
import CCServices from "./views/CCServices.js";
import CCDarknessToLight from "./views/CCDarknessToLight.js";
import CCCPITTeam from "./views/CCCpitTeam.js";
// Our Team Pages
import OurTeam from "./views/OurTeam.js";
import CommunityPartners from "./views/CommunityPartners.js";
// Family Services
import FamilyServices from "./views/FamilyServices.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};


const router = async () => {
    const routes = [
        {path: "/", view: Home},
        {path: "/posts", view: Posts},
        {path: "/settings", view: Settings},
        {path: "/rutherford_services", view: RCServices},
        {path: "/rutherford_darkness_to_light", view: RCDarknessToLight},
        {path: "/rutherford_cpit", view: RCCPITTeam},
        {path: "/cannon_services", view: CCServices},
        {path: "/cannon_darkness_to_light", view: CCDarknessToLight},
        {path: "/cannon_cpit", view: CCCPITTeam},
        {path: "/our_team", view: OurTeam},
        {path: "/community_partners", view: CommunityPartners},
        {path: "/family_services", view: FamilyServices}
    ];

    const potentialMatches = routes.map( route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match) {
        match = {
            // come up with own "not found" route instead of defaulting to dashboard
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

};

// works for back and forward button in history navigation
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});