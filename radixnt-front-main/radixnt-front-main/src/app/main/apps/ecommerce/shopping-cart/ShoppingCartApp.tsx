import { useState } from "react";
import Cart from "./shopping-cart/cart/Cart";
import ShipInfo from "./shopping-cart/ship-info/ShipInfo";
import Payment from "./shopping-cart/payment/Payment";

const ShoppingCartApp = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 && <Cart setStep={setStep} />}
      {step === 2 && <ShipInfo setStep={setStep} />}
      {step === 3 && <Payment setStep={setStep} />}
    </div>
  );
};

export default ShoppingCartApp;
