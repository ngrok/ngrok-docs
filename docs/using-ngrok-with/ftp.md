---
title: FTP / FTPS / SFTP
---

# Using ngrok with FTP, FTPS, SFTP

---

## Compatibility with FTP & FTPS

Because using FTP or FTPS (FTP over SSL) requires multiple dynamic ports for transferring data between server and client, ngrok is not a good solution for that traffic. We recommend using SFTP instead which relies on a single port number.

## ngrok with SFTP

You can use ngrok for SFTP communication by opening up a TCP tunnel on the port used by the SFTP server, usually port `22` (the same as SSH).

```bash
ngrok tcp 22
```

From there, you can use the resulting TCP address in your preferred SFTP client to connect to your local server.

## Alternatives to FTP for sharing files

If you're just looking for a quick and easy way to serve local files, ngrok has a [built in file server](/docs/http/#file-serving).
