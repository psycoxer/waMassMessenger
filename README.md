# Bulk WhatsApp Sender

This is a very simple tool to send the same message to multiple phone numbers in WhatsApp

## How to run

Clone the Repo, run `yarn install`

Add a `phoneNumbersList.json` file with the following format:

```
["phnNumber #1", "phnNumber #2", ...]
```

And add your message to `data.js`, and put your image in the topLevel Directory with the name `image.png`

Once setup, run `yarn run start`. If running for the first time, a QR code will appear in the terminal. Scan this QR code within your WhatsApp mobile app to authenticate to WA Web (Under linked Devices).
Subsequent runs won't require re-logins as your creds will be locally stored.

> [!IMPORTANT]
> The script wont exit after sending all the messages. Close it manually with `ctrl+c` after it sends all the messages. Also need to add error handling.
