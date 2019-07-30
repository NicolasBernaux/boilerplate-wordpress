<?php
add_filter( 'timber/twig', function (\Twig\Environment $twig ) {
    $twig->addFunction(new Timber\Twig_Function('dump', [ 'Symfony\Component\VarDumper\VarDumper', 'dump' ]));
    
    return $twig;
});