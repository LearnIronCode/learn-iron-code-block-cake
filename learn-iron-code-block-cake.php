<?php
/**
 * Plugin Name:     Learn Iron Code Block Cake
 * Plugin URI:      https://salferrarello.com/wordpress-custom-editor-block/
 * Description:     Gutenberg Block Example
 * Author:          Sal Ferrarello
 * Author URI:      https://salferrarello.com/
 * Text Domain:     learn-iron-code-block-cake
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Learn_Iron_Code_Block_Cake
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

include( plugin_dir_path( __FILE__ ) . 'blocks/iron-code-cake.php' );

add_action( 'wp_enqueue_scripts', 'iron_code_cake_block_enqueue_front_end_js' );
add_action( 'init', 'iron_code_cake_block_register_js' );

function iron_code_cake_block_register_js() {
	wp_register_script(
		'arctext',
		plugins_url( 'js/vendor/jquery.arctext.1.0.js', __FILE__ ),
		array( 'jquery' )
	);
	wp_register_script(
		'iron-code-cake-block-front-end',
		plugins_url( 'js/arctext-cake.js', __FILE__ ),
		array( 'jquery', 'arctext' )
	);
}

function iron_code_cake_block_enqueue_front_end_js() {
	// Enqueue JavaScript on the front-end.
	if ( is_admin() ) {
		// We are on the back-end, do NOT enqueue JavaScript.
		return;
	}
	wp_enqueue_script( 'iron-code-cake-block-front-end' );
}
