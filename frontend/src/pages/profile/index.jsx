import "./profile.css";
import { Account } from "../../account";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { changeUserName } from "../../actions/user.action";

export function Profile() {
  const dispatch = useDispatch()
  const form = useRef();
  const [displayForm, setDisplayForm] = useState(false);
  
  const user = useSelector((state) => state.userReducer);
  const userName = useSelector((state) => state.userName)

  const handleClickCancel = () => {
    setDisplayForm(!displayForm);
  };

  const handleClickSave = () => {
    
  }

  const handleForm = (e) => {
    e.preventDefault();

    const postData = {
      userName: form.current[0].value,
    };

   dispatch(changeUserName(user.token, postData));

  };

  return (
    <main className="main bg-dark">
      <div className="header">
        {displayForm ? (
          <>
            <h1>
              Edit user info
              <br></br>
            </h1>
            <form ref={form} onSubmit={(e) => handleForm(e)}>
              <div className="input-user-info">
                <label htmlFor="username">User name: </label>
                <input type="text" id="username" placeholder={user.profileUser.userName} />
              </div>
              <div className="input-user-info">
                <label htmlFor="first-name">First name: </label>
                <input
                  type="first-name"
                  id="first-name"
                  placeholder={user.profileUser.firstName}
                  disabled
                />
              </div>
              <div className="input-user-info">
                <label htmlFor="last-name">Last name: </label>
                <input
                  type="last-name"
                  id="last-name"
                  placeholder={user.profileUser.lastName}
                  disabled
                />
              </div>
              <div>
                <button className="btn-save" onClick={handleClickSave}>Save</button>
                <button className="btn-cancle" onClick={handleClickCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h1>
              Welcome back
              <br></br>
              {userName ? userName : (user.profileUser ? user.profileUser.userName : "Loading...")}
            </h1>
            <button className="edit-button" onClick={handleClickCancel}>
              Edit Name
            </button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account />
    </main>
  );
}
