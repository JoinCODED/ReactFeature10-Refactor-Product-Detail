# NavBar and UI

## Discussion

**Topics to discuss:**

- Bootstrap
- Navbar
- Link vs NavLink

## Step 1: Logo

1. Let's start with adding a logo to our website. Add your logo image to the `src` folder. Then import in in `App`:

```javascript
import logo from "./logo.png";
```

2. Add an `img` tag and wrap it with a `Link` component, and give it the path `/`.

```jsx
<Link to="/">
  <img src={logo} width="50" />
</Link>
<Link to="/cookies" style={{ margin: 10 }}>
  Cookies
</Link>
```

3. But wait. When we use the dark mode, my logo doesn't show anymore! That's why I created two versions of my logo, for both modes. Let's rename the main logo and import the dark mode image:

```javascript
import lightLogo from "./light-logo.png";
import darkLogo from "./dark-logo.png";
```

4. Let's add a condition to our `src`:

```jsx
<img
  src={currentTheme === "light" ? lightLogo : darkLogo}
  alt="logo"
  width="50"
/>
```

5. Wow! This is coool!

6. Now, let's style our image `Link`. But `Link` is a component, styling it is a bit different. In `styles`, we will import `Link`:

```javascript
import { Link } from "react-router-dom";
```

7. Let's style our logo. To turn a component to a styled component we will wrap it in parentheses:

```javascript
export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;
```

8. Now import `Logo` in `App` and replace `Link` with it:

```jsx
<Logo to="/">
  <img src={currentTheme === "light" ? lightLogo : darkLogo} alt="logo" />
</Logo>
```

## Step 2: Setup Bootstrap

1. Let's install Bootstrap to make designing a bit easier:

```shell
  $ yarn add bootstrap
```

2. In `index.js`, import Bootstrap's CSS:

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

3. Add a Bootstrap button in any component to make sure it's working.

## Step 3: NavBar

1. There are too many elements in our `App`. Let's create a new component called `NavBar.js`:

```javascript
import React from "react";

const NavBar = (props) => {
  return (

  );
};

export default NavBar;
```

2. Import `Link`, `ThemeButton` and your logos:

```javascript
import React from "react";

import { Link } from "react-router-dom";

// Styling
import { ThemeButton } from "../styles";
import lightLogo from "../light-logo.png";
import darkLogo from "../dark-logo.png";
```

3. Let's take a look at [Bootstrap's NavBar](https://getbootstrap.com/docs/4.5/components/navbar/?#toggler), copy it into your `NavBar` component:

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#"
        >Home <span class="sr-only">(current)</span></a
      >
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a
        class="nav-item nav-link disabled"
        href="#"
        tabindex="-1"
        aria-disabled="true"
        >Disabled</a
      >
    </div>
  </div>
</nav>
```

4. Remove `Pricing` and `Disabled`. Also remove the `button` tag under `NavBar` and the `form` tag. Add `ml-auto` to the `div`'s `className` that's wrapping your nav items. Also remove the `span` beside `Home`.

```jsx
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
    Navbar
  </a>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">
        Home
      </a>
      <a class="nav-item nav-link" href="#">
        Features
      </a>
    </div>
  </div>
</nav>
```

5. Convert it to JSX by changing `class` to `className`:

```jsx
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    Navbar
  </a>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      <a className="nav-item nav-link active" href="#">
        Home <span className="sr-only">(current)</span>
      </a>
      <a className="nav-item nav-link" href="#">
        Features
      </a>
    </div>
  </div>
</nav>
```

6. Replace `Home`'s `a` tag with `Logo`. But add the `className` `navbar-brand` from the `a` tag to `Logo`:

```jsx
<Logo className="navbar-brand" to="/">
  <img src={props.currentTheme === "light" ? lightLogo : darkLogo} alt="logo" />
</Logo>
```

7. Now replace `Home` and `Features` with the link to `Cookies` and theme button, and pass it its `className`, but remove `nav-link` and `active`:

```jsx
<Link className="nav-item" to="/cookies">
  Cookies
</Link>
<ThemeButton className="nav-item" onClick={toggleTheme}>
  {currentTheme === "light" ? "Dark" : "Light"} Mode
</ThemeButton>
```

8. `ThemeButton` and our logo need `toggleTheme` and `currentTheme`, so we will pass them as props from `App`:

```jsx
<NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
```

9. Let's pass `props` to `ThemeButton`:

```jsx
<ThemeButton className="nav-item" onClick={toggleTheme}>
  {currentTheme === "light" ? "Dark" : "Light"} Mode
</ThemeButton>
```

6. Let's pass `props` to `img`:

```jsx
<Link to="/">
  <img
    src={props.currentTheme === "light" ? lightLogo : darkLogo}
    alt="logo"
    width="50"
  />
</Link>
```

7. Let's turn the parent `nav` into a styled component to change the background color. In `styles`:

```javascript
const Nav = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;
```

8. Import it and wrap your JSX in `NavBar` with it. Remove `navbar-light bg-light`:

```jsx
<Nav className="navbar navbar-expand-lg">
  <Logo className="navbar-brand" to="/">
    <img
      src={props.currentTheme === "light" ? lightLogo : darkLogo}
      alt="logo"
    />
  </Logo>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      <Link className="nav-item" to="/cookies">
        Cookies
      </Link>
      <ThemeButton className="nav-item" onClick={props.toggleTheme}>
        {props.currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
    </div>
  </div>
</Nav>
```

9. Remove the `margin` from `ThemeButton` to have everything on one line:

```javascript
const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;
```

## Step 4: NavLink

1. Now, when the user clicks on `Cookies`, we need some indication that `Cookies` is active. To do that, we will replace `Link` with `NavLink`. Let's import it:

```javascript
import { Link, NavLink } from "react-router-dom";
```

2. In `NavBar`, replace `Link` with `NavLink`.

```jsx
<NavLink to="/cookies" style={{ padding: 10 }}>
  Cookies
</NavLink>
```

3. The only difference between them is that we can give `NavLink` a style when it's active. Let's move the styling to `styles`. Import `NavLink` in `styles`:

```javascript
import { Link, NavLink } from "react-router-dom";
```

4. We'll create a styled component called `NavItem`. As you can see, the links' styling is ruined, so we will give it a `color` and remove the `text-decoration`:

```javascript
export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${(props) => props.theme.mainColor};
`;
```

5. Now we add a class called `active`, which is the style we want to implement:

```javascript
export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${(props) => props.theme.mainColor};

  &.active {
    color: ${(props) => props.theme.pink};
    background-color: fuchsia;
  }
`;
```

6. Now whenever, we go to `/cookies` you'll see that the `cookies` button is glowing with the `fuchsia`. Let's remove the fuchsia background color, it's killing me.

## Step 5 - Delete Button

Something that's been bothering me is the delete button in `CookieDetail` and `CookieItem`. It's repeated! So why not put it in its own component?

1. Create a new folder called `buttons` in `components`. In `Buttons`, create a file called `Delete.js`:

```javascript
import React from "react";

const Delete = () => {
  return <div></div>;
};

export default Delete;
```

2. Copy the delete button from `CookieDetail` or `CookieItem`. Don't forget to import `DeleteButton` styled component and fix the path

```javascript
import React from "react";
import { DeleteButton } from "../../styles";

const Delete = (props) => {
  return (
    <DeleteButton onClick={(event) => props.deleteCookie(event, cookie.id)}>
      Delete
    </DeleteButton>
  );
};

export default Delete;
```

3. Import `Delete` in `CookieDetail`:

```javascript
import Delete from "./buttons/Delete";
```

4. Replace `DeleteButton` with `Delete`:

```jsx
  <p>{cookie.price} KD</p>
  <Delete cookieId={cookie.id} deleteCookie={props.deleteCookie} />
</DetailWrapper>
```

5. As you can see, we got an error that `cookie` is undefined. So we need to pass `cookie`, but since we only need the ID let's just pass `cookie.id`:

```jsx
<Delete cookieId={cookie.id} />
```

6. Let's try deleting a cookie from its detail page, we got the following error: `props.deleteCookie is not a function`.

7. We need to pass `deleteCookie` as a prop:

```jsx
<Delete cookieId={cookie.id} deleteCookie={props.deleteCookie} />
```

8. It's working! Let's cleanup `CookieItem` as well. Import `Delete`:

```javascript
import Delete from "./buttons/Delete";
```

9. Replace `DeleteButton` with `Delete`:

```jsx
<Delete cookieId={cookie.id} deleteCookie={props.deleteCookie} />
```

10. Let's try it put. It's working!

## Step 6 - Responsive Design

One of the strongest weapons of Bootstrap is the responsive design and grid system. Let's fix our list of cookies to be responsive:

1. Wrap you `CookieList` with a `container`, and give your `ListWrapper` the class `row`:

```jsx
<div className="container">
  <SearchBar setQuery={setQuery} />
  <ListWrapper className="row">{cookieList}</ListWrapper>
</div>
```

2. In `CookieItem`, give `CookieWrapper` the following classes `col-lg-4 col-md-6 col-sm-6`:

```jsx
<CookieWrapper className="col-lg-4 col-md-6 col-sm-6">
  <Link to={`/cookies/${cookie.id}`}>
    <img alt={cookie.name} src={cookie.image} />
    <p className="cookie-name">{cookie.name}</p>
    <p className="cookie-price">{cookie.price} KD</p>
    <Delete cookieId={cookie.id} deleteCookie={deleteCookie} />
  </Link>
</CookieWrapper>
```

## Step 7 - Props Props Props

The word `props` repeated everywhere is getting on my nerves. Let's clean up our code a bit

1. Let's start with `CookieItem`. We saved `props.cookie` in a variable called `cookie` to make accessing it easier:

```javascript
const cookie = props.cookie;
```

2. Using some JavaScript magic, we can clean this up by saying:

```javascript
// const cookie = props.cookie;
const { cookie } = props;
```

3. This basically means that we're looking for a property called `cookie` inside `props` and save it in a new variable with the same name `cookie`. In JAvaScript, this is called de-structuring.

4. An even cleaner way to de-structure `props` is when we pass it to `CookieItem`:

```javascript
const CookieItem = ({ cookie }) => {};
```

5. Let's run the code. We got an error: `'props' is not defined`. Oops, we forgot that we're accessing `deleteCookie` from `props`.

6. So let's de-structure `props` properly!

```javascript
const CookieItem = ({ cookie, deleteCookie }) => {};
```

7. Don't forget to remove the word `props`:

```jsx
<Delete cookieId={cookie.id} deleteCookie={deleteCookie} />
```

8. What do you think? Much cleaner right?
