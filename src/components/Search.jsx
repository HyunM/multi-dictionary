import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.css";
import { render } from "@testing-library/react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleKeywordSubmit = this.handleKeywordSubmit.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
  }

  handleKeywordSubmit() {
    this.props.onHandleKeywordSubmit(this.state.value);
  }
  handleKeywordChange(e) {
    this.setState({ value: e.target.value });
  }
 
  
  render() {
    return (
      <div>
        <InputGroup className="mb-3 inputGroup">
          <FormControl
            placeholder="Type Keyword"
            aria-label="Type Keyword"
            aria-describedby="basic-addon2"
            onChange={this.handleKeywordChange}
            onKeyPress={event => {
              if (event.key === "Enter") {
                this.handleKeywordSubmit();
              }
            }}
            id="focusID"
          />
          <InputGroup.Append
            className="inputToBtn"
            onClick={this.handleKeywordSubmit}
          >
            <InputGroup.Text id="basic-addon2">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-search"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

export default Search;
