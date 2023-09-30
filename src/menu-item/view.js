document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (e) {
        if (e.target.closest('.submenu-open-onclick')) {
            const menuItem = e.target.closest('.submenu-open-onclick');
            const submenu = menuItem.querySelector('.header-navmenu-submenu-wrapper');
            if(!submenu?.classList.contains('is-submenu-open')){

                document.querySelectorAll('.header-navmenu-submenu-wrapper').forEach((item) => {
                    item.classList.remove('is-submenu-open');
                })
                submenu.classList.add('is-submenu-open');
            }else if(submenu?.classList.contains('is-submenu-open') && !e.target.closest('.is-submenu-open')){
                submenu.classList.remove('is-submenu-open');
            }
        }

        if(!e.target.closest('.is-submenu-open') && !e.target.closest('.submenu-open-onclick')){
            document.querySelectorAll('.header-navmenu-submenu-wrapper').forEach((item) => {
                item.classList.remove('is-submenu-open');
            })
        }

        if(e.target.closest('.header-navmenu-menu-item')){
            const menuItem = e.target.closest('.header-navmenu-menu-item');
            const submenu = menuItem.querySelector('.header-navmenu-submenu-wrapper');
            if(!submenu?.classList.contains('is-submenu-open-sidebar')){
                document.querySelectorAll('.header-navmenu-submenu-wrapper').forEach((item) => {
                    item.classList.remove('s-submenu-open-sidebar');
                })
                submenu?.classList.add('is-submenu-open-sidebar');
            }else{
                submenu?.classList.remove('is-submenu-open-sidebar');
            }
        }
    }); 
})