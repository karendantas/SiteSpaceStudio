<<<<<<< HEAD
// const openModalButton = document.querySelector("#open-modal");
// const closeModalButton = document.querySelector("#close-modal");
// const modal = document.querySelector("#modal");
// const fade = document.querySelector("#fade");
// const toggleModal = () => {
//     modal.classList.toggle("hide")
//     fade.classList.toggle("hide")
// }
// [openModalButton, closeModalButton, fade].forEach((el) => {
//     el.addEventListener("click", () => toggleModal())
// })

//logincadastro
var login = document.querySelector("#log");
var cadastro = document.querySelector("#cad");
var body = document.querySelector("body");

login.addEventListener('click',function(){
    body.className="login-action";
})

cadastro.addEventListener('click',function(){
    body.className="cad-action";
})


