import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

export default function CheckoutForm({ title, totalPrice }) {
  const [succededPayment, setSuccededPayment] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // étape 1
    const cardElements = elements.getElement(CardElement);
    console.log(cardElements);

    // étape 2
    const stripeResponse = await stripe.createToken(cardElements);
    console.log(stripeResponse);

    // étape 3
    const response = await axios.post(
      "https://vinted-bcknd.herokuapp.com/payment",
      {
        stripeToken: stripeResponse.token.id,
        title,
        totalPrice,
      }
    );
    setSuccededPayment(true);
    console.log(response.data);

    if (response.data.status === "succeded") {
      console.log("Payment succeded");
    }
  };

  return (
    <div>
      {succededPayment ? (
        <div className="payment_btn payment_succeded">Paiement effectué !</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button className="payment_btn" type="submit">
            Pay
          </button>
        </form>
      )}
    </div>
  );
}
