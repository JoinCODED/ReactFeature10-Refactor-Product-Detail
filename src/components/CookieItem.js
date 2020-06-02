import React from "react";

// Components
import Delete from "./buttons/Delete";

// Styling
import { CookieWrapper } from "../styles";

const CookieItem = ({ cookie, deleteCookie }) => {
  return (
    <CookieWrapper to={`/cookies/${cookie.id}`}>
      <img alt={cookie.name} src={cookie.image} />
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KD</p>
      <Delete cookieId={cookie.id} deleteCookie={deleteCookie} />
    </CookieWrapper>
  );
};

export default CookieItem;
