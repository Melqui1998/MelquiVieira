//Tab Menu Projetos
document.getElementById("defaultOpen").click();

function openTab (evt, tabName){
    let tabContent = document.getElementsByClassName('tabcontent');
    let tabLinks = document.getElementsByClassName('tablinks');


for (let i=0; i<tabContent.length; i++){
    tabContent[i].style.display = 'none';
}

    for (let i=0; i<tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace("active", " ");
}

document.getElementById(tabName).style.display = "flex";
evt.currentTarget.className += " active";
}

/*Objeto Projeto:
Nome: String Adimo Imóveis
Tecnologias: String[]: ['html', 'css', 'js'];
Tipo: String = 'Website;
Descricao: String = lorem15
Link: String https://www.google.com/
BgImage: string = url(../img/predio.png);*/

//PROJETOS