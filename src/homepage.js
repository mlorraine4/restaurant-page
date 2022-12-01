


function loadHeader() {

    var header = document.createElement('div');
    header.classList.add('header');

    var title = document.createElement('div');
    title.textContent = 'THE KRusTy KRaB';
    title.classList.add('title');

    var menuBtn = document.createElement('button');
    menuBtn.textContent = 'Galley Grub'
    var homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home'
    var contactUsBtn = document.createElement('button');
    contactUsBtn.textContent = 'Contact Us'

    header.appendChild(title);
    header.appendChild(homeBtn);
    header.appendChild(menuBtn);
    header.appendChild(contactUsBtn);

    var description = document.createElement('div');
    description.classList.add('description');

    var content = document.querySelector('#content');
    content.appendChild(header);
    content.appendChild(description);

    loadHomeDescription();

    return { homeBtn, menuBtn, contactUsBtn, description };
};

function loadHomeDescription() {

    var description = document.querySelector('.description')

    var descriptionText = document.createElement('p');
    descriptionText.classList.add('homeText')
    descriptionText.textContent = 'Home of the KRABBY PATTY!';
    description.appendChild(descriptionText);


    var kpImg = document.createElement('div');
    kpImg.classList.add('homeImg');
    description.appendChild(kpImg);
};

export { loadHeader, loadHomeDescription };