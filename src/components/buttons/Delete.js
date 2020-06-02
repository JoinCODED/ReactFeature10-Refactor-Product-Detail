import React from "react";

// Styling
import { DeleteButton } from "../../styles";

const Delete = (props) => {
  return (
    <DeleteButton
      onClick={(event) => props.deleteCookie(event, props.cookieId)}
    >
      Delete
    </DeleteButton>
  );
};

export default Delete;
