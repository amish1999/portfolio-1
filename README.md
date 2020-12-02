# My Portfolio

#### This is a personal portfolio project built with React-Js and hosted with Netlify, check this [walees](https://walees.me) for live demo.

<p align="center">
 
[![Netlify Status](https://api.netlify.com/api/v1/badges/e7ef3b78-2f55-4007-a32b-59f6e613bf72/deploy-status)](https://app.netlify.com/sites/walees/deploys)
![image portfolio](https://i.imgur.com/DU1CwgJ.png "Logo Title Text 1")

</p>

<p>
This Project will be open source and Many people might want to use this code for their own website, and the answer to that question is usually yes, with attribution. you can fork this repo. Please give me proper credit by linking back to <a href="https://walees.me/"> walees.me</a>. Thanks!
</p>

## Note

using LocalStorge hooks we made it possible so that the last theme selected will be the same after closing and reopening the tab

```javascript
import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const item = window.localStorage.getItem(key);
  const [value, setValue] = useState(item || initialValue);

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [value, key]);
  return [value, setValue];
};
```

a useTheme hooks to switch between themes

```javascript
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () =>
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme]);

  return [theme, toggleTheme];
};
```

you can see more in hooks folder I highlighted these two so you can have a basic undrestanting of how it work

## Installation

1. Last versions are used in case :

```
node 15.3
npm 7.0.14
```

2. Install Dependencies

```
npm install
yarn install
```

3. Start Project

```
npm start
yarn start
```

## Color Theme

| Color             | Hex Code                                                           |
| ----------------- | ------------------------------------------------------------------ |
| _Black_           | ![#000000](https://via.placeholder.com/10/000000?text=+) `#000000` |
| _White_           | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) `#ffffff` |
| _Red_             | ![#FF4136](https://via.placeholder.com/10/FF4136?text=+) `#FF4136` |
| _Cornflower Blue_ | ![#a162e8](https://via.placeholder.com/10/a162e8?text=+) `#a162e8` |
