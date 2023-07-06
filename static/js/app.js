const mobileBtn = document.getElementById('mobile-btn');

function toggleMenu(event){
    const navi = document.getElementbyId('navigation');
    navi.classList.toggle('active'); //o toggle adiciona a classe "active" ao clicarmos no botao, caso nao tenha
    //a classe, e remove a mesma após clicar novamente.
    const active = navi.classList.contains('active');
}
mobileBtn.addEventListener('click', toggleMenu);//criando um evento que ao clicar no botao, aciona  a função toggleMenu