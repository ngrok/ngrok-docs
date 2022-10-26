
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"environment\":\"dev\", \"stream\":1}","description":"kinesis dev stream 1 of 3"}' \
https://api.ngrok.com/event_destinations/ed_2Ggv0bc8KtcnZabYxipUBP9z1Ve
