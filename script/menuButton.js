const buttonForHero = document.querySelectorAll('.screen__link');

let but;
function forHero(){
    list.forEach((item) =>
    item.classList.remove('active'));
    scr.forEach((item) =>
    item.classList.remove('activeOps'));
    if(buttonForHero[0] == but){
    list[1].classList.add('active');
    scr[1].classList.add('activeOps');
    } else if(buttonForHero[1] == but){
        list[2].classList.add('active');
        scr[2].classList.add('activeOps'); 
    }
    textUp.classList.remove('activeTitle');
}

console.log(buttonForHero[0]);
console.log(buttonForHero[1]);
buttonForHero.forEach((item) => item.addEventListener('click', function(){but = item}));

buttonForHero.forEach((item) => item.addEventListener('click', forHero));