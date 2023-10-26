import "font-awesome/css/font-awesome.min.css";
import "./login.css";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import apiServiceInstance from "../../api-service";
import { userLogin, userLoginError, remerberMe } from "../../redux/features/userSlice";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useRef();
  const user = useSelector((state) => state.userSlice);
  const rememberUser = sessionStorage.getItem("postData");
  const userData = JSON.parse(rememberUser);
  const [remember, setRemember] = useState(false);

  const handleRemember = () => {
    setRemember(!remember);
  };

  const handleForm = (e) => {
    e.preventDefault();

    const postData = {
      email: form.current[0].value,
      password: form.current[1].value,
    };

    const userFetch = async () => {
      await apiServiceInstance
        .post("/login", postData)
        .then((res) => {
          const token = res.body.token;
          const status = res.status;

          if (status === 200) {
            dispatch(userLogin({ token, status }));
            navigate("/profile");
            localStorage.setItem("token", token);
            localStorage.setItem("statusLogin", status);
            sessionStorage.clear();
            if (remember) {
              dispatch(remerberMe(JSON.stringify(postData)));
              sessionStorage.setItem("postData", JSON.stringify(postData));
            }
          }
        })
        .catch((error) => {
          dispatch(
            userLoginError({
              error,
            })
          );
          console.log("Connection error :", error);
          setRemember(false);
        });
    };
    userFetch();
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign in</h1>
        {user.errorLogin ? (
          <>
            <div className="error-login-container">
              <p className="error-login-message">
                Erreur d'email ou de mot de passe
              </p>
            </div>
            <form ref={form} onSubmit={(e) => handleForm(e)}>
              <div className="input-wrapper">
                <label htmlFor="username">Email</label>
                <input type="text" id="username" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <div className="input-remember">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={remember}
                  onChange={handleRemember}
                />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <button className="sign-in-button">Sign In</button>
            </form>
          </>
        ) : (
          <form ref={form} onSubmit={(e) => handleForm(e)}>
            <div className="input-wrapper">
              <label htmlFor="username">Email</label>
              <input
                type="text"
                id="username"
                defaultValue={userData ? userData.email : ""}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                defaultValue={userData ? userData.password : ""}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={remember}
                onChange={handleRemember}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
        )}
      </section>
    </main>
  );
}
