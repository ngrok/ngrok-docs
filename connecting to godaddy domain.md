## Connecting ngrok to a GoDaddy Custom Domain

This guide explains how to configure a custom domain in GoDaddy to work with ngrok.

### Step 1: Log in to Your GoDaddy Account
1. Go to [GoDaddy.com](https://www.godaddy.com) and log in.

### Step 2: Access DNS Management
1. Click on your username and select "My Products".
2. Find your domain and click "DNS" or "Manage DNS".

### Step 3: Add a CNAME Record
1. Scroll to the "Records" section and click "Add".
2. Select "CNAME" from the Type dropdown.
3. In the "Host" field, enter your desired subdomain (e.g., `www`).
4. In the "Points to" field, enter the ngrok URL (e.g., `your-subdomain.ngrok.io`).
5. Set the TTL and click "Save".

For more details, refer to [GoDaddy's guide on adding a CNAME record](https://www.godaddy.com/help/add-a-cname-record-19236).

### Step 4: Configure ngrok
1. Download and set up ngrok from [ngrok.com](https://ngrok.com).
2. Run:
    ```sh
    ngrok http 80
    ```
3. Note the forwarding URL provided by ngrok.

### Step 5: Verify Your Domain
1. Visit your custom domain in a browser.
2. It should forward to your local server via ngrok.
