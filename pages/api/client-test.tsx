import client from "@libs/client/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      email: "test",
      name: "test",
    },
  });

  res.json({
    ok: true,
  });
}
