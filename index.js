/*let aux = document.getElementById('about');

let aux2 = aux.getElementsByTagName('ul')[0];

let aux3 = document.createElement('li');
aux3.innerHTML = "<strong>Cona</strong>";

document.getElementById('about').getElementsByTagName('ul')[0].appendChild(aux3);

let aux4 = document.getElementById('about').getElementsByTagName('li')[2]

document.aux2.removeChild(aux4)

let aux = document.getElementById('information').getElementsByTagName('div');
aux[1].innerHTML = "<p>Coisas top</p>"*/

function clearMainScreen () {
    for (const element of infoList) {
        element.style.display = 'none';
    }
}

function thinList () {
    for (const element of list) {
        element.style.fontWeight = 'normal';
    }
}

function listManager (pos) {
    clearMainScreen();
    thinList();
    infoList[pos+1].style.display = 'block';
    list[pos].style.fontWeight = 'bolder';
}

let infoList = [document.getElementById('home'),
                document.getElementById('about'),
                document.getElementById('education'),
                document.getElementById('experience'),
                document.getElementById('projects'),
                document.getElementById('contact')];

let list = document.getElementById('list').getElementsByTagName('a');


for (let i = 0; i < 5; i++) {
    list[i].onclick = function() {listManager(i);};
}