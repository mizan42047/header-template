import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
export default function save() {
	const blockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save({
		className: "header-navmenu-menu",
	});
	return (
		<>
			<div {...blockProps}>
				<div className="sidebar-header">
					<div className="mobile-logo"></div>
					<button className="close-button">&times;</button>
				</div>
				<nav className="header-navmenu">
					<ul {...innerBlocksProps}></ul>
				</nav>
				<div className='navmenu-separator'></div>
				<div className="sidebar-topbar-container"></div>
				<div className="sidebar-extra-button-container"></div>
			</div>
			<div className="menu-overlay"></div>
			<button className='hamburger-button'>
				<svg className='hamburger-icon' viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM19.5 13.25C19.9142 13.25 20.25 12.9142 20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75V13.25ZM5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM14.833 9.25C15.2472 9.25 15.583 8.91421 15.583 8.5C15.583 8.08579 15.2472 7.75 14.833 7.75V9.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM14.833 17.25C15.2472 17.25 15.583 16.9142 15.583 16.5C15.583 16.0858 15.2472 15.75 14.833 15.75V17.25ZM5.5 13.25H19.5V11.75H5.5V13.25ZM5.5 9.25H14.833V7.75H5.5V9.25ZM5.5 17.25H14.833V15.75H5.5V17.25Z" fill="#000000" />
				</svg>
			</button>
		</>
	);
}
