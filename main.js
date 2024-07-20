const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const { phoneNumbersList, messageText } = require("./data");

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

//DO NOT REMOVE THE COMMENTS, THEY ARE FOR DEBUGGING

client.on("ready", async () => {
  console.log("Client is ready!");

  await Promise.all(
    phoneNumbersList.map(async (phoneNumber) => {
      const chatIdObj = await client.getNumberId(phoneNumber);
      chatids.push(chatIdObj._serialized);
    })
  );

  //   for (const num of guinni) {
  //     const chatIdObj = await client.getNumberId(num);
  //     chatids.push(chatIdObj._serialized);
  //   }

  console.log(chatids);

  for (const chatid of chatids) {
    const media = MessageMedia.fromFilePath("./image.png");
    client.sendMessage(chatid, media, { caption: messageText });
  }
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

// client.on("message_create", (message) => {
//   console.log(message.body);
// });

client.initialize();
