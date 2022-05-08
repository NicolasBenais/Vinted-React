import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Offer() {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div className="offer_body">
        <div className="offer_container">
          <div>
            <img
              className="offer_img"
              src={data.product_image.secure_url}
              alt="product"
            />
          </div>
          <div className="offer_info">
            <div className="offer_details_top">
              <div className="price_in_offer">{data.product_price} €</div>

              <ul className="details">
                {data.product_details.map((detail) => {
                  const keys = Object.keys(detail);
                  const key = keys[0];
                  const value = detail[key];
                  return (
                    <li key={key}>
                      <span className="brand">{key}</span>
                      <span className="brand_value">{value}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="line"></div>
            <div className="offer_details_bottom">
              <p>{data.product_name}</p>
              <p>{data.product_description}</p>
              <div className="owner_in_offer">
                <img
                  className="avatar_in_offer"
                  src={data.owner.account.avatar.secure_url}
                  alt="Owner avatar"
                />
                <div className="username_in_offer">
                  {data.owner.account.username}
                </div>
              </div>
            </div>
            <button className="by_btn">Acheter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
