import { FeatureItem } from "../feature-item";
import iconChat from "../../assets/img/icon-chat.webp";
import iconMoney from "../../assets/img/icon-money.webp";
import iconSecurity from "../../assets/img/icon-security.webp";
import "./features.css";

export function Features() {
  return (
    <>

      <h2 className="sr-only">Features</h2>
      <FeatureItem
        picture={iconChat}
        pictureName="icon chat"
        title="You are our #1 priority"
        paragraph="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureItem
        picture={iconMoney}
        pictureName="icon money"
        title="More savings means higher rates"
        paragraph="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureItem
        picture={iconSecurity}
        pictureName="icon security"
        title="Security you can trust"
        paragraph="We use top of the line encryption to make sure your data and money is always safe."
      />
    </>
  );
}
