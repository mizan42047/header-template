document.addEventListener("DOMContentLoaded", function () {
    const headerContainers = document.querySelectorAll(".wp-block-header-template-header-container");
    headerContainers.forEach((headerContainer) => {
        if (headerContainer) {
            const headerTopbarMenu = headerContainer.querySelector('.header-topbar-menu');
            const sidebarTopbarMenu = headerContainer.querySelector('.sidebar-topbar-container');
            const mobileLogo = headerContainer.querySelector('.mobile-logo');
            const hamburgerButton = headerContainer.querySelector('.hamburger-button');
            const sidebar = headerContainer.querySelector('.wp-block-header-template-navmenu');
            const closeButton = headerContainer.querySelector('.close-button');
            const menuExtraButtonContainer = headerContainer.querySelector('.sidebar-extra-button-container');
            const menuExtraButton = headerContainer.querySelector('.wp-block-button');
            const overlay = headerContainer.querySelector('.menu-overlay');
            if (headerTopbarMenu) {
                const cloneTopbarMenu = headerTopbarMenu.cloneNode(true);
                sidebarTopbarMenu.appendChild(cloneTopbarMenu);
            }

            setTimeout(() => {
                const customLogo = headerContainer.querySelector('.custom-logo-link');
                if (customLogo) {
                    const cloneCustomLogo = customLogo.cloneNode(true);
                    mobileLogo.appendChild(cloneCustomLogo);
                }
            }, 2500)

            if (hamburgerButton && sidebar) {
                hamburgerButton.addEventListener('click', () => {
                    sidebar.classList.toggle('is-open');
                    sidebar.classList.toggle('is-sidebar-open');
                    overlay.classList.toggle('is-open');
                })
            }

            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    sidebar.classList.remove('is-open');
                    overlay.classList.remove('is-open');
                    setTimeout(() => {
                        sidebar.classList.remove('is-sidebar-open');
                    }, 1000)
                })
            }

            if (overlay) {
                overlay.addEventListener('click', () => {
                    sidebar.classList.remove('is-open');
                    overlay.classList.remove('is-open');
                    setTimeout(() => {
                        sidebar.classList.remove('is-sidebar-open');
                    }, 1000)
                })
            }

            if (menuExtraButton && menuExtraButtonContainer) {
                const cloneMenuExtraButton = menuExtraButton.cloneNode(true);
                menuExtraButtonContainer.appendChild(cloneMenuExtraButton);
            }
        }
    })
})
