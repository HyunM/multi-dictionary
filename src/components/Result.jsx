import React from "react";
import Iframe from "react-iframe";
import "./Result.css";

function Result(props) {
  return (
    <div>
      <Iframe
        url={"https://www.merriam-webster.com/dictionary/" + props.keyword}
        width="25%"
        height="450px"
        className="myClassname forDictionary"
        display="initial"
        position="relative"
      />
      <Iframe
        url={"https://www.dictionary.com/browse/" + props.keyword + "?s=t"}
        width="25%"
        height="450px"
        className="myClassname forDictionary"
        display="initial"
        position="relative"
      />
      <Iframe
        url={"https://www.urbandictionary.com/define.php?term=" + props.keyword}
        width="25%"
        height="450px"
        className="myClassname forDictionary"
        display="initial"
        position="relative"
      />
      <Iframe
        url={"https://en.dict.naver.com/#/search?query=" + props.keyword}
        width="25%"
        height="450px"
        className="myClassname forDictionary"
        display="initial"
        position="relative"
      />
    </div>
  );
}

export default Result;
