


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


