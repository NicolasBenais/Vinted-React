import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";

import SearchBar from "./SearchBar";
import CustomRange from "./Range";
import Button from "./Button";

export default function Header({
  isTokenPresent,
  setIsTokenPresent,
  setSearchBarFilter,
  checkboxOn,
  setCheckboxOn,
  priceRange,
  setPriceRange,
}) {
  const { pathname } = useLocation();
  const [tmpPriceRange, setTmpPriceRange] = useState(priceRange);

  return (
    <header className="home_header">
      <Link to={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="105"
          height="60"
          viewBox="0 0 83 48"
        >
          <path
            fill="#09B1BA"
            fillRule="evenodd"
            d="M19.248 8.68c-.176 0-.627.271-1.731 1.17-.424.149-.75.016-1.257.71C13.12 14.87 10.886 28.5 8.23 33.293c-.52-.19-.466-10.576-.762-17.77.014-.949.177-1.37.118-3.114-.05-1.478-.284-2.472-1.824-2.883-2.326-.62-5.699.478-5.745 2.809-.125 7.499.46 15.61 2.038 23.502.415 2.071 2.394 2.412 4.504 2.31 6.739-1.097 7.776-9.223 9.67-16.065.731-2.647 2.496-10.696 3.32-13.012.046-.13-.062-.423-.3-.39m39.39 6.527c-.865-1.211-2.773-1.336-4.277-1.358.128-1.24.261-2.537.385-3.846.023-.244.244-.958-.131-1.574.367-.91-.084-1.112-.536-1.265-1.135-.382-3.11-.43-3.605.981-.545 1.643-.952 3.809-1.153 5.514-1.023.07-3.03.175-3.035.627-.022 1.63 1.582 2.215 2.709 2.236-.307 2.748-.724 6.579-1.078 10.042-2.777 3.757-5.636 7.099-5.897 6.555-.476-.964 1.123-6.704-.02-9.046-.618-1.24-3.472-1.607-4.612-1.148-2.189.872-3.873 4.317-4.589 5.419.296-1.47.887-4.455 1.094-5.74.167-.919-1.089-1.837-1.947-1.057-1.004.368-2.25 0-2.548 1.378a69.622 69.622 0 0 0-.79 4.777c-1.872 2.748-4.947 6.982-5.839 6.232-.956-.817 1.06-8.224 1.182-9.57.567-1.107-.754-2.454-2.149-2.454-.577 0-.971-.192-1.437.097-1.54.913-2.756 6.156-2.612 8.897.194 3.703 2.447 4.473 3.378 4.81 2.71.985 5.058-1.053 7.043-3.684-.042.716-.085 1.382-.052 1.962.046.795.88.459 1.852.872 1.025.91 1.766.439 2.282-.78 1.392-3.287 2.606-5.924 5.127-8.817.94.329-1.144 8.082.26 9.643 2.878 3.135 7.252-1.093 9.89-4.455-.117 1.26-.235 3.434-.057 4.668.057.394.1.666.463.916.474.224 1.263.42 1.529.574.54.225.516.37 1.295.318.277-.019.664-.305.76-.952 1.034-7.011 2.55-19.374 2.55-19.374.485-.036 2.875-.367 3.522-.37.134-.113 1.15-.879 1.044-1.028m17.08 8.73c-5.036 1.556-6.159 10.961-4.838 10.14 2.106-1.307 3.809-4.509 4.83-10.08l.007-.06M58.736 27.91c3.836-.376 4.443-3.14 4.43-4.618-1.877-.196-3.755 2.213-4.43 4.618M82.62 10.82c-2.535 14.034-3.68 24.956-3.515 26.939-.01.266.026.754-.373.771-.5-.01-2.28.456-3.249.443-.635-.009-1.113-2.192-.846-5.424-1.497 1.78-3.203 2.918-4.525 2.781-1.774-.183-2.526-2.38-2.627-4.531-3.312 3.831-8.08 4.99-10.201 3.55-1.713-1.161-2.308-3.108-2.34-4.968-.065-3.677 3.646-9.007 7.886-9.036l.032.001.065.004c1.239.099 2.417 2.246 2.52 3.62.202 2.705-2.223 6.066-6.97 4.83.045 1.582.87 2.803 2.916 2.713 2.505-.11 4.316-1.936 6.463-4.582a.465.465 0 0 0 .003-.015c1.154-4.126 4.22-7.61 8.426-8.024.432-2.954.773-5.691 1.73-9.677.116-.615 1.051-1.008 1.543-.858.972-.801 3.036-1.27 3.173.236.032.35-.072.981-.11 1.228m-61.304 6.184c-.048-1.122 2.436-1.87 3.242-1.87 1.244 0 1.466.993 1.516 2.16.044 1.04-1.057 1.954-2.195 1.954-1.888 0-2.562-2.203-2.563-2.244"
          />
        </svg>
      </Link>
      <div className="search_container">
        <SearchBar setSearchBarFilter={setSearchBarFilter} />
        {pathname === "/" && (
          <div className="sort_container">
            <span className="sort_text">Trier par prix : </span>

            <span className="checkbox_price_sort">
              <input
                id="sort-price"
                type="checkbox"
                checked={checkboxOn}
                onChange={() => {
                  setCheckboxOn(!checkboxOn);
                }}
              />
              <label className="wrapper" htmlFor="sort-price">
                <div className="knob">
                  {checkboxOn ? <span>⇣</span> : <span>⇡</span>}
                </div>
              </label>
            </span>

            <span className="sort_text">Prix entre : </span>
            <CustomRange
              values={tmpPriceRange}
              onChange={setTmpPriceRange}
              onFinalChange={setPriceRange}
            />
          </div>
        )}
      </div>
      <div>
        {isTokenPresent ? (
          <div>
            <Button
              className={"log-out_btn"}
              value={"Se déconnecter"}
              onClick={() => {
                Cookies.remove("TokenCookie");
                setIsTokenPresent(false);
              }}
            />
          </div>
        ) : (
          <div>
            <Link to={"/signup"}>
              <Button className={"sign_in_btn"} value={"S'inscrire"} />
            </Link>
            <Link to={"/login"}>
              <Button className={"log_in_btn"} value={"Se connecter"} />
            </Link>
          </div>
        )}
      </div>
      <Link to={isTokenPresent ? "/publish" : "/signup"}>
        <Button className={"sold_btn"} value={"Vends tes articles"} />
      </Link>
    </header>
  );
}
