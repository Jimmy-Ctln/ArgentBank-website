import axios from "axios";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const USER_PROFILE = "USER_PROFILE";

// Envoie une demande de connexion avec l'email et le mot de passe de l'utilisateur

export const userLogin = (postData) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/v1/user/login", postData)
      .then((res) => {
        const token = res.data.body.token;
        const status = res.data.status;

        if (status === 200) {
          dispatch({ type: USER_LOGIN, payload: { token, status } });
        } else {
          console.log('erreur lors de la tentative de connexion utilisateur')
        }
      })
      .catch((error) => { 
        console.error("Erreur lors de la connexion :", error);
        dispatch({ type: USER_LOGIN_ERROR, payload: {
          message: error.message,
         } });
      });
  };
};

// Pour récupérer le profil de l'utilisateur connecté

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
          dispatch({ type: USER_PROFILE, payload: profileUser });
        }
      })
      .catch((error) => {
        console.log("Erreur lors de la récupération du profil user:", error);
      });
  };
};
