<?php

$timber = new Timber\Timber();

/* Allow SVG files */
add_filter(
	'upload_mimes',
	function ( $mimes ) {
		$mimes['svg'] = 'image/svg+xml';

		return $mimes;
	}
);

/* Hide using of WordPress */
remove_action( 'wp_head', 'wp_generator' );

/* Load all file in inc directory */
foreach ( glob( __DIR__ . '/inc/*.php' ) as $filename ) {
	include_once $filename;
}
flush_rewrite_rules();

if ( WP_DEBUG ) {
	foreach ( glob( __DIR__ . '/development/*.php' ) as $filename ) {
		include_once $filename;
	}
}
