---
title: Wordpress
---

# Using ngrok with Wordpress
------------

:::tip
This article assumes you familar with moderate to advanced Wordpress configuration.
:::

To make ngrok work properly with Wordpress installations you usually need to do two things:

1.  You must ensure that Wordpress issues relative URLS. You can do so by installing the following plugin:
    *   [http://wordpress.org/plugins/relative-url/](http://wordpress.org/plugins/relative-url/)

2.  You must ensure that Wordpress understands that it is meant to serve itself from your tunneled hostname. You can configure Wordpress to do that by modifying your \`wp-config\` to include the following lines:  
    
        define('WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST']);
        define('WP_HOME', 'http://' . $_SERVER['HTTP_HOST']);
    
3.  You must also instruct ngrok to [rewrite the host header](/ngrok-agent/ngrok#ngrok-http), like so:
    
        ngrok http --host-header=rewrite https://your-site.dev