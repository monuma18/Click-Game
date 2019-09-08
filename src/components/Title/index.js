import React from "react";
import "./style.css";

function Title(props) {
  return (
  <div>
  <h1 className="title">
   
   {props.children}</h1>
   
   score: {props.score} best score: {props.bestScore}
  </div>

  )

 
}

export default Title;
