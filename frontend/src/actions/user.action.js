import axios from "axios";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const USER_PROFILE = "USER_PROFILE";
export const CHANGE_USER_NAME = "CHANGE_USER_NAME";

// Sends a connection request with the user's email address and password

export const userLogin = (postData) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/v1/user/login", postData)
      .then((res) => {
        const token = res.data.body.token;
        const status = res.data.status;

        if (status === 200) {
          dispatch({ type: USER_LOGIN, payload: { token, status } });
          dispatch(userProfile(token));
        }
      })
      .catch((error) => {
        console.error("Connection error :", error);
        dispatch({
          type: USER_LOGIN_ERROR,
          payload: {
            message: error.message,
          },
        });
      });
  };
};

// Api call to retrieve the profile of the connected user

export const userProfile = (token) => {
  const Authorization = (axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${token}`);

  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/v1/user/profile", Authorization)
      .then((res) => {
        const profileUser = res.data.body;
        const status = res.data.status;

        if (status === 200) {
          dispatch({
            type: USER_PROFILE,
            payload: {
              profileUser: profileUser,
            },
          });
        }
      })
      .catch((error) => {
        console.log("Error retrieving user profile:", error);
      });
  };
};

// Api call to modify the user name

export const changeUserName = (token, postData) => {
  const Authorization = (axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${token}`);

  return (dispatch) => {
    return axios
      .put("http://localhost:3001/api/v1/user/profile", postData, Authorization)
      .then((res) => {
        const status = res.data.status;

        if (status === 200) {
          dispatch({
            type: CHANGE_USER_NAME,
            payload: { newUserName: postData.userName },
          });
        }
      })
      .catch((error) => {
        console.log("Error when changing name use: ", error);
      });
  };
};
