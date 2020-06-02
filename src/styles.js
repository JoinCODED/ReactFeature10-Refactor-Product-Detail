import styled, { createGlobalStyle } from "styled-components";

export const CookieWrapper = styled.div`
  margin: 20px;
  color: ${(props) => props.theme.mainColor};
  text-decoration: none;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.cookie-price {
      color: ${(props) => props.theme.pink};
    }

    &.cookie-delete {
      color: ${(props) => props.theme.red};
    }
  }
`;

export const DeleteButton = styled.p`
  color: ${(props) => props.theme.red};
`;

export const Description = styled.h4`
  text-align: center;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Search = styled.input`
  padding: 0.5rem;
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
`;

export const ThemeButton = styled.button`
  margin: 1.25em;
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
