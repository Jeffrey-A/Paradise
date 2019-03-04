const menuButton = document.querySelector("#menu-icon-container");
const ul =  document.querySelector("ul");
const menuIcon =  document.querySelector("#menu-icon-container img");
const close = document.createElement("P");
close.textContent ="X"
close.className = "closeMenu";


function expandMenu(){
    if( menuButton.firstChild === menuIcon){
        menuButton.removeChild(menuIcon);
        menuButton.appendChild(close);
        ul.style.display = "block";
    }else{
        closeMenu();
    }

}

function closeMenu(){
    menuButton.removeChild(close);
    menuButton.appendChild(menuIcon);
    ul.style.display ="none";
}

menuButton.addEventListener('click', expandMenu);