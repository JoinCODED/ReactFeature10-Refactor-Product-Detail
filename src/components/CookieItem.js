import React from "react";
import { Link } from "react-router-dom";

// Components
import DeleteButton from "./buttons/DeleteButton";

// Styling
import { CookieWrapper } from "../styles";
import { Link } from "react-router-dom";

const CookieItem = (props) => {
  const cookie = props.cookie;

  return (
    <CookieWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/cookies/${cookie.slug}`}>
        <img alt={cookie.name} src={cookie.image} />
      </Link>
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KD</p>
      <DeleteButton cookieId={cookie.id} deleteCookie={props.deleteCookie} />
    </CookieWrapper>
  );
};

export default CookieItem;
