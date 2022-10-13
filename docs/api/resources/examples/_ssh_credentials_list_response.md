
#### Example Response

```json
{
  "ssh_credentials": [
    {
      "id": "sshcr_2EmMPU9QlxdxWwZoo9l46xxh0ap",
      "uri": "https://api.ngrok.com/ssh_credentials/sshcr_2EmMPU9QlxdxWwZoo9l46xxh0ap",
      "created_at": "2022-09-14T22:58:01Z",
      "description": "for device #132",
      "metadata": "",
      "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDmGS49FkSODAcKhn3+/47DW2zEn19BZvzRQ8RZjL3v6hCIX2qXfsFK35EGxNI0wV23H4xXC2gVRPHKU71YnCb50tad3yMBTM6+2yfGsEDasEH/anmBLclChKvuGiT547RskZlpbAbdq3GvbzmY+R/2EBRMOiObpc8XmSzKAd05j28kqN0+rZO65SWId0MXdvJdSCSAnuRqBNd/aXKlu8hBPDcgwbT2lMkuR+ApoBS2FLRBOiQyt2Ol0T7Uuf7lTLlazpGB3uTw5zFYUNXkuuI6cAP8QYuY1Bne/hNrG8t3Aw9a1yc2C4Fz1hJ/4OMRxTQ8SUQf+Rmxs8DryMlMFJ8r device132@example.com",
      "acl": [
        "bind:1.tcp.ngrok.io:20002",
        "bind:132.devices.company.com"
      ]
    }
  ],
  "uri": "https://api.ngrok.com/ssh_credentials",
  "next_page_uri": null
}