<?php 
/**
 * Plugin Name:       Mis Bloques   
 * Plugin URI:        
 * Description:       Bloques personalizados gutemberg
 * Version:           1.0
 * Requires at least: 5.8
 * Requires PHP:      7.4
 * Author:            Jose Alfredo Córdoba Cadavid
 * Author URI:       
 * License:           GPL v2 or later
 * License URI:       
 * Text Domain:       mis-bloques
*/

define("CTOM_PATH",plugin_dir_path(__FILE__));


//Blocks
require_once CTOM_PATH .'/misblocks/box/index.php';
require_once CTOM_PATH .'/misblocks/news/index.php';