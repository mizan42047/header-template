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
        attributes.headerTopbarBackground,
        attributes.headerTopbarTextColor,
        attributes.headerTopbarMaxWidth,
        attributes.headerTopbarPadding,
        attributes.headerTopbarMargin,
        attributes.headerTopbarLinkFontSize,
        attributes.headerTopbarContentAlign,
        attributes.headerTopbarLinkGapBetween,
    ])

    return (
        <InspectorControls>
            <PanelBody title={__('Wrapper')} initialOpen={true}>
                <Heading>{__('Background Color')}</Heading>
                <ColorPalette
                    colors={colors}
                    value={attributes.headerTopbarBackground}
                    onChange={(color) => setAttributes({ headerTopbarBackground: color })}
                />
                <UnitControl
                    label={'Topbar Max Width'}
                    onChange={(value) => setAttributes({ headerTopbarMaxWidth: value })}
                    value={attributes?.headerTopbarMaxWidth}
                />
                <BoxControl
                    label={'Padding'}
                    onChange={(value) => setAttributes({ headerTopbarPadding: value })}
                    value={attributes?.headerTopbarPadding}
                />
                <BoxControl
                    label={'Margin'}
                    onChange={(value) => setAttributes({ headerTopbarMargin: value })}
                    value={attributes?.headerTopbarMargin}
                    sides={['top', 'bottom']}
                />
                <ToggleGroupControl label="Contnet Alignment" value={attributes?.headerTopbarContentAlign} isBlock onChange={(value) => setAttributes({ headerTopbarContentAlign: value })}>
                    <ToggleGroupControlOption value="flex-start" label="Left" />
                    <ToggleGroupControlOption value="center" label="Center" />
                    <ToggleGroupControlOption value="flex-end" label="Right" />
                </ToggleGroupControl>
            </PanelBody>
            <PanelBody title={__('Link')} initialOpen={false}>
                <HeightControl
                    label="Link Space Between"
                    onChange={(value) => setAttributes({ headerTopbarLinkGapBetween: value })}
                    value={attributes?.headerTopbarLinkGapBetween}
                />
                <UnitControl
                    label={'Link Font Size'}
                    onChange={(value) => setAttributes({ headerTopbarLinkFontSize: value })}
                    value={attributes?.headerTopbarLinkFontSize}
                    max={200}
                />
                <Heading>{__('Text Color')}</Heading>
                <ColorPalette
                    colors={colors}
                    value={attributes.headerTopbarTextColor}
                    onChange={(color) => setAttributes({ headerTopbarTextColor: color })}
                />
            </PanelBody>
        </InspectorControls>
    )
}

export default memo(Settings);