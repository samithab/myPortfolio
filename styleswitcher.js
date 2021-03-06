const styleSwitcherToggler =  document.querySelector('.style-switcher-toggler');


styleSwitcherToggler.addEventListener('click', ()=> {

    document.querySelector('.style-switcher').classList.toggle('open');
})

//hide style switcher when scrolling

window.addEventListener("scroll", ()=>{

    if(  document.querySelector('.style-switcher').classList.contains('open')){

          document.querySelector('.style-switcher').classList.remove('open');
    }
})

// theme colors

const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    
   alternateStyles.forEach((style) => {
    
   if(color === style.getAttribute('title')){
       style.removeAttribute('disabled');
   }else{

    style.setAttribute('disabled' , 'true');
   }

    });
    
}
