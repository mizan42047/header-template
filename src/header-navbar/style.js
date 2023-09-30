const dynamicStyles = (attributes) => {
    const WRAPPER = `.${attributes?.blockClass}`;
    return (`
        ${WRAPPER} {
            background-color: ${attributes?.headerNavbarBackground};
            max-width: ${attributes?.headerNavbarMaxWidth};
            padding-top: ${attributes?.headerNavbarPadding?.top};
            padding-bottom: ${attributes?.headerNavbarPadding?.bottom};
            padding-left: ${attributes?.headerNavbarPadding?.left};
            padding-right: ${attributes?.headerNavbarPadding?.right};
            margin-top: ${attributes?.headerNavbarMargin?.top};
            margin-bottom: ${attributes?.headerNavbarMargin?.bottom};
        }
    
        ${WRAPPER} .header-navbar-inner{
            justify-content: ${attributes?.headerNavbarContentAlign};
            gap: ${attributes?.headerNavbarContentSpaceBetween};
        }

        ${WRAPPER} .header-navbar-inner .wp-block-site-logo {
            flex: 1 1 ${attributes?.headerNavbarLogoBoxWrapperWidth};
        }
        ${WRAPPER} .header-navbar-inner .wp-block-header-template-navmenu {
            flex: 1 1 ${attributes?.headerNavbarWrapperWidth};
            background-color: ${attributes?.headerNavbarMenuBackground};
        }
        ${WRAPPER} .header-navbar-inner .wp-block-header-template-navmenu .header-navmenu-menu {
            gap: ${attributes?.headerNavbarMenuItemGapBetween};
            justify-content: ${attributes?.headerNavbarJustifyContent};
        }
        ${WRAPPER} .header-navbar-inner .wp-block-header-template-navmenu .header-navmenu .header-navmenu-link{
            color: ${attributes?.headerNavbarMenuItemTextColor};
            font-size: ${attributes?.headerNavbarMenuItemFontSize};
        }
        ${WRAPPER} .header-navbar-inner .wp-block-header-template-navmenu .sidebar-header .mobile-logo .custom-logo-link{
            width: ${attributes?.mobileLogoWidth};
        }
    `)
}

export default dynamicStyles;