import { createRequire } from "module";
const require = createRequire(import.meta.url);
const phoneNumbersList = require("./phoneNumbersList.json");

const messageText = "Reaction Test";
// const imgPath = "./image.png";
const imgPath = null;

// console.log(phoneNumbersList);

const _phoneNumbersList = phoneNumbersList;
export { _phoneNumbersList as phoneNumbersList };
const _messageText = messageText;
export { _messageText as messageText };
const _imgPath = imgPath;
export { _imgPath as imgPath };
