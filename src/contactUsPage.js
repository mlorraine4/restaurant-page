
function loadContactUs() {
    var descriptionDiv = document.querySelector('.description');

    var contactUsText = document.createElement('div');
    contactUsText.classList.add('contactUsText');
    contactUsText.textContent = "Spend all your money here! Find us at 831 Bottom Feeder Lane in Bikini Bottom.";
    descriptionDiv.appendChild(contactUsText);
    
    var contactUsImg = document.createElement('div');
    contactUsImg.classList.add('contactUsImg');
    descriptionDiv.appendChild(contactUsImg);

}

export { loadContactUs };