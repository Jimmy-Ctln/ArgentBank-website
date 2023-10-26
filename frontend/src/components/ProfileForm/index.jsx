import { useRef } from "react";
import { changeUserName } from "../../redux/features/userSlice";
import { useDispatch } from "react-redux";
import apiServiceInstance from "../../api-service";
import { useSelector } from "react-redux/es/hooks/useSelector";

export function ProfileForm({ user, userNameDisplay, setDisplayForm }) {
  const remerberMe = useSelector((state) => state.userSlice.remerberMe);

  const dispatch = useDispatch();
  const form = useRef();

  const handleClickCancel = () => {
    setDisplayForm(false);
  };

  const handleForm = (e) => {
    e.preventDefault();

    const userName = form.current[0].value;
    const postData = {
      userName: userName,
    };

    if (userName === "") {
      setDisplayForm(false);
    } else {
      const modifyUserName = async () => {
        try {
          const res = await apiServiceInstance.put("/profile", postData, user.token);
          const status = res.status;

          if (status === 200) {
            dispatch(changeUserName(postData.userName));
            setDisplayForm(false);
            localStorage.setItem("newUserName", postData.userName);
            // if (remerberMe) {
            // }
          }
        } catch (error) {
          console.log("Error when changing name use: ", error);
        }
      };
      modifyUserName();
    }
  };

  return (
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
            className="btn-cancel"
            type="button"
            onClick={handleClickCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
