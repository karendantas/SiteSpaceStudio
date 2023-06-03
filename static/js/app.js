let searchBtn = document.querySelector('.searchBtn');

let closeBtn = document.querySelector('.closeBtn');

let searchBox = document.querySelector('.searchBox');

searchBtn.oneclick = function(){
    searchBox.classList.add('active');
}

searchBtn.oneclick = function(){
    closeBtn.classList.remove('active');
}