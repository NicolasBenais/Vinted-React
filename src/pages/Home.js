import axios from "axios";
import { useEffect, useState } from "react";

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
          <div
            key={item._id}
            onClick={() => {
              console.log(item);
            }}
          >
            <div className="owner">
              {item.owner.account.username}
              <img
                src={item.owner.account.avatar.secure_url}
                alt="Owner avatar"
              />
            </div>
            {item.product_details.map((product) => {
              return <div>{}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
}
