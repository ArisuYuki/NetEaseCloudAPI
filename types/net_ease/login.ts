//-----------------------login_qr_check---------------------------------------------------
/**
 * @description: 登陆检查
 */
export interface WaitScan {
  code: 801;
  message: "等待扫码";
}
export interface Scaning {
  code: 200;
  message: "登录成功";
}

export interface LoginSuccess {
  code: 200;
  message: "登录成功";
}
//-----------------------login_qr_create---------------------------------------------------
/**
 * @description: 登陆检查
 */
export interface LoginQrCreateResponse {
  qrurl: string;
  qrsvg: string;
}
//-----------------------login_qr_key---------------------------------------------------
/**
 * @description: 登陆检查
 */
export interface LoginQrKeyResponse {
  code: number;
  unikey: string;
}
