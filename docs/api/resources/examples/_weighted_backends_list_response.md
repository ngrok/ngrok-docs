
#### Example Response
```json
{
  "backends": [
    {
      "id": "bkdwd_2GjEzaMzDvDHq4WQJ7oGf0U5h2Y",
      "uri": "https://api.ngrok.com/backends/weighted/bkdwd_2GjEzaMzDvDHq4WQJ7oGf0U5h2Y",
      "created_at": "2022-10-27T18:04:15Z",
      "description": "acme weighted",
      "metadata": "{\"environment\": \"staging\"}",
      "backends": {
        "bkdhr_2GjEzc28my8MquX0l5Yuw30OdYK": 0,
        "bkdhr_2GjEzd7SzXRVSx514XvXM3uM4r7": 1
      }
    }
  ],
  "uri": "https://api.ngrok.com/backends/weighted",
  "next_page_uri": null
}