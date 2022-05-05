import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Home-Header";
import bannerImg from "/Users/nicolasbenais/Dev/LeReacteur/React/08/Exercices/vinted-react/src/assets/img/banner-tablets-up-afe3d19776592a72f165c1bb93fd02c5528250a8c670ecc1656654323f9d4856.jpeg";

export default function Home({ setIsTokenPresent, isTokenPresent }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {/* -------- HEADER -------- */}
      <Header
        isTokenPresent={isTokenPresent}
        setIsTokenPresent={setIsTokenPresent}
      />

      {/* -------- BANNER -------- */}

      <div className="banner">
        <img className="banner_img" src={bannerImg} alt="Banner" />
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 559 39">
          <path
            d="M662 40V6.1c-.7.2-1.5.3-1.7.3-.5 0-3.7-.1-3.7-.1l-7.7-5.1-5.9.4-3.7.6-4.7-2.2h-.2l-2.8.8-3.8.4-2.2.8-2.6 1-4 1.2-3.1.8-1.6.9-3.3.7-3.4-1-4.2.2-2-1h-3.9l-3.2.4-3.2.4-4.1.6-1.6.9-4.4-.9-7.6-.5-4.2.1-3-.1-3.9-1.3h-6.7l-3 .4-1.4-.7-1.7-.7-3.9-.6-3.6-.6c-2-.4-3-.1-3.5-.1s-3 .9-3 .9l-4.5.8-3.1 1.6-2.1.7-1.8 1v1l-2.8.6-2.3 1.3-3-.2c-3.5.3-4.7.8-4.7.8l-3.8.2c-2.6-.4-4.7-.2-4.7-.2l-3 .6-2.4-1-2.9-.2-.1-1-1.9-.8-4.1-1.1-5-.1c-1.1-.6-3.6-1.1-4.1-1.1-.3 0-1.5.2-3.5.6l-3.6 1-3.8 1.1-1.6.9-1.3.9-3-.1-4 .4-2.6.5-1.6 1.1-2.1.7-3 .5-2.3.8-7.1 1.2-5.1 1-3-.2-4.2-.2H421l-3.8.5-1.9 1.3h-2.9l-3.6 1.2-4.3.4-1.7-.7-1.4-1-5.9-.1-2.7-.7-2.2-.5-3.9.1h-4l-4.7-.1-4.8-.6-4.3.4-5.8 1.1c-.9.8-4.1 1.3-4.6 1.3s-3.2.2-3.2.2l-5.3-1-4.9.1-6-1.1-4.5.2-2.9-.5-4.9-.3h-3.5l-2.4 1-2.6.8-3.8.6-1.2 1.2-4.6-.3-2.2-.5c-2.8.1-2.9-.2-2.9-.5s-3.4-.5-3.4-.5l-2.1-1.2-5.4.1-3.9 1.9-1.1.9-3.1 1.3.1 1 .1.9-2.8-1.4-4.1-1.1-4.9-.1c-1.1-.6-3.6-1.1-4.1-1.1-.3 0-1.5.2-3.5.6l-3.6 1L258 22l-4.2-.3-.1-1.2-2.7-.5-1-1.7-1.1 1.9-2.3-1-3.6-.6-1.8-.8-2.3.6-1.6 1.6-2.4-1-3.7.3-2.1-1.8-2.4 1.1-1.4.9-1.7-.8-1.9 1-1.1 1-1.9 1.4-2.8.6-.1-1.6-4.1.9-2.4 1.1-1.3.9-3.7.3-1.3 1-4 1.9-2.8.8-3.1.7-5.3.5-1.8-.9-3.2.1-1.6 1.4-5.2.3-4-.5-4.2-.1-2.2-.6-2.5.5-4.8.4-3 .4-2.9-.5-3.6.8-4.6-1-3.7-.4-6.2.6-2.3-.7-3.4-.3-3.6-.7-2.7.6.1 1.9-6.1-.7h-3.5l-2.4 1-2.6.8-3.8.6-1.2 1.2-4.6-.3-2.2-.5c-3 .3-3-.1-3-.3 0-.3-3.4-.5-3.4-.5l-2.1-1.2-5.4.1-3.9 1.9-1.1.9-3.1 1.3.1.9-3.5-.9-1.9-.8h-4.8c-1.1-.6-3.6-1.1-4.1-1.1-.3 0-1.5.2-3.5.6l-3.6 1-3.8 1.1-2.2 1.3-3.7.4-4 .4-2.6.5-3.4.4c-.7-.4-1.3-.7-1.9-1-2.3-.2-2.4-.3-2.5-.4-.7-.8-.8-.9-.9-.9-1.1-.3-2.1-.6-3.1-.9-.6-.3-1.6-.4-2.9-.3l-3.7.3-2.4 1.1-1.5.9c-1.1.5-2.1.8-3.2.9-.4.7-.5.9-.7 1l-.5.7H662z"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#fff"
          />
        </svg>
        <div className="banner_text">
          <p>Prêts à faire du tri dans vos placards ?</p>

          <button className="banner_btn">Commencez à vendre</button>
        </div>
      </div>

      {/* -------- CENTER -------- */}

      <div className="center">
        {data.offers.map((item) => {
          return (
            <div key={item._id} className="item">
              <div className="owner">
                {item.owner.account.avatar && (
                  <img
                    className="avatar"
                    src={item.owner.account.avatar.secure_url}
                    alt="Owner avatar"
                  />
                )}
                <div className="username">{item.owner.account.username}</div>
              </div>
              <Link className="link" to={`/offer/${item._id}`}>
                <div className="item_details">
                  <img
                    className="product_image"
                    src={item.product_image.secure_url}
                    alt=""
                  />
                  <div className="item_details_bottom">
                    <p className="price">{item.product_price} €</p>
                    {item.product_details.map((details) => {
                      if (details.TAILLE) {
                        return <p> {details.TAILLE} </p>;
                      }
                      if (details.MARQUE) {
                        return <p> {details.MARQUE} </p>;
                      }
                      return null;
                    })}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
