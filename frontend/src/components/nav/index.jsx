import { Link } from "react-router-dom";
import logo from "../../assets/logo/argentBankLogo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./nav.css";

export const USER_LOGOUT = "USER_LOGOUT";

export function Nav() {
  const user = useSelector((state) => state.userReducer);
  const userName = useSelector((state) => state.userName)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: USER_LOGOUT, payload: { isConnected: false } });
    navigate("/");
  };

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
      <div className="container-nav">
        {user.isConnected ? (
          <>
            <div className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {userName ? userName : (user.profileUser ? user.profileUser.userName : "Loading...")}
            </div>
            <div className="main-nav-item" onClick={() => handleLogout()}>
            <FontAwesomeIcon icon={faPowerOff }/>
              Logout
            </div>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
