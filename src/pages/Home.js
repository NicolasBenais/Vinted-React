import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Home-Header";

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
