
// Добавление блоков в переменные
const list = document.querySelectorAll('.navigation__point');
const scr = document.querySelectorAll('.screen__body');
const textUp = document.querySelector('.screen__up');

// Переменная для определения блока
let link = 0;

// Функция Для удаления активного класса блока navigation__point и добовлению его активному блоку
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('navigation__point_active'));
    this.classList.add('navigation__point_active');
// Удаление активного класса у блока screen__body и добовление, для плавности и opacity 
    scr.forEach((item) =>
    item.classList.remove('screen__body_active'));
    if (link == 0){
        scr[0].classList.add('screen__body_active');
        textUp.classList.add('screen__up_active');
    }else if (link == 1){
        scr[1].classList.add('screen__body_active');
        textUp.classList.remove('screen__up_active');
    }else if (link == 2){
        scr[2].classList.add('screen__body_active');
        textUp.classList.remove('screen__up_active');
    }
}
// Добавление обработчика событий и определение id блок

for(let i = 0; i < list.length; i ++){
    list[i].addEventListener('click', function(){
        link = i;
    });
    list[i].addEventListener('click', activeLink); 
}



