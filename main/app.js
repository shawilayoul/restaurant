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