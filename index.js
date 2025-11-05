//FUNCTIONS

//Clear the #information section (MainScreen)
function clearMainScreen () {
    for (const element of infoList) {
        element.style.display = 'none';
    }
}

//Makes the letters of the elements from the #list thinner
function thinList () {
    for (const element of list) {
        element.style.fontWeight = 'normal';
    }
}

//Manage what to show in the #information and respective list representetive
function mainScreenManager (pos) {
    clearMainScreen();
    thinList();
    if (pos < infoList.length - 1) {
        list[pos].style.fontWeight = 'bolder';
    }
    infoList[pos].style.display = 'block';
}

//Listener of what to show in the #information (MainScren)
function mainScreenListener () {
    for (let i = 0; i < infoList.length - 1; i++) {
        list[i].onclick = function() {mainScreenManager(i)};
    }

    icon.onclick = function() {mainScreenManager(infoList.length - 1)};
}



//VARIABELS

//Array of the elements that can appear on the #information section (MainScreen) 
let infoList = [document.getElementById('about'),
                document.getElementById('education'),
                document.getElementById('experience'),
                document.getElementById('software_projects'),
                document.getElementById('automation_projects'),
                document.getElementById('contact'),
                document.getElementById('home')];

//Having acess to the array of the li from #list                
let list = document.getElementById('list').getElementsByTagName('a');

//Icon from the webpage
let icon = document.getElementById('header_icons').getElementsByTagName('a')[0];



//ACTIONS FROM THE USER
mainScreenListener();