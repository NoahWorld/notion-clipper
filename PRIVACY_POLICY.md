# Privacy Policy for DevClip for Notion

**Last Updated:** January 9, 2025

## Overview

DevClip for Notion ("the Extension") is committed to protecting your privacy. This privacy policy explains how the Extension handles data.

## Data Collection

**We do NOT collect any personal data.**

The Extension does not:
- Collect personal information
- Track your browsing history
- Send data to external servers (except Notion API)
- Use analytics or tracking tools
- Store data on remote servers

## Data Processing

All data processing happens **locally in your browser**:

### What the Extension Accesses:
- **Current webpage content** - Only when you click the extension icon to save a page
- **Page title and URL** - Used for saving to Notion
- **Code blocks** - Automatically extracted from the page (if present)
- **Your Notion API credentials** - Stored locally to communicate with Notion

### Where Data is Stored:
- **Local browser storage only** - Your API token and database ID are stored locally using Chrome's storage API
- **Notion servers** - Saved pages are sent directly to your Notion workspace via Notion API
- **No intermediary servers** - Data goes directly from your browser to Notion

## Permissions Explanation

The Extension requests the following permissions:

### activeTab
- **Purpose:** To access the current webpage content when you save a page
- **Usage:** Only activated when you explicitly click the extension to save
- **Data retention:** No data is retained after saving completes

### storage
- **Purpose:** To save your Notion API token and database ID locally
- **Usage:** Stores credentials in your browser's local storage
- **Data retention:** Credentials remain until you uninstall the extension or clear browser data

### scripting
- **Purpose:** To extract page content and code blocks from the current page
- **Usage:** Executes only when you click save
- **Data retention:** No data is retained after extraction

### host_permissions (https://api.notion.com/*)
- **Purpose:** To communicate with Notion API to save pages
- **Usage:** Makes API calls to create pages in your Notion database
- **Data retention:** No data is retained by the extension

## Third-Party Services

The Extension uses **only one third-party service**:

### Notion API
- **Purpose:** To save pages to your Notion workspace
- **Data sent:** Page title, URL, content, code blocks, tags, and notes
- **Privacy:** Governed by [Notion's Privacy Policy](https://www.notion.so/Privacy-Policy-3468d120cf614d4c9014c09f6adc9091)
- **Your control:** You provide your own API token and control what gets saved

The Extension does NOT use:
- Analytics (e.g., Google Analytics)
- Tracking pixels
- Advertising networks
- Any other external APIs

## Data Sharing

We do **NOT** share any data with third parties because:
- We don't collect any data
- All data goes directly from your browser to your Notion workspace
- Your API token never leaves your device

## Data Security

- Your Notion API token is stored locally and never transmitted to our servers (we don't have any)
- Communication with Notion API uses HTTPS encryption
- You control your API token and can revoke it anytime from Notion settings
- No risk of data breaches from our servers (we don't have any)

## Your Notion API Token

- Your API token is stored locally in your browser
- It is never sent to any server except Notion's official API
- You can revoke the token anytime from [Notion Integrations](https://www.notion.so/my-integrations)
- Uninstalling the extension removes the stored token

## Children's Privacy

The Extension does not knowingly collect information from children under 13. Since we don't collect any personal information from anyone, this policy applies to all users regardless of age.

## Changes to This Policy

We may update this privacy policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.

## Your Rights

Since we don't collect any personal data, there is no data to:
- Access
- Modify
- Delete
- Export

However, you can:
- Revoke your Notion API token anytime
- Uninstall the extension at any time
- Clear your browser's local storage to remove saved credentials

## Contact

If you have questions about this privacy policy, please contact:

**Email:** resetshi@gmail.com  
**GitHub:** https://github.com/NoahWorld/notion-clipper

## Compliance

This Extension complies with:
- Chrome Web Store Developer Program Policies
- General Data Protection Regulation (GDPR)
- California Consumer Privacy Act (CCPA)
- Notion API Terms of Service

## Consent

By installing and using the Extension, you consent to:
- This privacy policy
- Notion's Privacy Policy and Terms of Service
- The extension accessing page content when you explicitly save a page

## Open Source

This extension is open source. You can review the code to verify our privacy claims:
https://github.com/NoahWorld/notion-clipper
