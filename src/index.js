// JavaScript file
// All of the code will be written here

// TO USE THE REACT AND REACT-DOM PACKAGES
// Requiring the react and react dom modules (via sandbox - it's different when using node.js)
// Begin by creating a variable for React set equal to require("react")
// require("react"): calls the react dependency
// repeat for the react dom dependency
// var React = require("react"); // mandatory, however  the NEW way to do this is by using "import"
// var ReactDOM = require("react-dom");

// Using "import"
import React from "react";
import ReactDOM from "react-dom";

// to create something on screen, we use the render function
// the render function takes 3 inputs...
// 1 - what to show
// 2 - where to show it
//     which we'll target inside the index.html file, which will be the id of "root" div
// 3 - calback to tell when that render function has completed (but we won't use it)
// ex: .render(WHAT TO SHOW, WHERE TO SHOW IT);
ReactDOM.render(<h1>Hello Goons!</h1>, document.getElementById("root"));
// ^ We've used the ReactDOM module's ***render method*** in order to display ta h1 inside the root div
