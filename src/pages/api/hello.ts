// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

const accountSid = "AC195478ebf64b005cbf1ee40f854345de";
const authToken = "45f4226321142c0461a96c82ef59ad99";
const client = require("twilio")(accountSid, authToken);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  client.messages
    .create({
      from: "whatsapp:+13854744811",
      body: "Hello, there!",
      to: "whatsapp:+14155238886",
    })
    .then((message: any) => {
      console.log(message.sid);
      res.status(200).json({ name: "John Doe" });
    })
    .catch((e: any) => res.send(e));
}
