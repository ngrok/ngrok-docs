<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "enabled": true,
  "provider": {
    "github": null,
    "facebook": null,
    "microsoft": null,
    "google": {
      "client_id": "client-id",
      "client_secret": "client-secret",
      "scopes": [
        "profile",
        "email",
        "https://www.googleapis.com/auth/gmail.compose"
      ],
      "email_addresses": [
        "alan@example.com"
      ],
      "email_domains": []
    },
    "linkedin": null,
    "gitlab": null,
    "twitch": null,
    "amazon": null
  },
  "options_passthrough": true,
  "cookie_prefix": "ngrok.",
  "inactivity_timeout": 0,
  "maximum_duration": 0,
  "auth_check_interval": 0
}