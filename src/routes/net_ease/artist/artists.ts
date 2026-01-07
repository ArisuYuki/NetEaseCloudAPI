/*
 * @Author: ShirahaYuki  shirhayuki2002@gmail.com
 * @Date: 2026-01-07 16:24:03
 * @LastEditors: ShirahaYuki  shirhayuki2002@gmail.com
 * @LastEditTime: 2026-01-07 17:31:44
 * @FilePath: /server/src/routes/net_ease/artist/artists.ts
 * @Description: 歌手单曲
 *
 * Copyright (c) 2026 by ShirahaYuki, All Rights Reserved.
 */
// 歌手单曲

import { createRequest } from "../../../utils/net_ease/request.js";

export const url = "/artist";
export async function handler(req: any, res: any) {
  const query = req.body;
  if (!query.id) throw new Error("Need a artist id");
  const url = `/api/v1/artist/${query.id}`;
  const data = {};
  const options = {
    crypto: "weapi",
    cookie: req.cookies,
    headers: {},
  } as const;
  const answer = await createRequest(url, data, options);
  return res
    .set("Set-Cookie", answer.cookie)
    .status(answer.status)
    .json(answer.data);
}
