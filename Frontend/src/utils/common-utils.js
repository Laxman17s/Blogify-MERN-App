export const getAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const Token = `Bearer ${user.token}`;
  return Token;
};
