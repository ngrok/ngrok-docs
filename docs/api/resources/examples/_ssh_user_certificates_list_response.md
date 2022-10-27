
#### Example Response
```json
{
  "ssh_user_certificates": [
    {
      "id": "sucrt_2GjEzPguzxdheBUQHMwWmb7qj8N",
      "uri": "https://api.ngrok.com/ssh_user_certificates/sucrt_2GjEzPguzxdheBUQHMwWmb7qj8N",
      "created_at": "2022-10-27T18:04:14Z",
      "description": "temporary access to staging machine",
      "public_key": "ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBK58lFzmWlDimDtBz78wVT4oauA8PjY0CiXTCEIsBNC6UwOJvZ0jdSaYNhDaa7dRV84DfBb/gKzqlXC7cVMZjl0= alan@work-laptop",
      "key_type": "ecdsa",
      "ssh_certificate_authority_id": "sshca_2GjEzVcuw7rane4AWG9qLZNGoyj",
      "principals": [
        "ec2-user",
        "root"
      ],
      "critical_options": {},
      "extensions": {
        "permit-pty": "",
        "permit-user-rc": ""
      },
      "valid_after": "2022-10-27T18:04:14Z",
      "valid_until": "2023-01-25T18:04:14Z",
      "certificate": "ecdsa-sha2-nistp256-cert-v01@openssh.com AAAAKGVjZHNhLXNoYTItbmlzdHAyNTYtY2VydC12MDFAb3BlbnNzaC5jb20AAAAgD2gQHWR0+VBfCbazNlaLo0RzOUFyrjSaVtS7L04lbTgAAAAIbmlzdHAyNTYAAABBBK58lFzmWlDimDtBz78wVT4oauA8PjY0CiXTCEIsBNC6UwOJvZ0jdSaYNhDaa7dRV84DfBb/gKzqlXC7cVMZjl0AAAAAAAAAAAAAAAEAAAAhc3VjcnRfMkdqRXpQZ3V6eGRoZUJVUUhNd1dtYjdxajhOAAAAFAAAAAhlYzItdXNlcgAAAARyb290AAAAAGNayB4AAAAAY9FvHgAAAAAAAAAoAAAACnBlcm1pdC1wdHkAAAAAAAAADnBlcm1pdC11c2VyLXJjAAAAAAAAAAAAAAAzAAAAC3NzaC1lZDI1NTE5AAAAINwWtiNp1gebqYgiQWKooVuGR5uN0n/hqmfGAMcKIfwRAAAAUwAAAAtzc2gtZWQyNTUxOQAAAEDDoVP91hFNw0SU7oq7teQvZKTJPehxIwW5eFcHwnQX5OjRQnqS8+4XqeftC602fT4jEXX38eYVptI/WD4UvkUI sucrt_2GjEzPguzxdheBUQHMwWmb7qj8N"
    }
  ],
  "uri": "https://api.ngrok.com/ssh_user_certificates",
  "next_page_uri": null
}