<?php
$characters = get_posts(array(
    'post_type' => 'characters',
    'posts_per_page' => -1,
));

foreach ($characters as $character) {
    $character_name = $character->post_title; // Récupérer le nom du personnage
    $character_image = get_the_post_thumbnail_url($character->ID); // Récupérer l'URL de l'image du personnage
    $characters_data[] = array(
        'name' => $character_name,
        'image' => $character_image,
    );
}
?>

<!-- Affichage des données dans le slider -->
<div class="swiper">
    <div class="swiper-wrapper">
        <?php foreach ($characters_data as $character) : ?>
            <div class="swiper-slide">
                <img src="<?php echo $character['image']; ?>" alt="" />
                <p> <?php echo $character['name']; ?></p>
            </div>
        <?php endforeach; ?>
    </div>
    <div class="swiper-pagination">
    <i class="fa-solid fa-paw"></i>
    </div>
</div>