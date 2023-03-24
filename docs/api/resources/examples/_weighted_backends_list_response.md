
#### Example Response
```json
{
  "backends": [
    {
      "id": "bkdwd_2NTVHYmERUarME0k5SF0rp7zdgt",
      "uri": "https://api.ngrok.com/backends/weighted/bkdwd_2NTVHYmERUarME0k5SF0rp7zdgt",
      "created_at": "2023-03-24T19:59:31Z",
      "description": "acme weighted",
      "metadata": "{\"environment\": \"staging\"}",
      "backends": {
        "bkdhr_2NTVHXMhdfoxxpr9RvzhWEzRjkI": 0,
        "bkdhr_2NTVHZ1EFqA7UkmtdjwnP4ND4NI": 1
      }
    }
  ],
  "uri": "https://api.ngrok.com/backends/weighted",
  "next_page_uri": null
}