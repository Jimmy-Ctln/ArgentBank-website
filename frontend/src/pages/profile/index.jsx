import "./profile.css";
import { Account } from "../../account";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState, useRef, useEffect } from "react";
import { userProfile, changeUserName } from "../../features/userSlice";
import apiServiceInstance from "../../api-service";

export function Profile() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userSlice);

  useEffect(() => {
    const data = {};
    const FetchProfileUser = async () => {
      await apiServiceInstance
        .post("/profile", data, user.token)
        .then((res) => {
          const profileUser = res.body;
          const status = res.status;

          if (status === 200) {
            dispatch(userProfile(profileUser));
            localStorage.setItem('profileUser', JSON.stringify(profileUser))
          }
        })
        .catch((error) => {
          console.log("error recovering user profile ", error);
        });
    };
    FetchProfileUser();
  }, [dispatch, user.token]);

  const form = useRef();
  const [displayForm, setDisplayForm] = useState(false);

  const userNameDisplay = user.newUserName
    ? user.newUserName
    : user.profileUser
    ? user.profileUser.userName
    : "loading...";

  const handleClickEdit = () => {
    setDisplayForm(true);
  };

  const handleClickCancel = () => {
    setDisplayForm(false);
  };

  const handleForm = (e) => {
    e.preventDefault();

    const pseudoDefault = `${user.profileUser.firstName}_${user.profileUser.lastName}`;
    const userName = form.current[0].value !== "" ? form.current[0].value : pseudoDefault;

    const postData = {
      userName: userName,
    };

    const modifyUserName = async () => {
      await apiServiceInstance
        .put("/profile", postData, user.token)
        .then((res) => {
          const status = res.status;

          if (status === 200) {
            dispatch(changeUserName(postData.userName));
            setDisplayForm(false);
            localStorage.setItem('newUserName', postData.userName)
          }
        })
        .catch((error) => {
          console.log("Error when changing name use: ", error);
        });
    };
    modifyUserName();
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
            <form
              className="form-user-info"
              ref={form}
              onSubmit={(e) => handleForm(e)}
            >
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
                <button
                  className="btn-cancle"
                  type="button"
                  onClick={handleClickCancel}
                >
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
