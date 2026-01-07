/*
 * @Author: ShirahaYuki  shirhayuki2002@gmail.com
 * @Date: 2026-01-07 16:24:03
 * @LastEditors: ShirahaYuki  shirhayuki2002@gmail.com
 * @LastEditTime: 2026-01-07 17:27:12
 * @FilePath: /server/src/routes/net_ease/song/song_like.ts
 * @Description: 红心与取消红心歌曲
 *
 * Copyright (c) 2026 by ShirahaYuki, All Rights Reserved.
 */
// 红心与取消红心歌曲
import { createRequest } from "../../../utils/net_ease/request.js";

export const url = "/song/like";
export async function handler(req: any, res: any) {
  const query = req.body;
  const url = "/api/radio/like";
  if (!query.id) throw new Error("Need a id");
  const data = {
    alg: "itembased",
    trackId: query.id,
    like: query.like,
    time: "3",
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
