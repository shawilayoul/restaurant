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
let slideIndex = 1;
showSlide(slideIndex);
function pushSlide(n) {
    showSlide(slideIndex += n);
}
function currentSlide(n) {
    showSlide(slideIndex = n);
}
function showSlide(n) {
    let img = document.querySelector(".showslide");
    if (n > img.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = img.length;
    }
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[slideIndex - 1].style.display = "block";
}

