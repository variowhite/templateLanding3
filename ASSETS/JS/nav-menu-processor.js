let body = document.querySelector("body");

let BUTTON_CURRECT_MENU = "nav-menu__item_active";
let BUTTON_HOME = "#nav-menu_home"; 
let BUTTON_FEATURES = "#nav-menu_features";
let BUTTON_WORKS = "#nav-menu_works";
let BUTTON_TEAM = "#nav-menu_team";
let BUTTON_CONTACT = "#nav-menu_contact";


let VIEW_HOME = document.querySelector("#hero");
let VIEW_FEATURES = document.querySelector("#features");
let VIEW_WORKS = document.querySelector("#works");
let VIEW_TEAM = document.querySelector("#team");
let VIEW_CONTACT = document.querySelector("#contacts");

let home = document.querySelector(BUTTON_HOME);
let features = document.querySelector(BUTTON_FEATURES);
let works = document.querySelector(BUTTON_WORKS);
let team = document.querySelector(BUTTON_TEAM);
let contact = document.querySelector(BUTTON_CONTACT);
let ALL_BUTTONS = [home, features, works, team, contact];

UpdateScrollInfo();

home.onclick = ScrollingToHome;
features.onclick = ScrollingToFeatures;
works.onclick = ScrollingToWorks;
team.onclick = ScrollingTeam;
contact.onclick = ScrollingToContact;
body.onscroll = UpdateScrollInfo;

function ScrollingToHome(){
    ScrollingTo(VIEW_HOME);
}
function ScrollingToFeatures(){
    ScrollingTo(VIEW_FEATURES);
}
function ScrollingToWorks(){
    ScrollingTo(VIEW_WORKS);
}
function ScrollingTeam(){
    ScrollingTo(VIEW_TEAM);
}
function ScrollingToContact(){
    ScrollingTo(VIEW_CONTACT);
}
function ScrollingTo(place){
    console.log(place);
    window.scroll({
        left: 0,
        top: place.offsetTop,
        behavior: "smooth"
    });
}
function UpdateScrollInfo(){
    if (pageYOffset < VIEW_FEATURES.offsetTop){
        SetCurrentMenu(home);
    }
    else{
        if (pageYOffset >= VIEW_FEATURES.offsetTop && pageYOffset < VIEW_WORKS.offsetTop){
            SetCurrentMenu(features);
        }
        else{
            if (pageYOffset >= VIEW_WORKS.offsetTop && pageYOffset < VIEW_TEAM.offsetTop){
                SetCurrentMenu(works);
            }
            else{
                if (pageYOffset >= VIEW_TEAM.offsetTop && pageYOffset < VIEW_CONTACT.offsetTop){
                    SetCurrentMenu(team);
                }
                else{
                    if (pageYOffset >= VIEW_CONTACT.offsetTop){
                        SetCurrentMenu(contact);
                    }
                }
            }
        }
    }
}
function SetCurrentMenu(button){
    for (let i = 0; i < ALL_BUTTONS.length; i++){
        ALL_BUTTONS[i].classList.remove("nav-menu__item_active");
    }
    button.classList.add("nav-menu__item_active");
}