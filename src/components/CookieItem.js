import React from "react";
import { Link } from "react-router-dom";

// Styling
import { CookieWrapper, DeleteButton } from "../styles";

const CookieItem = (props) => {
  const cookie = props.cookie;

  return (
    <Link to={`/cookies/${cookie.id}`}>
      <CookieWrapper>
        <img alt={cookie.name} src={cookie.image} />
        <p>{cookie.name}</p>
        <p className="cookie-price">{cookie.price} KD</p>
        <DeleteButton onClick={(event) => props.deleteCookie(event, cookie.id)}>
          Delete
        </DeleteButton>
      </CookieWrapper>
    </Link>
  );
};

export default CookieItem;
