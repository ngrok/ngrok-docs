
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2GjEzfdYuF1SYPFHA5RG28Huwry","ipp_2GjEzi03HwTW4YqsI09LuhbMlH8"]}' \
https://api.ngrok.com/edges/https/edghts_2GjEzdTsE0V1207U9Mvvi3jJs7Z/routes/edghtsrt_2GjEzjRYR3ypiJ1Qth1FumQjlqS/ip_restriction
