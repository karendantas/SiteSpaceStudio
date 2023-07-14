const mobileBtn = document.getElementById('mobilebtn');

function toggleMenu(){
    const navi = document.getElementById('navigation');
  
    navi.classList.toggle('active'); //o toggle adiciona a classe "active" ao clicarmos no botao, caso nao tenha
    
    //a classe, e remove a mesma após clicar novamente.
}
mobileBtn.addEventListener('click', toggleMenu);//criando um evento que ao clicar no botao, aciona  a função toggleMenu


