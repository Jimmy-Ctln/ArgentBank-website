import "./profile.css";
import { Account } from "../../components/account";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState, useEffect } from "react";
import { userProfile } from "../../redux/features/userSlice"
import apiServiceInstance from "../../api-service";

import { ProfileHeader } from "../../components/profileHeader";
import { ProfileForm } from "../../components/profileForm";

export function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice);
  const userNameDisplay = user.newUserName ? user.newUserName : user.profileUser ? user.profileUser.userName : "loading...";
  
  const [displayForm, setDisplayForm] = useState(false);
  
  const handleClickEdit = () => {
    setDisplayForm(true);
  };

  useEffect(() => {
    const data = {};
    const statusProfileUser = localStorage.getItem("statusProfileUser");
  
    if (!user.statusProfileUser && !statusProfileUser) {
      const FetchProfileUser = async () => {
        try {
          const res = await apiServiceInstance.post("/profile", data, user.token);
          const profileUser = res.body;
          const status = res.status;
  
          if (status === 200) {
            dispatch(userProfile({ profileUser, status }));
            localStorage.setItem("profileUser", JSON.stringify(profileUser));
            localStorage.setItem("statusProfileUser", status);
          }
        } catch (error) {
          console.log("error recovering user profile ", error);
        }
      };
      FetchProfileUser();
    }
  }, [dispatch, user.token, user.statusProfileUser, user.remerberMe]);
  

  return (
    <main className="main bg-dark">
      <div className="header">
        {displayForm ? (
          <ProfileForm
            user={user}
            userNameDisplay={userNameDisplay}
            setDisplayForm={setDisplayForm}
          />
        ) : (
          <ProfileHeader
            userNameDisplay={userNameDisplay}
            handleClickEdit={handleClickEdit}
          />
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account />
    </main>
  );
}
