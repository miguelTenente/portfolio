//FUNCTIONS

//Menu Functions
//Menu Button Listener to oppen the menu of the page
function menuButtonListener () {
    menuButton.onclick = function() {menuButtonManager()};
}

function menuButtonManager () {
    if (menu.style.display === 'none') openMenu();
    else closeMenu();
}

function openMenu () {
    menu.style.display = 'block';
}

function closeMenu () {
    menu.style.display = 'none';
}



//VARIABELS
//Menu
let menu = document.getElementById('menu');
//Menu Button
let menuButton = document.getElementById('menu_button');




//ACTIONS FROM THE USER
menuButtonListener();