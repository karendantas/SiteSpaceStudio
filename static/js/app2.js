<<<<<<< HEAD
=======


>>>>>>> a3c5acc70ed1a8fdc15119f3cff13fae96d9fcb5

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


