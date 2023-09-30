import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
export default function save() {
	const blockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save({
		className: "header-navmenu-submenu",
	});
	
	return (
		<div {...blockProps}>
			<ul {...innerBlocksProps}></ul>
		</div>
	);
}
