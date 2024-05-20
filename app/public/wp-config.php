<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          ']^?_s2:c`$I~ydE`ro,YW?tpV)WE;yPB*LU-MLy+=TpNQ}Hy CGN)qQZWjCFUEjs' );
define( 'SECURE_AUTH_KEY',   '}GM``HmnW3nT-~R.}]HF<wj*</Bw~s)oz&OIKxnF`;W_B|Y1o Kj(2kCrUvz^trQ' );
define( 'LOGGED_IN_KEY',     'Znm7Kuuf[Mbc$F.xiKdKseM8:6`u&{_dtn%etwkB}!M%X?;_<J2RsA^GE+YZi[cI' );
define( 'NONCE_KEY',         'aj}pvD#^d0-<[6BL=9r-AL .$::4k_A6GrQa}4zX8y=Y9^fny+PtIg7(A  L6GW0' );
define( 'AUTH_SALT',         '%n}b2(Q)8:w3%lxTHf}2}HpN2aJ.jik[B)hp@_(nF9y*T+l7fy.~6~RTz>s9/^b>' );
define( 'SECURE_AUTH_SALT',  'm>~Cs<ri]6enHJ>nmCTzjTXYP@Zps>d)rqiq2?(J2gFL(:>PDQPxEFKwEv%IC-6N' );
define( 'LOGGED_IN_SALT',    'I``Jy5sV/Y|<FAsk^!Dg81ucG9e4G%y3vE!]z7y<<eR7qyNXW@)<vT2&}!/vO+bE' );
define( 'NONCE_SALT',        'n4tWK&~q)8VP^}v<ON@MoBLkV(hD<iq(_ma@Hf[aN*X`!T+I^(dPxhE|D ;rj}D0' );
define( 'WP_CACHE_KEY_SALT', '8R)1tGwGBN.xnP9PR 2DaJV%D,FE^NF{a0sF(F!:g: gMXDKKlTZrAO!*)`DMJmF' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
