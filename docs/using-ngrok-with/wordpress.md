---
title: Wordpress
---

# Using ngrok with Wordpress

---

:::tip
This article assumes you familiar with moderate to advanced Wordpress configuration.
:::

To make ngrok work properly with Wordpress installations you usually need to do these three things:

1.  You must instruct ngrok to [rewrite the host header](/http/#rewrite-host-header) and point to the port of your Wordpress install (usually port 80), like so:

    ```bash
    ngrok http 80 --host-header=rewrite --domain www.your-site.dev
    ```

1.  You must ensure that Wordpress understands that it is meant to serve itself from your tunneled hostname. You can configure Wordpress to do that by modifying your [`wp-config`](https://developer.wordpress.org/advanced-administration/wordpress/wp-config/) to include the following lines where `www.your-site.dev` is replaced with the URL from ngrok:

    ```php
        define('.COOKIE_DOMAIN.', 'www.your-site.dev');
        define('.SITECOOKIEPATH.', '.');

        if(isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
                $list = explode(',',$_SERVER['HTTP_X_FORWARDED_FOR']);
                $_SERVER['REMOTE_ADDR'] = $list[0];
        }
        define( 'WP_HOME', 'https://www.your-site.dev' );
        define( 'WP_SITEURL', 'https://www.your-site.dev' );
        $_SERVER['HTTP_HOST'] = 'www.your-site.dev';
        $_SERVER['REMOTE_ADDR'] = 'https://www.your-site.dev';
        $_SERVER[ 'SERVER_ADDR' ] = 'www.your-site.dev';
    ```
