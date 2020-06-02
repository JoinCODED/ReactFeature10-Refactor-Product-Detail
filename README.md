# NavBar and UI

## Discussion

**Topics to discuss:**

- Navbars
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

## Step 2: NavBar

1. There are too many elements in our `App`. Let's create a new component called `NavBar.js`:

```javascript
import React from "react";

const NavBar = (props) => {
  return (

  );
};

export default NavBar;
```

2. Import `Link`, `ThemeButton` and you logos, and move your `Home` and `Cookies` links and the dark mode button:

```javascript
import React from "react";
import { Link } from "react-router-dom";

// Styling
import { ThemeButton } from "../styles";
import lightLogo from "../light-logo.png";
import darkLogo from "../dark-logo.png";

const NavBar = (props) => {
  return (
    <div>
      <Link to="/">
        <img
          src={currentTheme === "light" ? lightLogo : darkLogo}
          alt="logo"
          width="50"
        />
      </Link>
      <Link to="/cookies" style={{ margin: 10 }}>
        Cookies
      </Link>
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
    </div>
  );
};

export default NavBar;
```

4. `ThemeButton` and our logo need `toggleTheme` and `currentTheme`, so we will pass them as props from `App`:

```jsx
<NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
```

5. Let's pass `props` to `ThemeButton`:

```jsx
<ThemeButton onClick={props.toggleTheme}>
  {props.currentTheme === "light" ? "Dark" : "Light"} Mode
</ThemeButton>
```

6. Let's pass `props` to `img`:

```jsx
<Link to="/">
  <img
    src={currentTheme === "light" ? lightLogo : darkLogo}
    alt="logo"
    width="50"
  />
</Link>
```

7. Let's turn the parent `div` into a styled component and add a `margin`. In `styles`:

```javascript
const Nav = styled.div`
  margin: 1.25em;
`;
```

8. Import it and wrap your JSX in `NavBar` with it:

```jsx
<Nav>
  <Link to="/" style={{ padding: 10, textDecoration: "none" }}>
    <img src={logo} width="50" />
  </Link>
  <Link to="/cookies" style={{ padding: 10, textDecoration: "none" }}>
    Cookies
  </Link>
  <ThemeButton onClick={props.toggleTheme}>
    {props.currentTheme === "light" ? "Dark" : "Light"} Mode
  </ThemeButton>
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

10. Let's move the cookies and dark mode to the right side, I'll wrap them with a `div` tag first:

```jsx
<div>
  <Link to="/cookies" style={{ padding: 10 }}>
    Cookies
  </Link>
  <ThemeButton onClick={props.toggleTheme}>
    {props.currentTheme === "light" ? "Dark" : "Light"} Mode
  </ThemeButton>
</div>
```

11. Then we'll style `div` to be on the right side within `Nav`:

```javascript
const Nav = styled.div`
  margin: 1.25em;

  div {
    float: right;
  }
`;
```

12. Now, let's style our image `Link`. But `Link` is a component, styling it is a bit different. In `styles`, we will import `Link`:

```javascript
import { Link } from "react-router-dom";
```

13. Let's style our logo. To turn a component to a styled component we will wrap it in parentheses:

```javascript
export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;
```

## Step 3: NavLink

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
  text-decoration: none;
  color: ${(props) => props.theme.mainColor};
`;
```

5. Now we add a class called `active`, which is the style we want to implement:

```javascript
export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  text-decoration: none;
  color: ${(props) => props.theme.mainColor};

  &.active {
    color: ${(props) => props.theme.pink};
    background-color: fuchsia;
  }
`;
```

6. Now whenever, we go to `/cookies` you'll see that the `cookies` button is glowing with the `fuchsia`. Let's remove the fuchsia background color, it's killing me.

## Step 4 - Cookie Item

1. Let's cleanup `CookieItem` a bit. Since `Link` has no styling, why not just turn `CookieWrapper` to a `Link` instead of a `div` in `styles`?

```javascript
export const CookieWrapper = styled(Link)``;
```

2. Let's remove the ugly lines and give the cookie name the main color:

```javascript
export const CookieWrapper = styled(Link)`
  margin: 20px;
  color: ${(props) => props.theme.mainColor};
  text-decoration: none;

```

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

## Step 6 - Props Props Props

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
