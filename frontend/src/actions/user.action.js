import axios from "axios";
import { userLogin, userProfile, userLoginError, changeUserName } from "../features/userSlice";

// Sends a connection request with the user's email address and password

export const userFetch = (postData) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/v1/user/login", postData)
      .then((res) => {
        const token = res.data.body.token;
        const status = res.data.status;

        if (status === 200) {
          dispatch(userLogin({token, status}))
          dispatch(FetchProfileUser(token));
          localStorage.setItem("token", token)
        }
      })
      .catch((error) => {
        console.error("Connection error :", error);
        dispatch(userLoginError({
          error
        }));
      });
  };
};

// Api call to retrieve the profile of the connected user

export const FetchProfileUser = (token) => {
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
          dispatch(userProfile(profileUser));
        }
      })
      .catch((error) => {
        console.log("Error retrieving user profile:", error);
      });
  };
};

// Api call to modify the user name

export const modifyUserName = (token, postData) => {
  const Authorization = (axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${token}`);

  return (dispatch) => {
    return axios
      .put("http://localhost:3001/api/v1/user/profile", postData, Authorization)
      .then((res) => {
        const status = res.data.status;

        if (status === 200) {
          dispatch(changeUserName({
            newUserName: postData.userName
          }));
        }
      })
      .catch((error) => {
        console.log("Error when changing name use: ", error);
      });
  };
};
