<?php

/**
 * Plugin Name:       Header Template
 * Description:       Header Template for WordPress Website.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            WebRock
 * Author URI:				https://www.fiverr.com/webrok?up_rollout=true
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       header-template
 *
 * @package           create-block
 */

function create_block_header_template_block_init()
{
	$blocks = [
		"header-container",
		"header-topbar",
		"header-navbar",
		"navmenu",
		"submenu",
		"menu-item",
	];

	foreach ($blocks as $block) {
		register_block_type(plugin_dir_path(__FILE__) . 'build/' . $block);
	}
}

add_action('init', 'create_block_header_template_block_init');
function header_template_block_categories($categories, $post)
{
	return array_merge(
		array(
			array(
				'slug'  => 'header-template',
				'title' => __('Header Template', 'header-template'),
			),
		),
		$categories
	);
}
add_filter('block_categories_all', 'header_template_block_categories', 10, 2);
