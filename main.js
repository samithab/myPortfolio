

/*-------- navigation menu --------- */

(() => {

    const hamburgerBtn = document.querySelector('.hamburger-btn'),
    navMenu = document.querySelector('.nav-menu'),
    closeNavBtn = navMenu.querySelector('.close-nav-menu');

    hamburgerBtn.addEventListener('click', showNavMenu);
    closeNavBtn.addEventListener('click', closeNavMenu);

    function showNavMenu() {
        navMenu.classList.add('open');
       
    }

    function closeNavMenu() {
        navMenu.classList.remove('open');
       
    }

//attach event handler to document

document.addEventListener('click', (Event) =>{

   if (Event.target.classList.contains('link-item')) {

    if (Event.target.hash !=="") {

        Event.preventDefault();
        const hash = Event.target.hash;
        //deactivate exixting active section
        document.querySelector('.section.active').classList.add('hide');
        document.querySelector('.section.active').classList.remove('active');

        //activate new section
        document.querySelector(hash).classList.add('active');
        document.querySelector(hash).classList.remove('hide');

        //deactivate existing active nav manu item
        navMenu.querySelector('.active').classList.add('outer-shadow','hover-in-shadow');
        navMenu.querySelector('.active').classList.remove('active','inner-shadow');

        if (navMenu.classList.contains('open')) {
            
       
        
        //activate new nav menu item

        Event.target.classList.add('active','inner-shadow');
         Event.target.classList.remove('outer-shadow','hover-in-shadow');

         //hide nav menu

      closeNavMenu();

       }
       else{

        let navItems = navMenu.querySelectorAll('.link-item');
        navItems.forEach((item) => {
            if (hash === item.hash) {

                item.classList.add('active','inner-shadow');
                item.classList.remove('outer-shadow','hover-in-shadow');
                 
            }
        })

        

       }

       window.location.hash=hash;


        
    }
       
   }

})


})();





/* ------------------about section tabs---------------------- */
(() => {

    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {

       if (event.target.classList.contains("tab-item") &&! event.target.classList.contains("active")) {
           
            const target = event.target.getAttribute("data-target");
           //deactivate existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");

            //activate new 'tab-item'
            event.target.classList.add("active", "outer-shadow");


            //deactivate existing 'tab-content'
            aboutSection.querySelector(".tab-content.active") .classList.remove("active");
            //activate
            aboutSection.querySelector(target).classList.add("active");

            
       }
    })

})();


/*---- portfolio filter -----*/


(( )=> {


    const filterContainer = document.querySelector('.portfolio-filter'),
    portfolioItemsContainer = document.querySelector('.portfolio-items'),
    portfolioItems = document.querySelectorAll('.portfolio-item');

    /* -------- filter portfolio items ---------*/

    filterContainer.addEventListener('click', (Event) => {
        if (Event.target.classList.contains('filter-item') &&
        !Event.target.classList.contains('active')) {

            //deactivating exsisting active (filter-item)
                        filterContainer.querySelector('.active').classList.remove('outer-shadow' , 'active');

            //activate new (filter - item)

                        Event.target.classList.add('active' ,'outer-shadow' );
                        const target = Event.target.getAttribute('data-target');
                        portfolioItems.forEach((item) => {
                            if (target === item.getAttribute('data-category') || target === ('all')) {

                                item.classList.remove('hide')
                                item.classList.add('show');
                                
                            }
                            else {
                                item.classList.remove('show');
                                item.classList.add('hide');
                            }
                        })
        }
                    
    })

}) ();

/* ---------- hide all sections except active ------------- */

(() => {

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {

        if (!section.classList.contains('active')) {
            
            section.classList.add('hide');
        }
    })


})();


window.addEventListener('load', () =>{

document.querySelector('.loader-bg').classList.add('fade-out');

setTimeout(() => {

    document.querySelector('.loader-bg').style.display='none';
    
}, 600);
})
