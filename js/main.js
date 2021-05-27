const hamburMenuBtn = document.querySelector ('#menu-hambur-toggler');
const itemsMenu = document.querySelectorAll ('.menu-item');

function menuResponsive () {

    hamburMenuBtn.addEventListener( 'click', function() {
        document.body.classList.toggle('menu-mobile-activo');
    });

    itemsMenu.forEach(function(e) {
      
        e.addEventListener('click', function() {
        document.body.classList.remove('menu-mobile-activo');
        })
    });

    for(let i = 0; i < itemsMenu.length; i++){
        itemsMenu[i].addEventListener('click', function () {
            let currentItem = document.querySelector('.active');
            currentItem.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

}

menuResponsive();