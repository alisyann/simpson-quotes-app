import React, { Component } from "react";
import "./SimpsonQuotes.css";

function SimpsonQuotes({quotes}) {
    return (
      <div>
        <h3>{quotes.character}</h3>
        <img src={quotes.image}/>
        <p>{quotes.quote}</p>
      </div>
    );
}

export default SimpsonQuotes;
