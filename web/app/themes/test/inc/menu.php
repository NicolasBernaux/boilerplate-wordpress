<?php

// Main menu //
function register_menus()
{
    register_nav_menus(
        array(
            'header_menu' => 'Header',
            'footer_menu' => 'Footer',
        )
    );
}

add_action('init', 'register_menus');

add_filter('timber/context', 'init_timber_menu');

function init_timber_menu($context)
{
    $context['header_menu'] = new Timber\Menu('header_menu');
    $context['footer_menu'] = new Timber\Menu('footer_menu');
    return $context;
}

