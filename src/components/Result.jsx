import React from "react";
import Iframe from "react-iframe";
import "./Result.css";

class Result extends React.Component {
  componentDidMount(){
    setTimeout(function() {document.getElementById("focusID").focus()},1000);
    setTimeout(function() {document.getElementById("focusID").focus()},2000);
    setTimeout(function() {document.getElementById("focusID").focus()},3000);
    setTimeout(function() {document.getElementById("focusID").focus()},4000);
    setTimeout(function() {document.getElementById("focusID").focus()},5000);
    setTimeout(function() {document.getElementById("focusID").focus()},6000);
    setTimeout(function() {document.getElementById("focusID").focus()},7000);
    setTimeout(function() {document.getElementById("focusID").focus()},8000);
    setTimeout(function() {document.getElementById("focusID").focus()},9000);
    setTimeout(function() {document.getElementById("focusID").focus()},10000);
    setTimeout(function() {document.getElementById("focusID").focus()},11000);
    setTimeout(function() {document.getElementById("focusID").focus()},12000);
    setTimeout(function() {document.getElementById("focusID").focus()},13000);
    setTimeout(function() {document.getElementById("focusID").focus()},14000);
    setTimeout(function() {document.getElementById("focusID").focus()},15000);
    setTimeout(function() {document.getElementById("focusID").focus()},16000);
    setTimeout(function() {document.getElementById("focusID").focus()},17000);
    setTimeout(function() {document.getElementById("focusID").focus()},18000);
    setTimeout(function() {document.getElementById("focusID").focus()},19000);
    setTimeout(function() {document.getElementById("focusID").focus()},20000);
    setTimeout(function() {document.getElementById("focusID").focus()},21000);
    setTimeout(function() {document.getElementById("focusID").focus()},22000);
    setTimeout(function() {document.getElementById("focusID").focus()},23000);
    setTimeout(function() {document.getElementById("focusID").focus()},24000);
    setTimeout(function() {document.getElementById("focusID").focus()},25000);
    setTimeout(function() {document.getElementById("focusID").focus()},26000);
    setTimeout(function() {document.getElementById("focusID").focus()},27000);
    setTimeout(function() {document.getElementById("focusID").focus()},28000);
    setTimeout(function() {document.getElementById("focusID").focus()},29000);
    setTimeout(function() {document.getElementById("focusID").focus()},30000);

  }

  componentDidUpdate(){
    setTimeout(function() {document.getElementById("focusID").focus()},1000);
    setTimeout(function() {document.getElementById("focusID").focus()},2000);
    setTimeout(function() {document.getElementById("focusID").focus()},3000);
    setTimeout(function() {document.getElementById("focusID").focus()},4000);
    setTimeout(function() {document.getElementById("focusID").focus()},5000);
    setTimeout(function() {document.getElementById("focusID").focus()},6000);
    setTimeout(function() {document.getElementById("focusID").focus()},7000);
    setTimeout(function() {document.getElementById("focusID").focus()},8000);
    setTimeout(function() {document.getElementById("focusID").focus()},9000);
    setTimeout(function() {document.getElementById("focusID").focus()},10000);
    setTimeout(function() {document.getElementById("focusID").focus()},11000);
    setTimeout(function() {document.getElementById("focusID").focus()},12000);
    setTimeout(function() {document.getElementById("focusID").focus()},13000);
    setTimeout(function() {document.getElementById("focusID").focus()},14000);
    setTimeout(function() {document.getElementById("focusID").focus()},15000);
    setTimeout(function() {document.getElementById("focusID").focus()},16000);
    setTimeout(function() {document.getElementById("focusID").focus()},17000);
    setTimeout(function() {document.getElementById("focusID").focus()},18000);
    setTimeout(function() {document.getElementById("focusID").focus()},19000);
    setTimeout(function() {document.getElementById("focusID").focus()},20000);
    setTimeout(function() {document.getElementById("focusID").focus()},21000);
    setTimeout(function() {document.getElementById("focusID").focus()},22000);
    setTimeout(function() {document.getElementById("focusID").focus()},23000);
    setTimeout(function() {document.getElementById("focusID").focus()},24000);
    setTimeout(function() {document.getElementById("focusID").focus()},25000);
    setTimeout(function() {document.getElementById("focusID").focus()},26000);
    setTimeout(function() {document.getElementById("focusID").focus()},27000);
    setTimeout(function() {document.getElementById("focusID").focus()},28000);
    setTimeout(function() {document.getElementById("focusID").focus()},29000);
    setTimeout(function() {document.getElementById("focusID").focus()},30000);
  }
  render() {
    return (
      <div>
        <Iframe
          url={"https://www.merriam-webster.com/dictionary/" + this.props.keyword}
          width="25%"
          height="450px"
          className="myClassname forDictionary"
          display="initial"
          position="relative"
        />
        <Iframe
          url={"https://www.thesaurus.com/browse/" + this.props.keyword + "?s=t"}
          width="25%"
          height="450px"
          className="myClassname forDictionary"
          display="initial"
          position="relative"
        />
        <Iframe
          url={"https://www.urbandictionary.com/define.php?term=" + this.props.keyword}
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
