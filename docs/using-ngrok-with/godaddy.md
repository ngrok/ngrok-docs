---
title: GoDaddy
---

# Configuring GoDaddy DNS for ngrok Reserved Domains

This guide explains how to configure a custom domain in GoDaddy to work with ngrok.

The guide assumes that you have already [added a reserved domain](/guides/how-to-set-up-a-custom-domain/) in ngrok with a subdomain (e.g. myapp.example.com).

::::note
GoDaddy does not support CNAMEs as apex records. An apex record is a DNS record at the root (or apex) of a DNS zone. For example, in the DNS zone example.com, an apex record also has the fully qualified name example.com (this is sometimes called a naked domain). By convention, the relative name '@' is used to represent apex records.

You will need to use a subdomain (e.g. `www.example.com`) when using ngrok.
::::

## Step 1: Find your reserved domain in ngrok

1. Log into the [ngrok Dashboard](https://dashboard.ngrok.com) and navigate to your domain in the [Domains section](https://dashboard.ngrok.com/cloud-edge/domains).
1. Click in your domain to open the details, and click on the "DNS Targets" link in the top table. This will provide you with the relevant CNAME values to use in later steps.

## Step 2: Log in to Your GoDaddy Account & Access DNS Management

1. Go to [GoDaddy.com](https://www.godaddy.com) and log in with your credentials.
1. Click on your username in the upper right corner and select "My Products".
1. Find your domain in the list and click "DNS" or "Manage DNS" next to it.

## Step 3: Add a CNAME Record

1. In the DNS Management page, scroll down to the "Records" section.
1. Click "Add" to create a new record.
1. Select "CNAME" from the Type dropdown menu.
1. In the "Host" field, enter the subdomain you want to use (e.g., `www` if your domain in ngrok is `www.example.com`).
1. In the "Points to" field, enter the CNAME provided by ngrok (e.g., `ptenvq2ejdlptgyr.5mql8tts8aeqxhrtv.ngrok-cname.com`).
1. Set the TTL to your desired value (default is fine).
1. Click "Save" to add the record.

For more details, refer to [GoDaddy's guide on adding a CNAME record](https://www.godaddy.com/help/add-a-cname-record-19236).

## Step 4: Verify the DNS Entries in ngrok

1. Once you've configured the DNS records in GoDaddy, you can return to the ngrok dashboard and click the "Check Status" button on the bottom of the DNS Details page. It may take a few minutes to an hour for the DNS records to propagate. ngrok will continue to check at a regular interval after your domain is configured. Once you see a green checkmark, you are good to go.

Finally, whenever you want to use your new domain in the ngrok agent, be sure to add `--url your.domain.com` to the end of any command, such as `ngrok http 80 --url your.domain.com`.
