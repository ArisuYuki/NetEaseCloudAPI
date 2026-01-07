/*
 * @Author: ShirahaYuki  shirhayuki2002@gmail.com
 * @Date: 2026-01-07 16:24:03
 * @LastEditors: ShirahaYuki  shirhayuki2002@gmail.com
 * @LastEditTime: 2026-01-07 17:27:52
 * @FilePath: /server/src/routes/net_ease/song/song_detail.ts
 * @Description: 歌曲详情
 *
 * Copyright (c) 2026 by ShirahaYuki, All Rights Reserved.
 */
// 歌曲详情

import { createRequest } from "../../../utils/net_ease/request.js";

export const url = "/song/detail";
export async function handler(req: any, res: any) {
  const query = req.body;
  const url = "/api/v3/song/detail";
  if (!query.ids) throw new Error("Need ids,like {'ids':[{'id':******},...]}");
  const data = {
    c: JSON.stringify(query.ids),
  };
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
