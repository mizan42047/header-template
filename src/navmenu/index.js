/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	icon: {
		src: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M8 8H20M11 12H20M14 16H20M4 8H4.01M7 12H7.01M10 16H10.01" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
	},

	/**
	 * @see ./save.js
	 */
	save,
});
