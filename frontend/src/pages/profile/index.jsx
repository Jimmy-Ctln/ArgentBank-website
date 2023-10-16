import "./profile.css";
import { Account } from "../../account";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { modifyUserName } from "../../actions/user.action";

export function Profile() {
  const dispatch = useDispatch()
  const form = useRef();
  const [displayForm, setDisplayForm] = useState(false);
  
  const user = useSelector((state) => state.userSlice);
  const userNameDisplay = user.newUserName ? user.newUserName : (user.profileUser ? user.profileUser.userName : 'loading...')

  const handleClickEdit = () => {
    setDisplayForm(true);
  };

  const handleClickCancel = () => {
    setDisplayForm(false);
  };

  const handleForm = (e) => {
    e.preventDefault();
    
    const pseudoDefault = `${user.profileUser.firstName}_${user.profileUser.lastName}`
    const userName = form.current[0].value !== "" ? form.current[0].value : pseudoDefault

    const postData = {
      userName: userName,
    };

   dispatch(modifyUserName(user.token, postData));
   setDisplayForm(false)
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
            <form className="form-user-info" ref={form} onSubmit={(e) => handleForm(e)}>
              <div className="user-info">
                <label htmlFor="username">User name: </label>
                <input 
                className="input-info"
                type="text" 
                id="username"
                placeholder={userNameDisplay}
                 />
              </div>
              <div className="user-info">
                <label htmlFor="first-name">First name: </label>
                <input
                  className="input-info"
                  type="first-name"
                  id="first-name"
                  placeholder={user.profileUser.firstName}
                  disabled
                />
              </div>
              <div className="user-info">
                <label htmlFor="last-name">Last name: </label>
                <input
                  className="input-info"
                  type="last-name"
                  id="last-name"
                  placeholder={user.profileUser.lastName}
                  disabled
                />
              </div>
              <div className="button-form">
                <button className="btn-save">Save</button>
                <button className="btn-cancle" type="button"  onClick={handleClickCancel}>
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
              {userNameDisplay}
            </h1>
            <button className="edit-button" onClick={handleClickEdit}>
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
