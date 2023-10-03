import { AccountContent } from "../account-content";
import "./account.css";

export function Account() {
  return (
    <>
      <section className="account">
        <AccountContent
          title="Argent Bank Checking (x8349)"
          moneyAccount="$2,082.79"
          descriptionAccount="Available Balance"
        />
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <AccountContent
          title="Argent Bank Savings (x6712)"
          moneyAccount="$10,928.42"
          descriptionAccount="Available Balance"
        />
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <AccountContent
          title="Argent Bank Credit Card (x8349)"
          moneyAccount="$184.30"
          descriptionAccount="Available Balance"
        />
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </>
  );
}
