<?php

function ctom_news_render_callback( $block_attributes, $block_content ) {
	$return = '<p class=wp-block-ctom-news>Hola</p>';
	return $return;
}

add_action( 'init', 'ctom_news_block_init' );

function ctom_news_block_init() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'ctom_news_render_callback',
		)
	);
}