import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './editor.scss';
import Settings from './settings';
import classNames from 'classnames';

export default function Edit({ attributes, setAttributes, clientId }) {
	const blockprops = useBlockProps({
		className: classNames('header-navbar', attributes?.blockClass)
	});

	const topbarTemplate = [
		["core/site-logo", {
			label: "Link#1",
			url: "#",
			title: "Link#1",
		}],
		["header-template/navmenu", {}, [
			["header-template/menu-item", {
				menuLabel: "Menu Item#1",
				menuLink: {
					url: "#",
				},
			}],
			["header-template/menu-item", {
				menuLabel: "Menu Item#2",
				menuLink: {
					url: "#",
				},
			}],
			["header-template/menu-item", {
				menuLabel: "Menu Item#3",
				menuLink: {
					url: "#",
				},
				addSubmenu: true,
				submenuIdicator: "arrow-down-alt2",
				openOnClick: false
			}, [
				["header-template/submenu", {}, [
					["header-template/menu-item", {
						menuLabel: "Submenu Item#1",
						menuLink: {
							url: "#",
						},
					}],
					["header-template/menu-item", {
						menuLabel: "Submenu Item#2",
						menuLink: {
							url: "#",
						},
					}],
					["header-template/menu-item", {
						menuLabel: "Submenu Item#3",
						menuLink: {
							url: "#",
						},
					}]
				]]
			]]
		]],
		["core/button", {}]
	]

	const innerBlocksProps = useInnerBlocksProps({
		className: "header-navbar-inner"
	}, {
		allowedBlocks: ['core/site-logo', 'header-template/navmenu', 'core/button'],
		template: topbarTemplate
	});

	return (
		<>
			<style>{attributes?.blockCSS}</style>
			<Settings attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
			<div {...blockprops}>
				<div {...innerBlocksProps}></div>
			</div>
		</>
	);
}
