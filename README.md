# React Color Picker
This project was completed as a challenge posed in a [youtube video](https://www.youtube.com/watch?v=RVFAyFWO4go&list=WL&index=162). 

## Getting Started
Test this project out yourself by running the following commands in your terminal:
```
# Clone the project: [github cli tool](https://cli.github.com/)
gh repo clone phamousq/odin-project

# install packages with your package manager of choice: [antfu/ni -> pnpm](https://github.com/antfu/ni)
ni # select pnpm

# run the project in the dev server!
nr dev

```
All you have to do is type a color that appears as part of the HTML color pallate and it will change the color of the square in the middle of the page to that color.

## Dev log
Some highlights of this project...

**two way binding** is when actively typing in an input box logs the information typed into another component of the website. 
```
// src/components/ColorInput.jsx
onChange={(e) => setColor(e.target.value)}
```

**CSS Centering with flex**
```
/* src/App.css */
/* height: 100vh; this is for centering divs*/
display: flex;
justify-content: center;
align-items: center;
```

## Technologies used:
- [vite -> react](https://vitejs.dev/guide/)
- [antfu/ni -> pnpm](https://github.com/antfu/ni)