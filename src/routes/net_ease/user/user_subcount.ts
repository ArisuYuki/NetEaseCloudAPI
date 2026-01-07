/*
 * @Author: ShirahaYuki  shirhayuki2002@gmail.com
 * @Date: 2026-01-07 16:24:03
 * @LastEditors: ShirahaYuki  shirhayuki2002@gmail.com
 * @LastEditTime: 2026-01-07 17:25:15
 * @FilePath: /server/src/routes/net_ease/user/user_subcount.ts
 * @Description: 用户详情
 *
 * Copyright (c) 2026 by ShirahaYuki, All Rights Reserved.
 */
// 用户详情

import { createRequest } from "../../../utils/net_ease/request.js";

export const url = "/user/subcount";
export async function handler(req: any, res: any) {
  const url = "/api/subcount";
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
