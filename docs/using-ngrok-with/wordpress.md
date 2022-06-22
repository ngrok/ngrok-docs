---
sidebar_position: 21
title: Wordpress
---

# Using ngrok with Wordpress
------------

To make ngrok work properly with Wordpress installations you usually need to do two things:

1.  You must ensure that Wordpress issues relative URLS. You can do so by installing the following plugin:
    *   [http://wordpress.org/plugins/relative-url/](http://wordpress.org/plugins/relative-url/)

2.  You must ensure that Wordpress understands that it is meant to serve itself from your tunneled hostname. You can configure Wordpress to do that by modifying your \`wp-config\` to include the following lines:  
    
        define('WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST']);
        define('WP_HOME', 'http://' . $_SERVER['HTTP_HOST']);
    
3.  You must also instruct ngrok to [rewrite the host header](#http-host-header), like so:
    
        ngrok http --host-header=rewrite https://your-site.dev