<?php 

add_action( 'init', 'mblock_box_block');

function mblock_box_block(){
	$asset_file = include_once CTOM_PATH ."/misblocks/box/build/index.asset.php";

	wp_register_script( 
			'mblock-box-block',
			plugins_url( './build/index.js', __FILE__ ),
			$asset_file['dependencies'],
			$asset_file['version']
	);

	wp_register_style( 
		'mblock-box-block',
		plugins_url( './build/index.css', __FILE__ ),
		array(),
		$asset_file['version']
	);

	register_block_type(
		'mblock/box', 
		array(
			'editor_script' => 'mblock-box-block',
			'style'         => 'mblock-box-block',
		)
	);

}