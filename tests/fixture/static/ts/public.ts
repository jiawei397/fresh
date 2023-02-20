let _username: string;
export function getUserName() {
  return _username || "unknown name";
}

export function setUserInfo(userName: string) {
  _username = userName;
}
