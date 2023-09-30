import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './editor.scss';
import Settings from './settings';
import LinkAttributes from '../components/link-attributes';
import classNames from 'classnames';
import { useEffect, useRef } from '@wordpress/element';
import { useMergeRefs } from '@wordpress/compose';
export default function Edit({ attributes, setAttributes, clientId }) {
	const menuItemRef = useRef();
	const blockProps = useBlockProps({
		className: classNames('header-navmenu-menu-item', {
			['submenu-open-onclick']: attributes?.openOnClick,
		}),
		ref: useMergeRefs([menuItemRef])
	});
	const innerBlocksProps = useInnerBlocksProps({
		className: "header-navmenu-submenu-wrapper",
	}, {
		allowedBlocks: ["header-template/submenu"],
	})

	useEffect(() => {
		const menuItem = menuItemRef.current;
		if (menuItem && menuItem?.classList.contains('submenu-open-onclick')) {
			menuItem.addEventListener('click', (e) => {
				menuItem.classList.toggle('is-submenu-open-sidebar');
				const submenu = menuItem.querySelector('.header-navmenu-submenu-wrapper');
				if (!submenu?.classList.contains('is-submenu-open')) {

					document.querySelectorAll('.header-navmenu-submenu-wrapper').forEach((item) => {
						item.classList.remove('is-submenu-open');
					})

					submenu.classList.add('is-submenu-open');
				} else if (submenu?.classList.contains('is-submenu-open') && !e.target.closest('.is-submenu-open')) {
					submenu.classList.remove('is-submenu-open');
				}
			});
			const editorDocument = menuItem.ownerDocument;
			editorDocument.addEventListener('click', (e) => {
				if (!menuItem?.contains(e.target.closest('.header-navmenu-submenu-wrapper.is-submenu-open')) && !menuItem?.contains(e.target)) {
					const submenu = menuItem.querySelector('.header-navmenu-submenu-wrapper');
					if (submenu) {
						submenu.classList.remove('is-submenu-open');
					}
				}
			})
		}
	}, []);

	const linkAttributes = {
		...LinkAttributes(attributes?.menuLink),
		className: "header-navmenu-link"
	}

	return (
		<>
			<Settings attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
			<li {...blockProps}>
				{
					attributes?.menuLabel ? (
						<a {...linkAttributes} onClick={(e) => e.preventDefault()}>
							<span className="header-navmenu-label">{attributes?.menuLabel}</span>
							{
								attributes?.addSubmenu && attributes?.submenuIdicator ? (
									<>
										<span
											className={classNames("dashicons", {
												[`dashicons-${attributes?.submenuIdicator}`]: attributes?.submenuIdicator,
											})}></span>
									</>
								) : null
							}
						</a>
					) : "No Label"
				}
				{
					attributes?.addSubmenu ? (
						<div {...innerBlocksProps}></div>
					) : null
				}
			</li>
		</>
	);
}
