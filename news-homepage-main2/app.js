// Get Elememt
const openbarBtn = document.querySelector('.icon img');
const closebarBtn = document.querySelector('.link img')
const dropDown = document.querySelector(".link");

function menue(open,close) {
    // adding event to the  openbarBtn to open the menue
    open.addEventListener('click',() =>{
        dropDown.classList.add('open-menue');
    });
    // dding event to the  closebarBtn to close the menue
    close.addEventListener('click',()=>{
        dropDown.classList.remove('open-menue');
    });
}
menue(openbarBtn,closebarBtn); 