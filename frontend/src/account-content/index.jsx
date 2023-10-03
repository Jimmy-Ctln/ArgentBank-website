import "./account-content.css";

export function AccountContent({ title, moneyAccount, descriptionAccount }) {
  return (
    <>
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p class="account-amount">{moneyAccount}</p>
        <p class="account-amount-description">{descriptionAccount}</p>
      </div>
    </>
  );
}
