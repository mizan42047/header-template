import {
    ColorPalette,
    PanelBody,
    __experimentalHeading as Heading,
    __experimentalUnitControl as UnitControl,
    __experimentalBoxControl as BoxControl,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { memo, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { InspectorControls, HeightControl } from '@wordpress/block-editor';
import dynamicStyles from './style';

const Settings = ({ attributes, setAttributes, clientId }) => {
    const colors = [
        { name: 'red', color: '#f00' },
        { name: 'white', color: '#eee' },
        { name: 'blue', color: '#00f' },
    ];

    useEffect(() => {
        setAttributes({
            blockClass: `header-${clientId}`,
        })
    }, [clientId]);

    useEffect(() => {
        setAttributes({
            blockCSS: dynamicStyles(attributes),
        })
    }, [
        attributes?.blockClass,
        attributes.headerNavbarBackground,
        attributes.headerNavbarMaxWidth,
        attributes.headerNavbarPadding,
        attributes.headerNavbarMargin,
        attributes.headerNavbarContentAlign,
        attributes.headerNavbarContentSpaceBetween,
        attributes.headerNavbarLogoBoxWrapperWidth,
        attributes.headerNavbarWrapperWidth,
        attributes.headerNavbarMenuBackground,
        attributes.headerNavbarMenuItemTextColor,
        attributes.headerNavbarMenuItemGapBetween,
        attributes.headerNavbarMenuItemFontSize,
        attributes?.headerNavbarJustifyContent,
        attributes?.mobileLogoWidth,
    ])

    return (
        <InspectorControls>
            <PanelBody title={__('Wrapper')} initialOpen={true}>
                <Heading>{__('Background Color')}</Heading>
                <ColorPalette
                    colors={colors}
                    value={attributes.headerNavbarBackground}
                    onChange={(color) => setAttributes({ headerNavbarBackground: color })}
                />
                <UnitControl
                    label={'Navbar Max Width'}
                    onChange={(value) => setAttributes({ headerNavbarMaxWidth: value })}
                    value={attributes?.headerNavbarMaxWidth}
                />
                <BoxControl
                    label={'Padding'}
                    onChange={(value) => setAttributes({ headerNavbarPadding: value })}
                    value={attributes?.headerNavbarPadding}
                />
                <BoxControl
                    label={'Margin'}
                    onChange={(value) => setAttributes({ headerNavbarMargin: value })}
                    value={attributes?.headerNavbarMargin}
                    sides={['top', 'bottom']}
                />
                <ToggleGroupControl label="Contnet Alignment" value={attributes?.headerNavbarContentAlign} isBlock onChange={(value) => setAttributes({ headerNavbarContentAlign: value })}>
                    <ToggleGroupControlOption value="flex-start" label="Left" />
                    <ToggleGroupControlOption value="center" label="Center" />
                    <ToggleGroupControlOption value="flex-end" label="Right" />
                    <ToggleGroupControlOption value="space-between" label="Space Between" />
                </ToggleGroupControl>
                <HeightControl
                    label="Content Space Between"
                    onChange={(value) => setAttributes({ headerNavbarContentSpaceBetween: value })}
                    value={attributes?.headerNavbarContentSpaceBetween}
                />
            </PanelBody>
            <PanelBody title={__('Logo Box Wrapper')} initialOpen={false}>
                <UnitControl
                    label={'Box Width'}
                    onChange={(value) => setAttributes({ headerNavbarLogoBoxWrapperWidth: value })}
                    value={attributes?.headerNavbarLogoBoxWrapperWidth}
                />
                <UnitControl
                    label={'Mobile Logo width'}
                    onChange={(value) => setAttributes({ mobileLogoWidth: value })}
                    value={attributes?.mobileLogoWidth}
                />
            </PanelBody>
            <PanelBody title={__('Navbar')} initialOpen={false}>
                <ToggleGroupControl label="Justify Content" value={attributes?.headerNavbarJustifyContent} isBlock onChange={(value) => setAttributes({ headerNavbarJustifyContent: value })}>
                    <ToggleGroupControlOption value="flex-start" label="Left" />
                    <ToggleGroupControlOption value="center" label="Center" />
                    <ToggleGroupControlOption value="flex-end" label="Right" />
                    <ToggleGroupControlOption value="space-between" label="Space Between" />
                </ToggleGroupControl>
                <UnitControl
                    label={'Box Width'}
                    onChange={(value) => setAttributes({ headerNavbarWrapperWidth: value })}
                    value={attributes?.headerNavbarWrapperWidth}
                />
                <Heading>{__('Background Color')}</Heading>
                <ColorPalette
                    colors={colors}
                    value={attributes.headerNavbarMenuBackground}
                    onChange={(color) => setAttributes({ headerNavbarMenuBackground: color })}
                />
            </PanelBody>
            <PanelBody title={__('Menu Item')} initialOpen={false}>
                <HeightControl
                    label="Space Between"
                    onChange={(value) => setAttributes({ headerNavbarMenuItemGapBetween: value })}
                    value={attributes?.headerNavbarMenuItemGapBetween}
                />
                <UnitControl
                    label={'Font Size'}
                    onChange={(value) => setAttributes({ headerNavbarMenuItemFontSize: value })}
                    value={attributes?.headerNavbarMenuItemFontSize}
                    max={200}
                />
                <Heading>{__('Text Color')}</Heading>
                <ColorPalette
                    colors={colors}
                    value={attributes.headerNavbarMenuItemTextColor}
                    onChange={(color) => setAttributes({ headerNavbarMenuItemTextColor: color })}
                />
            </PanelBody>
        </InspectorControls>
    )
}

export default memo(Settings);