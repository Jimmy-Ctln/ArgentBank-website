export function ProfileHeader({ userNameDisplay, handleClickEdit }) {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br></br>
        {userNameDisplay}
      </h1>
      <button className="edit-button" onClick={handleClickEdit}>
        Edit Name
      </button>
    </div>
  );
}
