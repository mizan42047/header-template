const dynamicStyles = (attributes) => {
    const WRAPPER = `.${attributes?.blockClass}`;
    return (`
        ${WRAPPER} {
            background-color: ${attributes?.headerTopbarBackground};
            max-width: ${attributes?.headerTopbarMaxWidth};
            padding-top: ${attributes?.headerTopbarPadding?.top};
            padding-bottom: ${attributes?.headerTopbarPadding?.bottom};
            padding-left: ${attributes?.headerTopbarPadding?.left};
            padding-right: ${attributes?.headerTopbarPadding?.right};
            margin-top: ${attributes?.headerTopbarMargin?.top};
            margin-bottom: ${attributes?.headerTopbarMargin?.bottom};
        }
    
        ${WRAPPER} .header-topbar-menu-wrapper .header-topbar-menu{
            justify-content: ${attributes?.headerTopbarContentAlign};
            gap: ${attributes?.headerTopbarLinkGapBetween};
        }

        .wp-block-header-template-header-container .header-container ${WRAPPER} .wp-block-navigation-item__content {
            color: ${attributes?.headerTopbarTextColor};
            font-size: ${attributes?.headerTopbarLinkFontSize};
        }
    `)
}

export default dynamicStyles;