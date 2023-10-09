import "./profile.css";
import { Account } from "../../account";
import { useSelector } from "react-redux/es/hooks/useSelector";


export function Profile() {

  const user = useSelector((state) => state.userReducer)


  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br></br>
          {user.profileUser ? user.profileUser.firstName : ''} {user.profileUser ? user.profileUser.lastName : ''}
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account />
    </main>
  );
}
