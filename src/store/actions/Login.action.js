import { URL_LOGIN } from "../../constants/db";
export const SING_UP = "SING_UP";

export const singUp = (email, password) => {
  console.log(email, password);
  return async (dispatch) => {
    try {
      const response = await fetch(URL_LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application" },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToker: true,
        }),
      });
      const data = await response.json();
      console.log(data);
      dispatch({
        type: SING_UP,
        token: data.idToken,
        userID: data.localId,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
