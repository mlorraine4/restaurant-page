import { loadHeader, loadHomeDescription } from "./homepage.js";
import { loadContactUs } from "./contactUsPage.js";
import { loadMenuPage } from "./menuPage.js";
import './style.css';

const website = (() => {

    var btnsObj = loadHeader();
    var descriptionDiv = btnsObj.description;

    btnsObj.homeBtn.addEventListener('click', () => {
        descriptionDiv.innerHTML = "";
        loadHomeDescription();
    });

    btnsObj.menuBtn.addEventListener('click', () => {
        descriptionDiv.innerHTML = "";
        loadMenuPage();
    });

    btnsObj.contactUsBtn.addEventListener('click', () => {
        descriptionDiv.innerHTML = "";
        loadContactUs();
    });

})();


