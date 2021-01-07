import { Route, Switch } from "react-router";

// Styling
import { GlobalStyle } from "./styles";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// Components
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
// Data
import products from "./products";
import { useState } from "react";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [_products, setCookies] = useState(products);

  const deleteCookie = (cookieId) => {
    const updatedCookies = _products.filter(
      (cookie) => cookie.id !== +cookieId
    );
    setCookies(updatedCookies);
  };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <ProductList products={_products} deleteCookie={deleteCookie} />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
