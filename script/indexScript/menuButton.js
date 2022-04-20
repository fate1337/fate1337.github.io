const buttonForHero = document.querySelectorAll('.screen__link');

let but;
function forHero(){
    list.forEach((item) =>
    item.classList.remove('navigation__point_active'));
    // scr.forEach((item) =>
    // item.classList.remove('screen__body_active'));
    if(buttonForHero[0] == but){
    list[1].classList.add('navigation__point_active');
    // scr[1].classList.add('screen__body_active');
    } else if(buttonForHero[1] == but){
        list[2].classList.add('navigation__point_active');
        // scr[2].classList.add('screen__body_active'); 
    }
    textUp.classList.remove('screen__up_active');
}

buttonForHero.forEach((item) => item.addEventListener('click', function(){but = item}));

buttonForHero.forEach((item) => item.addEventListener('click', forHero));