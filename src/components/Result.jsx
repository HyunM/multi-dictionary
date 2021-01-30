import React from "react";
import Iframe from "react-iframe";
import "./Result.css";

class Result extends React.Component {
  componentDidMount() {}

  componentDidUpdate() {}
  render() {
    return (
      <div>
        <Iframe
          url={
            "https://www.merriam-webster.com/dictionary/" + this.props.keyword
          }
          width="25%"
          height="450px"
          className="myClassname forDictionary"
          display="initial"
          position="relative"
        />
        <Iframe
          url={
            "https://www.thesaurus.com/browse/" + this.props.keyword + "?s=t"
          }
          width="25%"
          height="450px"
          className="myClassname forDictionary"
          display="initial"
          position="relative"
        />
        <Iframe
          url={
            "https://www.urbandictionary.com/define.php?term=" +
            this.props.keyword
          }
          width="25%"
          height="450px"
          className="myClassname forDictionary"
          display="initial"
          position="relative"
        />
        <Iframe
          url={"https://en.dict.naver.com/#/search?query=" + this.props.keyword}
          width="25%"
          height="450px"
          className="myClassname forDictionary"
          display="initial"
          position="relative"
        />
      </div>
    );
  }
}

export default Result;
