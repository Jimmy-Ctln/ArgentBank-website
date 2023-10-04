import "./account-content.css";

export function AccountContent({ title, moneyAccount, descriptionAccount }) {
  return (
    <>
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{moneyAccount}</p>
        <p className="account-amount-description">{descriptionAccount}</p>
      </div>
    </>
  );
}
