<?php

get_header();
?>

<main id="primary" class="site-main">
<!-- CHANGEMENT SECTION BANNER POUR DIV POUR MIEUX MANIPULER L ANIMATIONS DANS LA SECTION -->
    <div class="banner" id="banner">
            <div class="video-container">
                <video class="background-video" autoplay muted loop>
                    <source src="<?php echo get_stylesheet_directory_uri() . '/assets/video/banner-video.mp4'; ?>" type="video/mp4" class="banner-video">
                </video>
                <img src="<?php echo get_template_directory_uri() . '/assets/images/banner.png'; ?>" class="fallback-image" alt="Image de remplacement">
            </div>
                <!-- <div class="logo-wrap"> -->
                    <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?>" class="logo-img" alt="logo Fleurs d'oranger & chats errants">
                <!-- </div> -->
            </div>



<section id="story" class="story">
    <h2><span>L'histoire</span></h2>
        <article id="story__article" class="story__article">
            <p><?php echo get_theme_mod('story'); ?></p>
        </article>
        <article id="characters">
        <div class="main-character swiper-section">
            <h3><span>Les</span> <span>personnages</span></h3>
            <?php get_template_part('template-parts/slider');?>
            </div>
        </article>
   
    <article id="place">
        <div>
            <h3><span>Le</span> <span>Lieu</span></h3>
                <p><?php echo get_theme_mod('place'); ?></p>
              
                    <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/little_cloud.png'; ?>" alt="petite nuage" class="clouds cloud__little">
                    <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/big_cloud.png'; ?>" alt="grande nuage" class="clouds cloud__big">
                
        </div>
    </article>
</section>


<section id="studio">
    <h2><span>Studio</span> <span> Koukaki</span></h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</>
        </div>
</section>

<?php get_template_part('template-parts/section-oscar');?>
</main><!-- #main -->


<?php
get_footer();?>
