---
title: Wordpress
---

# Using ngrok with Wordpress

:::tip
This article assumes you familiar with moderate to advanced Wordpress configuration.
:::

To make ngrok work properly with Wordpress installations you usually need to do these two things:

1.  You must instruct ngrok to [rewrite the host header](/http/#rewrite-host-header) and point to the port of your Wordpress install (usually port 80), like so:

    ```bash
    ngrok http 80 --host-header=rewrite --url www.your-site.dev
    ```

1.  You must ensure that Wordpress understands that it is meant to serve itself from your tunneled hostname. You can configure Wordpress to do that by modifying your [`wp-config`](https://developer.wordpress.org/advanced-administration/wordpress/wp-config/) to include the following lines where `www.your-site.dev` is replaced with the URL from ngrok:

    ```php
        define('.COOKIE_DOMAIN.', 'www.your-site.dev');
        define('.SITECOOKIEPATH.', '.');

        if(isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
                $list = explode(',',$_SERVER['HTTP_X_FORWARDED_FOR']);
                $_SERVER['REMOTE_ADDR'] = end($list);
        }
        define( 'WP_HOME', 'https://www.your-site.dev' );
        define( 'WP_SITEURL', 'https://www.your-site.dev' );
        $_SERVER['HTTP_HOST'] = 'www.your-site.dev';
        $_SERVER['REMOTE_ADDR'] = 'https://www.your-site.dev';
        $_SERVER[ 'SERVER_ADDR' ] = 'www.your-site.dev';
    ```

:::note
This is using the the last hop in the `X-Forwarded-For` header to set `REMOTE_ADDR`.
If you are using a different header for the original client IP, or multiple forwarding proxies,
you will need to adjust this code accordingly.
:::

# Troubleshooting

If you are seeing an error about too many redirects (`TOO_MANY_REDIRECTS`), you may also need to add the following to your `wp-config` file as noted in [this issue](https://github.com/ngrok/ngrok/issues/3#issuecomment-2115490539):

```php
if (strpos($_SERVER['HTTP_X_FORWARDED_PROTO'], 'https') !== false) {
    $_SERVER['HTTPS'] = 'on';
}
```
