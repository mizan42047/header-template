import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import classNames from 'classnames';
export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: classNames('header-topbar', attributes?.blockClass)
	});

	const innerBlocksProps = useInnerBlocksProps.save({
		className: "header-topbar-menu"
	})
	return (
		<>
			<style>{attributes?.blockCSS}</style>
			<div {...blockProps}>
				<div className="header-topbar-menu-wrapper">
					<ul {...innerBlocksProps}></ul>
				</div>
			</div>
		</>
	);
}
