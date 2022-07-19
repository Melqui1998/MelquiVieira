//Tab Menu Projetos
document.getElementById("defaultOpen").click();

function openTab (evt, tabName){
    let tabContent = document.getElementsByClassName('tabcontent');
    let tabLinks = document.getElementsByClassName('tablinks');

// Get all elements with class="tabcontent" and hide them
for (let i=0; i<tabContent.length; i++){
    tabContent[i].style.display = 'none';
}

// Get all elements with class="tablinks" and remove the class "active"
    for (let i=0; i<tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace("active", " ");
}

// Show the current tab, and add an "active" class to the button that opened the tab
document.getElementById(tabName).style.display = "flex";
evt.currentTarget.className += " active";
}