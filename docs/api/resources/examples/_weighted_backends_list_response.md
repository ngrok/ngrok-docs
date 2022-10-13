
#### Example Response

```json
{
  "backends": [
    {
      "id": "bkdwd_2EmMPdw8ZgpdiPQ2O33ui4jcjs3",
      "uri": "https://api.ngrok.com/backends/weighted/bkdwd_2EmMPdw8ZgpdiPQ2O33ui4jcjs3",
      "created_at": "2022-09-14T22:58:03Z",
      "description": "acme weighted",
      "metadata": "{\"environment\": \"staging\"}",
      "backends": {
        "bkdhr_2EmMPdVQj4dRiH9qEFkrgFy2nHP": 1,
        "bkdhr_2EmMPiRD0HRRhfTm8XcRpjDrsll": 0
      }
    }
  ],
  "uri": "https://api.ngrok.com/backends/weighted",
  "next_page_uri": null
}