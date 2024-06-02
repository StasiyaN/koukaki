<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
		<nav id="site-navigation" class="main-navigation">

        <!-- suppression de button menu toggle -->
        <!-- creation du menu burger -->
        <!-- ajout du class pour ul + ajout de nouveau div pour les lien de burger-menu-->
                <div class = "navbar">
                <h1 class="site-title"> <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
                <span id="burger-menu" class="closed"><i class="fa-solid fa-bars fa-3x"></i></span>
               </div>
        </nav>
       <!-- drop menu content -->
       <div id="menu-container">
            <?php get_template_part('template-parts/burger-menu');?>

            <ul class="burger-menu-content">
                <li><a href="#story">Histoire</a></li>
                <li><a href="#characters">Personnages</a></li>
                <li><a href="#place">Lieu</a></li>
                <li><a href="#studio">Studio Koukaki</a></li>
                <li><a href="#oscar">Nomination Oscars</a></li>

            </ul>
        </div>

                
          
		
	</header><!-- #masthead -->
