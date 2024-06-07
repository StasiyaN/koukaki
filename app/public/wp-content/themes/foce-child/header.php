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
                        <div class="navbar__links">
                            <a href="#burger-menu" class="btn "><i class="fa-solid fa-bars fa-3x open-menu visible"></i></a>
                            <a href=""class="btn"><i class="fa-solid fa-xmark fa-3x close-menu hidden"></i></a>    
                        </div>
                </div>
        </nav>
       <!-- drop menu content -->
       <div id="burger-menu" class="burger-menu">
            <div class="burger-menu__body">  
                <div class="burger-menu__content">                           
                            <ul class="burger-menu__text">
                                <li class="story-li"><a href="#story">Histoire</a></li>
                                <li class="characters-li"><a href="#characters">Personnages</a></li>
                                <li class="place-li"><a href="#place">Lieu</a></li>
                                <li class="studio-li"><a href="#studio">Studio Koukaki</a></li>
                            </ul>
                    <!-- images -->
                    <!-- image logo avec le lien vers le index -->
                    <!-- ajout lien au logo burger -->
                    <!-- <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"> -->
                        <img src="<?php echo get_stylesheet_directory_uri() . '/assets/burger-menu/logo-burger-menu.png';?>" alt="" class="burger-menu__logo">
                    <!-- </a> -->
                
                    <!-- images theme enfant -->
                    <img src="<?php echo get_stylesheet_directory_uri() . '/assets/burger-menu/black-cat.png';?>" alt="" class="burger-menu__cats black">
                    <img src="<?php echo get_stylesheet_directory_uri() . '/assets/burger-menu/orange-cat.png';?>" alt="" class="burger-menu__cats orange">
                    <img src="<?php echo get_stylesheet_directory_uri() . '/assets/burger-menu/violet-cat.png';?>" alt=""class="burger-menu__cats violet">
                    <!-- images thème parent -->
                    <img src="<?php echo get_template_directory_uri() . '/assets/images/random_flower.png';?>" alt="" class="burger-menu__flower violet-flower">
                    <img src="<?php echo get_template_directory_uri() . '/assets/images/flower.png';?>" alt="" class="burger-menu__flower red-flower">
                    <img src="<?php echo get_template_directory_uri() . '/assets/images/hibiscus_footer.png';?>" alt="" class="burger-menu__flower hibiscus-flower">
                    <img src="<?php echo get_template_directory_uri() . '/assets/images/orchid.png';?>" alt="" class="burger-menu__flower orchid-flower">
                    <img src="<?php echo get_template_directory_uri() . '/assets/images/Sunflower.png';?>" alt="" class="burger-menu__flower sunflower-flower">
            
            
        
                </div> 
            </div>
        </div>

                
          
		
	</header><!-- #masthead -->
