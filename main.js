import React from "react";
import ReactDOM from "react-dom/client";


const header1 = React.createElement("h1", {}, "Header 1");
const header2 = React.createElement("h1", {}, "Header 2");
const header3 = React.createElement("h1", {}, "Header 3");
const link = React.createElement("a", { href: "https://www.bubu.com" }, "Header 3");

const container = React.createElement("div", { className: "container" }, [header1, header2, header3, link])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
