const list = document.querySelectorAll('.list');
const scr = document.querySelectorAll('.screen');
const textUp = document.querySelector('.screen__up')
let link = 0;
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');

    scr.forEach((item) =>
    item.classList.remove('activeOps'));
    if (link == 0){
        scr[0].classList.add('activeOps');
        textUp.classList.add('activeTitle');
    }else if (link == 1){
        scr[1].classList.add('activeOps');
        textUp.classList.remove('activeTitle');
    }else if (link == 2){
        scr[2].classList.add('activeOps');
        textUp.classList.remove('activeTitle');
    }
}

for(let i = 0; i < list.length; i ++){
    list[i].addEventListener('click', function(){
        link = i;
    });
    list[i].addEventListener('click', activeLink); 
}






