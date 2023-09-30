import {
    TextControl,
    PanelBody,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    ToggleControl
} from '@wordpress/components';
import { memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import MenuURL from '../components/menu-url';

const Settings = ({ attributes, setAttributes, clientId }) => {
    const colors = [
        { name: 'red', color: '#f00' },
        { name: 'white', color: '#eee' },
        { name: 'blue', color: '#00f' },
    ];

    return (
        <InspectorControls>
            <PanelBody title={'Menu Item Settings'} initialOpen={true}>
                <TextControl
                    label="Menu Label"
                    value={attributes?.menuLabel}
                    onChange={(value) => setAttributes({ menuLabel: value })}
                />
                <MenuURL
                    label="Menu Link"
                    value={attributes?.menuLink}
                    onChange={(value) => setAttributes({ menuLink: value })}
                />
                <ToggleControl
                    label="Add Submenu"
                    checked={attributes?.addSubmenu}
                    onChange={(value) => setAttributes({ addSubmenu: value })}
                />
                {
                    attributes?.addSubmenu ? (
                        <>
                            <ToggleGroupControl label="Submenu Indicator Icon" value={attributes?.submenuIdicator} isBlock onChange={(value) => setAttributes({ submenuIdicator: value })}>
                                <ToggleGroupControlOption value="arrow-down-alt2" label={<span className="dashicons dashicons-arrow-down-alt2"></span>} />
                                <ToggleGroupControlOption value="arrow-down" label={<span className="dashicons dashicons-arrow-down"></span>} />
                                <ToggleGroupControlOption value="arrow-down-alt" label={<span className="dashicons dashicons-arrow-down-alt"></span>} />
                            </ToggleGroupControl>
                            <ToggleControl
                                label="Submenu Open on a Click"
                                checked={attributes?.openOnClick}
                                onChange={(value) => setAttributes({ openOnClick: value })}
                            />
                        </>
                    ) : null
                }
            </PanelBody>
        </InspectorControls>
    )
}

export default memo(Settings);