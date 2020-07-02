let buttonAll = document.querySelector("#image-selector__all");
let buttonBranding = document.querySelector("#image-selector__branding");
let buttonWeb = document.querySelector("#image-selector__web");
let buttonLogo = document.querySelector("#image-selector__logo");
let buttonPhoto = document.querySelector("#image-selector__phonography");
let allButtons = [buttonAll, buttonBranding, buttonWeb, buttonLogo, buttonPhoto];
 let myWorks = [];
 for (let i = 1; i <= 8; i++){
    myWorks[i] = document.querySelector("#works_"+i);
 }

buttonAll.onclick = function(){ShowOnly("all");};
buttonBranding.onclick = function(){ShowOnly("branding");};
buttonWeb.onclick = function(){ShowOnly("web");};
buttonLogo.onclick = function(){ShowOnly("logo");};
buttonPhoto.onclick = function(){ShowOnly("photo");};

function ShowOnly(category){
    UpdateImageSelector(category);

    if (category === "all"){
        for (let i = 1; i <= 8; i++){
            myWorks[i].classList.remove("work_hidden");
        }
        return;
    }
    for (let i = 1; i <= 8; i++){
        if (!myWorks[i].classList.contains(category)){
            myWorks[i].classList.add("work_hidden");
        }
        else{
            myWorks[i].classList.remove("work_hidden");
        }
    }
}
function UpdateImageSelector(category){
    for(let i = 0; i < 5; i++){
        allButtons[i].classList.remove("image-selector__item_selected");
    }
    switch (category){
        case "all": buttonAll.classList.add("image-selector__item_selected"); break;
        case "branding": buttonBranding.classList.add("image-selector__item_selected"); break;
        case "web": buttonWeb.classList.add("image-selector__item_selected"); break;
        case "logo": buttonLogo.classList.add("image-selector__item_selected"); break;
        case "photo": buttonPhoto.classList.add("image-selector__item_selected"); break;
    }
}