---
sidebar_position: 6
---

# App Users and Sessions
----------------

## Introduction

App Users and Sessions gives you live visibility of federated user sessions with the ability to terminate sessions instantly:

- Track active OAuth, OIDC, and SAML user sessions in your tunnels
- Examine the session context including user, device, identity provider, and network details
- Delete sessions via the admin interface (Dashboard) and programmatically (REST API)

![App Users and Sessions: Conceptual Architecture](/img/docs/app_user_session_diagram.png)

App Users and Sessions is available via the [ngrok dashboard](https://dashboard.ngrok.com/cloud-edge/app-users) and the [App Users](/docs/api/resources/application-users) and [App Sessions](/docs/api/resources/application-sessions) APIs.

## Managing Sessions from the Dashboard

### View Sessions

To view App users and sessions:

1. In the [ngrok Dashboard](https://dashboard.ngrok.com), navigate to **Cloud Edge** > **App Users** (or access the [App Users](https://dashboard.ngrok.com/cloud-edge/app-users) page directly)

    The sessions are displayed in the table. 

1. Alternatively, use the search bar to filter sessions by identity provider, User, and ID.

### View Session Details

1. Access the [App Users](https://dashboard.ngrok.com/cloud-edge/app-users) page.

1. On the App Users table, select a session:

    - ngrok displays the table with a session overview, including the provider who authenticated your session, basic information about the user, and the identity provider used for login
    - ngrok also displays a list of tunnels and edges the user accessed.

1. Click an edge or tunnel accessed by the user. 

    ngrok displays contextual information capture while the user is accessing the tunnel. That includes the user device, IP, browser, agent, country, and IP coordinates
    
    :::tip 
    Pasting the coordinates on google maps will give you more detailed information about the IP geolocation.
    :::

### Revoke Sessions

1. Access the [App Users](https://dashboard.ngrok.com/cloud-edge/app-users) page and locate your session.

1. Click the trash can next to the user and then confirm the deletion. 

    The user session is revoked immediately. 
    Users can reinitiate sessions by logging in again via their Authentication provider.

## Managing Sessions from the API

You can also programmatically investigate and revoke user sessions using the App User and Session APIs. APIs are the recommended approach when you want to drive session monitoring and deletion from third-party apps such as security management solutions and identity workflows.

:::tip 
To get complete details on how to manage sessions from the API, check the [App Users](/docs/api/resources/application-users) and [App Sessions](/docs/api/resources/application-sessions) API documentation.
:::

Examples: 


### To list user sessions

```bash
curl --location --request \
GET 'https://api.ngrok.com/app/users' \
--header 'Ngrok-Version: 2' \
--header 'Authorization: Bearer {ngrok api token}'
```

### To get session details

```bash
curl --location --request \
GET 'https://api.ngrok.com/app/users/{session-id}' \
--header 'Ngrok-Version: 2' \
--header 'Authorization: Bearer {ngrok api token}'
```

### To revoke a session

```bash
curl --location --request \
DELETE 'https://api.ngrok.com/app/users/{session-id}' \
--header 'Ngrok-Version: 2' \
--header 'Authorization: Bearer {ngrok api token}'
```
