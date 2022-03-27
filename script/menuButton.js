const buttonForHero = document.querySelectorAll('.screen__link');
let but = 0;
function forHero(){
    list.forEach((item) =>
    item.classList.remove('active'));
    scr.forEach((item) =>
    item.classList.remove('activeOps'));
    if(but = 0){
    list[1].classList.add('active');
    list[1].classList.add('activeOps');
    } else if(but = 1){
        list[2].classList.add('active');
        list[2].classList.add('activeOps'); 
    }
    textUp.classList.remove('activeTitle');
}


for(let i = 0; i < list.length; i ++){
    buttonForHero[i].addEventListener('click', function(){but = i;});
    buttonForHero[i].addEventListener('click', forHero); 
}