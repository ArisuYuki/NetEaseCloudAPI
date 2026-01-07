/*
 * @Author: ShirahaYuki  shirhayuki2002@gmail.com
 * @Date: 2026-01-07 16:24:03
 * @LastEditors: ShirahaYuki  shirhayuki2002@gmail.com
 * @LastEditTime: 2026-01-07 22:17:41
 * @FilePath: /server/src/routes/net_ease/playlist/playlist_song_order_update.ts
 * @Description: 歌曲详情
 *
 * Copyright (c) 2026 by ShirahaYuki, All Rights Reserved.
 */
// 歌曲详情

import { createRequest } from "../../../utils/net_ease/request.js";

export const url = "/playlist/manipulate/update";
export async function handler(req: any, res: any) {
  const query = req.body;
  const url = "/api/playlist/manipulate/tracks";
  if (!query.ids) throw new Error("Need ids");
  if (!query.pid) throw new Error("Need pid");
  const data = {
    pid: query.pid,
    trackIds: query.ids,
    op: "update",
  };
  const options = {
    crypto: "eapi",
    cookie: req.cookies,
    headers: {},
  } as const;
  const answer = await createRequest(url, data, options);
  return res
    .set("Set-Cookie", answer.cookie)
    .status(answer.status)
    .json(answer.data);
}
