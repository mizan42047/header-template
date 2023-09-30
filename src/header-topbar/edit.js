import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './editor.scss';
import Settings from './settings';
import classNames from 'classnames';

export default function Edit({ attributes, setAttributes, clientId }) {
	const blockprops = useBlockProps({
		className: classNames('header-topbar', attributes?.blockClass)
	});

	const topbarTemplate = [
		["core/navigation-link", {
			label: "Link#1",
			url: "#",
			title: "Link#1",
		}],
		["core/navigation-link", {
			label: "Link#2",
			url: "#",
			title: "Link#2",
		}],
		["core/navigation-link", {
			label: "Link#3",
			url: "#",
			title: "Link#3",
		}],
	]

	const innerBlocksProps = useInnerBlocksProps({
		className: "header-topbar-menu"
	}, {
		allowedBlocks: ['core/navigation-link'],
		template: topbarTemplate
	});
	
	return (
		<>	
			<style>{attributes?.blockCSS}</style>
			<Settings attributes={attributes} setAttributes={setAttributes} clientId={clientId}/>
			<div {...blockprops}>
				<div className="header-topbar-menu-wrapper">
					<ul {...innerBlocksProps}></ul>
				</div>
			</div>
		</>
	);
}
