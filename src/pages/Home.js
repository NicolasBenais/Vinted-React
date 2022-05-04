import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
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
  });
  return isLoading === true ? (
    <div>Loading...</div>
  ) : (
    <div>
      {data.offers.map((item) => {
        return (
          <div>
            <div className="item" key={item._id}>
              <div className="owner">
                {item.owner.account.avatar && (
                  <img
                    className="avatar"
                    src={item.owner.account.avatar.secure_url}
                    alt="Owner avatar"
                  />
                )}
                {item.owner.account.username}
              </div>
              <Link to={`/offer/${item.id}`}>
                <div className="item_details">
                  {/* On verra plus tard pour la photo */}
                  {item.product_price} €
                  {item.product_details.map((details) => {
                    return (
                      <div>
                        {details.TAILLE && <p> {details.TAILLE} </p>}
                        {details.MARQUE}
                      </div>
                    );
                  })}
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
