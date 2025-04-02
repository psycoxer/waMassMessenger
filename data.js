import { createRequire } from "module";
const require = createRequire(import.meta.url);
const phoneNumbersList = require("./phoneNumbersList.json");

const messageText = `🌟 Google Cloud Arcade Participants 🌟

Hello everyone!

Thank you for registering for the Google Cloud Arcade! 🎉 We are thrilled to have you on board and are looking forward to an engaging and productive experience together.

To ensure you receive all the latest updates, important announcements, and valuable resources, we have created a dedicated WhatsApp group for all participants. Joining this group is mandatory for staying informed and connected with the community.

📲 Join the WhatsApp Group:  https://chat.whatsapp.com/IrvT5xb7eeaFItPzzZ61dL

Please join the group as soon as possible to ensure you don't miss out on any important information. Looking forward to seeing you in the group and on the journey to mastering Google Cloud! 🚀`;

const imgPath = "./image.png";
// const imgPath = null;

// console.log(phoneNumbersList);

const _phoneNumbersList = phoneNumbersList;
export { _phoneNumbersList as phoneNumbersList };
const _messageText = messageText;
export { _messageText as messageText };
const _imgPath = imgPath;
export { _imgPath as imgPath };
