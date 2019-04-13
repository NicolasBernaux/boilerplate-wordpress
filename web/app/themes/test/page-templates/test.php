<?php
/*
Template Name: Page Accueil
*/

$context = Timber::get_context();
$context['post'] = new Timber\Post();
//$context['element'] = get_field('element');

Timber::render('views/pages/test.twig', $context);
