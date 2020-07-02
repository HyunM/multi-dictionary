import React from "react";
import Search from "./Search";
import Result from "./Result";

class DictionaryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "explicit",
    };

    this.handleKeywordSubmit = this.handleKeywordSubmit.bind(this);
  }

  handleKeywordSubmit(keyword) {
    this.setState({
      keyword: keyword,
    });
  }

  render() {
    return (
      <div>
        <Search
          keyword={this.state.keyword}
          onHandleKeywordSubmit={this.handleKeywordSubmit}
        />
        <Result keyword={this.state.keyword} />
      </div>
    );
  }
}

export default DictionaryContainer;
