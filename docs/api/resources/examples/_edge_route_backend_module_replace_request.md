
#### Example Request

```bash 
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"backend_id":"bkdtg_2EmMPs1pO12lCu9sKBUFWK1SW5j"}' \
https://api.ngrok.com/edges/https/edghts_2EmMPrGBn8NG8NHzR7HTtBkO8Es/routes/edghtsrt_2EmMPs64mKAMDKH2kS1TX9pgVFB/backend
