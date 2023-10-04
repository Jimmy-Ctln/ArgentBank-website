import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./login.css";

export function Login() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle  sign-in-icon"></i>
        <h1>Sign in</h1>
        <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username"></input>
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password"></input>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me"></input>
            <label for="remember-me">Remember me</label>
          </div>
          <Link className="sign-in-button" to="/profile">
            Sign In
          </Link>
        </form>
      </section>
    </main>
  );
}
