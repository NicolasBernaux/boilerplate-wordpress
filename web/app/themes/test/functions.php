<?php

$timber = new Timber\Timber();

/* Allow SVG files */
function wpc_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'wpc_mime_types');

// Hide using of wordpress
remove_action('wp_head', 'wp_generator');

// Load all file in inc directory
foreach (glob(__DIR__ . '/inc/*.php') as $filename) {
    require_once $filename;
}
flush_rewrite_rules();
