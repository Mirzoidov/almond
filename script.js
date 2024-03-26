
let menu = document.querySelector('#menu');
let menuLists = document.querySelector("#menu-lists");
menu.onclick = function () {
    menuLists.style = "display: flex";
    document.getElementById("close").style = "display: block";
    document.getElementById("close").onclick = function () {
        menuLists.style = "display: none";
    };
};