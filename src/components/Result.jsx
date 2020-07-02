import React from "react";
import Iframe from "react-iframe";
import "./Result.css";

function Result(props) {
  debugger;
  return (
    <div>
      <Iframe
        url={"https://www.merriam-webster.com/dictionary/" + props.keyword}
        width="450px"
        height="450px"
        className="myClassname forDictionary"
        display="initial"
        position="relative"
      />
      <Iframe
        url={"https://www.wordreference.com/enko/" + props.keyword}
        width="450px"
        height="450px"
        className="myClassname forDictionary"
        display="initial"
        position="relative"
      />
    </div>
  );
}

export default Result;
