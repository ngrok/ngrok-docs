---
title: Okta SCIM User Provisioning
description: Enable automated user provisioning via SCIM
tags:
  - okta
  - scim
  - user provisioning
  - dashboard sso
---

# Automated User Provisioning via SCIM with Okta

---

## Configuring ngrok

Start by logging into your ngrok Dashboard as an admin user.

1. Navigate to the **Settings**, **Account** menu in the left side of the page.

   ![ngrok Dashboard Settings](img/okta-scim-account-settings.png)

1. Go to the **User Provisioning / SCIM** section and toggle on the **Automated User Provisioning via SCIM 2.0** option to on. This will open a drawer and prompt you to create a new API key. It is recommended to use a unique key just for SCIM.

   ![ngrok User Provisioning](img/okta-scim-provisioning.png)

1. Give the API key a descriptive name and assign it either to an administrator user or a bot user. Bot users are ideal for this integration because they will not be deactivated when a user leaves the account.

   ![ngrok create new API key](img/okta-scim-add-api-key.png)

1. Save the API key somewhere safe or keep this window up while we complete the next steps in Okta.

   ![ngrok new API key](img/okta-scim-new-api-key.png)

## Configuring Okta SCIM

This document assumes you have already set up [Okta for dashboard SSO](https://ngrok.com/docs/guides/dashboard-sso-okta-setup). Once you've completed those steps, you can continue here.

Open a new tab in your browser, then log in to the Okta admin console as a user with the ability to manage the ngrok application.

1. In the Okta admin console navigate to the to **Applications/Applications** menu on the left side.

   ![Okta Applications](img/okta-scim-okta-app.png)

1. Open the ngrok app you created.

1. Enable SCIM on the general tab in the ngrok application you created under the Provisioning section:

   ![Okta Application General](img/okta-scim-okta-general-settings.png)

1. Switch to the Provisioning tab in your Okta application configuration
   - SCIM connector base URL:
     - https://api.ngrok.com/scim/v2/
   - Unique identifier field for users
     - `email`
   - Supported provisioning actions
     - Push new users
     - Push profile updates
   - Authentication mode:
     - HTTP Header
   - Authorization:
     - This is the ngrok API key that you saved or copied earlier
1. The configuration should look like this:

   ![Okta Application Provisioning](img/okta-scim-okta-app-provisioning.png)

1. Click **Test Connect Configuration** and you should see a success message.

If you get an error message that states no users were returned then you have an error in the configuration and should check the configuration for typos and leading or trailing spaces.
