import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

import CheckoutForm from "../components/CheckoutForm";

export default function Payment() {
  const stripePromise = loadStripe(
    "pk_test_51Kxs0JDlRccwgTSY2q76wdlQ6qTxkel3vSyfPVbMShQPjdwNdOc0uhYmm6t585MkC5yuJjPiUs0lfMTmCRRW6jFE00rXDqCFBs"
  );

  const location = useLocation();
  const { title } = location.state;
  const { price } = location.state;

  const protectionPrice = price * 0.1;
  const shippingPrice = price * 0.2;
  const totalPrice = price + protectionPrice + shippingPrice;

  //   console.log(title, price);

  return (
    <div className="payment_main">
      <div className="payment_container">
        <div className="payment_resume">
          <div className="payment_resume_title">Résumé de la commande</div>
          <div className="payment_resume_list">
            <ul>
              <li>
                <span>Commande</span>
                <span>{price.toFixed(2)} €</span>
              </li>
              <li>
                <span>Frais protection acheteurs</span>
                <span>{protectionPrice.toFixed(2)} €</span>
              </li>
              <li>
                <span>Frais de port</span>
                <span>{shippingPrice.toFixed(2)} €</span>
              </li>
            </ul>
          </div>
          <div className="divider"></div>
          <div className="payment_total">
            <span>Total</span>
            <span>{totalPrice.toFixed(2)} €</span>
          </div>
          <div className="payment_text">
            Il ne vous reste plus qu'une étape pour vous offrir
            <span className="payment_text_bold"> {title}</span>. Vous allez
            payer
            <span className="payment_text_bold">{totalPrice.toFixed(2)}</span> €
            (frais de protection et frais de port inclus).
          </div>
          <div className="divider"></div>
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm title={title} price={price} />
        </Elements>
      </div>
    </div>
  );
}
