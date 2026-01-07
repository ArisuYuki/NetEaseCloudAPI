/*
 * @Author: ShirahaYuki  shirhayuki2002@gmail.com
 * @Date: 2026-01-07 16:24:03
 * @LastEditors: ShirahaYuki  shirhayuki2002@gmail.com
 * @LastEditTime: 2026-01-07 17:28:37
 * @FilePath: /server/src/routes/net_ease/playlist/playlist_order_update.ts
 * @Description: 编辑歌单的顺序
 *
 * Copyright (c) 2026 by ShirahaYuki, All Rights Reserved.
 */
// 编辑歌单顺序

import { createRequest } from "../../../utils/net_ease/request.js";

export const url = "/playlist/order/update";
export async function handler(req: any, res: any) {
  const url = "/api/playlist/order/update";
  const query = req.body;
  if (!query.ids) throw new Error("Need ids");
  const data = {
    ids: query.ids,
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
