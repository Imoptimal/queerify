<?php
// Fired when the plugin is uninstalled

// If uninstall not called from WordPress, then exit
if (!defined('WP_UNINSTALL_PLUGIN')) {
	exit;
}

if (current_user_can('delete_plugins')) { // restrict to admins
        $option_settings = 'queerify_settings';
        delete_option($option_settings);
        // for site options in Multisite
        delete_site_option($option_settings);   

} ?>
