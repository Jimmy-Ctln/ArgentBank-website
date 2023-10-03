import { Link } from "react-router-dom";
import logo from "../../assets/logo/argentBankLogo.png";
import "font-awesome/css/font-awesome.min.css";

import "./nav.css";

export function Nav() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        ></img>
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="sign-in">
          <i className="fa fa-user-circle"></i>
          Sign in
        </Link>
      </div>
    </nav>
  );
}
