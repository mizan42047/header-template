import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import LinkAttributes from '../components/link-attributes';
import classNames from 'classnames';
export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: classNames('header-navmenu-menu-item', {
			['submenu-open-onclick']: attributes?.openOnClick,
		}),
	});
	const innerBlocksProps = useInnerBlocksProps.save({
		className: "header-navmenu-submenu-wrapper",
	});

	const linkAttributes = {
		...LinkAttributes(attributes?.menuLink),
		className: "header-navmenu-link"
	}

	return (
		<li {...blockProps}>
			{
				attributes?.menuLabel ? (
					<a {...linkAttributes}>
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
	)
}
