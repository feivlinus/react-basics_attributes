import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldThing();
}

function HelloWorldThing() {
  return (
    <article className="article">
      <h2 className="article__title">Hello World Thing</h2>
      <label htmlFor="inputField">This is some Input righ here:</label>
      <input id="inputField"></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"
      >
        Hello World
      </a>
    </article>
  );
}
