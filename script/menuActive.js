const list= document.querySelectorAll('.list');
const scr = document.querySelectorAll('.scr');
let link = 0;
console.log(list);
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');

    scr.forEach((item) =>
    item.classList.remove('activeOps'));
    if (link == 0){
        scr[0].classList.add('activeOps');
        console.log(scr[0]);
    }else if (link == 1){
        scr[1].classList.add('activeOps');
    }else if (link == 2){
        scr[2].classList.add('activeOps');
    }
}

for(let i = 0; i < list.length; i ++){
    list[i].addEventListener('click', function(){
        link = i;
    });
    list[i].addEventListener('click', activeLink); 
}






