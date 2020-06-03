import React, { useState } from "react";

// Components
import CookieItem from "./CookieItem";
import SearchBar from "./SearchBar";

// Styling
import { ListWrapper } from "../styles";

const CookieList = (props) => {
  const [query, setQuery] = useState("");

  const cookieList = props.cookies
    .filter((cookie) => cookie.name.toLowerCase().includes(query.toLowerCase()))
    .map((cookie) => (
      <CookieItem
        cookie={cookie}
        key={cookie.id}
        deleteCookie={props.deleteCookie}
      />
    ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{cookieList}</ListWrapper>
    </div>
  );
};

export default CookieList;
