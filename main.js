import Whatsapp from "whatsapp-web.js";
const { Client, LocalAuth, MessageMedia } = Whatsapp;
import QrCode from "qrcode-terminal";
import { phoneNumbersList, messageText, imgPath } from "./data.js";

const wwebVersion = "2.2412.54";
const client = new Client({
  authStrategy: new LocalAuth(), // your authstrategy here
  puppeteer: {
    // puppeteer args here
  },
  // locking the wweb version
  webVersionCache: {
    type: "remote",
    remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/${wwebVersion}.html`,
  },
});

let chatids = [];
let invalids = [];

//DO NOT REMOVE THE COMMENTS, THEY ARE FOR DEBUGGING

client.on("ready", async () => {
  console.log("Client is ready!");

  await Promise.allSettled(
    phoneNumbersList.map(async (phoneNumber) => {
      const chatIdObj = await client.getNumberId(phoneNumber);
      if (chatIdObj) {
        chatids.push(chatIdObj._serialized);
      } else {
        invalids.push(phoneNumber);
      }
    })
  );

  console.log(chatids);
  console.log(invalids);

  if (imgPath) {
    for (const chatid of chatids) {
      const media = MessageMedia.fromFilePath("./image.png");
      client
        .sendMessage(chatid, media, { caption: messageText })
        .then((msg) => {
          console.log(
            `Sent for ${chatid}, Message: ${msg.body.substring(0, 15)}...`
          );
        })
        .catch((msg) => {
          console.log(
            `Error for ${chatid}, Message: ${msg.body.substring(0, 15)}...`
          );
        });
    }
  } else {
    for (const chatid of chatids) {
      client
        .sendMessage(chatid, messageText)
        .then((msg) => {
          console.log(
            `Sent for ${chatid}, Message: ${msg.body.substring(0, 15)}...`
          );
        })
        .catch((msg) => {
          console.log(
            `Error for ${chatid}, Message: ${msg.body.substring(0, 15)}...`
          );
        });
    }
  }
});

client.on("qr", (qr) => {
  QrCode.generate(qr, { small: true });
});

// client.on("message_create", (message) => {
//   console.log(message.body);
// });

client.initialize();
