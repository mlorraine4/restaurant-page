function loadMenuPage() {
    
    var description = document.querySelector('.description');
    var menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    var menuTitle = document.createElement('p');
    menuTitle.classList.add('menuTitle');
    menuTitle.textContent = "Galley Grub";

    var menuItems = document.createElement('div');
    menuItems.classList.add('menuItems')
    var item1 = document.createElement('p');
    item1.textContent = "KRABBY PATTY.......... 1.25"
    var item2 = document.createElement('p');
    item2.textContent = "CORAL BiTS"
    var item2price1 = document.createElement('p');
    var item2price2 = document.createElement('p');
    var item2price3 = document.createElement('p');
    item2price1.textContent = "     Small........ 1.00"
    item2price1.classList.add('tab');
    item2price2.textContent = "     Medium........ 1.25"
    item2price2.classList.add('tab');
    item2price3.textContent = "     Large........ 1.50"
    item2price3.classList.add('tab');

    var item4 = document.createElement('p');
    item4.textContent = "KELP RiNGS...... 1.50"
    var item5 = document.createElement('p');
    item5.textContent = "SALTY SEA DOG...... 1.25"
    var item6 = document.createElement('p');
    item6.textContent = "SAiLORS SURPRiSE..... 3.00"
    var item7 = document.createElement('p');
    item7.textContent = "KELP SHAKE......... 2.00"
    var item8 = document.createElement('p');
    item8.textContent = "SEAFOAM SODA";
    var item8price1 = document.createElement('p');
    item8price1.textContent = "     Small......1.00"
    item8price1.classList.add('tab')
    var item8price2 = document.createElement('p');
    item8price2.textContent = "     Medium......1.25"
    item8price2.classList.add('tab')
    var item8price3 = document.createElement('p');
    item8price3.textContent = "     Large......1.50"
    item8price3.classList.add('tab')


    var menuItemsL = [menuTitle, item1, item2, item2price1, item2price2, item2price3, item4, item5];
    var menuLeft = document.createElement('div');

    var i =0;
    menuItemsL.forEach(function(el) {
        el.classList.add("Left"+ i);
        i++;
        menuLeft.append(el);
    });
    
    menuItems.append(item1, item2, item2price1, item2price2, item2price3, item4, item5, item6, item7, item8, item8price1, item8price2, item8price3 )
    menuDiv.append(menuTitle, menuItems);
    description.appendChild(menuDiv);

    var imgDiv = document.createElement('div');
    imgDiv.classList.add('menuImgDiv');
    description.appendChild(imgDiv);

}

export { loadMenuPage };