import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import classNames from 'classnames';
export default function save({ attributes }) {
	const blockprops = useBlockProps.save({
		className: classNames('header-navbar', attributes?.blockClass)
	});
	const innerBlocksProps = useInnerBlocksProps.save({
		className: "header-navbar-inner"
	})

	return (
		<>
			<style>{attributes?.blockCSS}</style>
			<div {...blockprops}>
				<div {...innerBlocksProps}></div>
			</div>
		</>
	);
}
