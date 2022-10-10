let login = document.querySelector("#login");
let loginform = document.querySelector("#loginform");
login.addEventListener('click', function () {
    loginform.style.display = "block";
});
let delet = document.querySelector("#delete");
delet.addEventListener('click', () => {
    loginform.style.display = "none";
})
let registercontainer = document.querySelector("#registercontainer");
let register = document.querySelector("#register");
register.addEventListener('click', () => {
    registercontainer.style.display = "block";
})
let deletes = document.querySelector("#delet");
deletes.addEventListener('click', () => {
    registercontainer.style.display = "none";
})
let slideindex = 1;
function showslide(n) {
    let img = document.querySelector("#img1");
    if (n > img.length) {
        slideindex = 1;
    }
    if (n < 1) {
        slideindex = img.length;
    }
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[slideindex - 1].style.display = "block";
}
function pushslide(n) {
    showslide(slideindex += n)
}
showslide(slideindex);