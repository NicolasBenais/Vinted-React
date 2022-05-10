import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export default function CheckoutForm({ title, price }) {
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
    const response = await axios.post("http://localhost:4000/payment", {
      stripeToken: stripeResponse.token.id,
      title,
      price,
    });
    console.log(response.data);

    if (response.data.status === "succeded") {
      console.log("Payment succeded");
    }
  };
  console.log(title, price);

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="payment_btn" type="submit">
        Pay
      </button>
    </form>
  );
}
