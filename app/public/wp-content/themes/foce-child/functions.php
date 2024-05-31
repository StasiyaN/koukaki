<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    // Enqueue parent style
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

    // Enqueue child style
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style') );

    // Enqueue child script
    wp_enqueue_script( 'child-script', get_stylesheet_directory_uri() . '/assets/js/main.js', array('jquery'), null, true );
    wp_enqueue_script ('parallax-script', get_stylesheet_directory_uri () . '/assets/js/parallax.js', array('jquery'), null, true);
    //simple parallax
    wp_enqueue_script( 'simple-parallaxe', 'https://cdnjs.cloudflare.com/ajax/libs/simple-parallax-js/5.6.2/simpleParallax.min.js', array(), true );
    //swiper slider
    wp_enqueue_style('swiper-slider', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', array(), true);
    wp_enqueue_script('swiper-slider-script', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), true);


}


if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );

    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}
