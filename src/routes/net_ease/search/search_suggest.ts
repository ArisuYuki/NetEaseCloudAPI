/*
 * @Author: ShirahaYuki  shirhayuki2002@gmail.com
 * @Date: 2026-01-07 16:24:03
 * @LastEditors: ShirahaYuki  shirhayuki2002@gmail.com
 * @LastEditTime: 2026-01-07 17:28:13
 * @FilePath: /server/src/routes/net_ease/search/search_suggest.ts
 * @Description: 搜索建议
 *
 * Copyright (c) 2026 by ShirahaYuki, All Rights Reserved.
 */
// 搜索建议

import { createRequest } from "../../../utils/net_ease/request.js";

export const url = "/search/suggest";
export async function handler(req: any, res: any) {
  const query = req.body;
  const url = "/api/search/suggest/";
  if (!query.keywords) throw new Error("Need a keywords");
  const data = {
    s: query.keywords || "",
  };
  let type = query.type == "mobile" ? "keyword" : "web";
  const options = {
    crypto: "weapi",
    cookie: req.cookies,
    headers: {},
  } as const;
  const answer = await createRequest(url + "/" + type, data, options);
  return res
    .set("Set-Cookie", answer.cookie)
    .status(answer.status)
    .json(answer.data);
}
