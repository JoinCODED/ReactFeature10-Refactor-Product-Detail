// Styling
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ deleteCookie, cookieId }) => {
  return (
    <DeleteButtonStyled onClick={() => deleteCookie(cookieId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
