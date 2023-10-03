import "./user.css";
import { Account } from "../../account";

export function User() {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br></br>
          Tony Jarvis!
        </h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
      <Account />
    </main>
  );
}
