import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function Publish() {
  const [publishment, setPublishment] = useState(false);

  const [pictures, setPictures] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [exchangeInterest, setExchangeInterest] = useState(false);

  const [data, setData] = useState(null);

  const handleSendOffer = async (event) => {
    event.preventDefault();
    setPublishment(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("city", city);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("picture", pictures);

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Autorization: "Bearer" + Cookies.get("TokenCookie"),
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setData(response.data);
      setPublishment(false);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form className="publish_form" onSubmit={handleSendOffer}>
        <input
          type="file"
          onChange={(event) => {
            setPictures(event.target.files[0]);
          }}
        />
        <span>
          Titre
          <input
            type="text"
            placeholder="ex: Sweat Octobre rose"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </span>
        <span>
          Décris ton article
          <input
            type="text"
            placeholder=" ex: Porté quelques fois"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </span>
        <span>
          Marque
          <input
            type="text"
            placeholder="ex: Octobre"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />
        </span>
        <span>
          Taille
          <input
            type="text"
            placeholder="ex: L / 40 / 12"
            onChange={(event) => {
              setSize(event.target.value);
            }}
          />
        </span>
        <span>
          Couleur
          <input
            type="text"
            placeholder="ex: Rose et blanc"
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
        </span>
        <span>
          État
          <input
            type="text"
            placeholder="ex: Neuf avec étiquette"
            onChange={(event) => {
              setCondition(event.target.value);
            }}
          />
        </span>
        <span>
          Lieu
          <input
            type="text"
            placeholder="ex: Paris"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </span>
        <span>
          Prix
          <input
            type="price"
            placeholder="0,00 €"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </span>
        <span>
          <input
            type="checkbox"
            onChange={() => {
              setExchangeInterest(!exchangeInterest);
            }}
          />
          <span>Je suis interessé(e) par les échanges </span>
        </span>

        <input type="submit" />
        <button
          onClick={() => {
            console.log(Cookies.get("TokenCookie"));
          }}
        >
          Console.log
        </button>
      </form>
      {publishment === true ? (
        <div>En cours de publication</div>
      ) : (
        data && <img src={data.secure_url} alt="" />
      )}
    </div>
  );
}
