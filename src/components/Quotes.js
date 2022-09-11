import React, { Component } from "react";
import "./quotes.css"

export class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    
    let url = "https://quote-api-app.herokuapp.com/quote";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ quotes: data });
      });
  }

  handleChange () {
    let input = document.getElementById("myInput").value
    let url = `https://quote-api-app.herokuapp.com/quote/search?author=${input}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({quotes : data})
      });
  }

  render() {
    return (
      <>
        <form className="d-flex" style={{ margin: "30px", height: "50px" ,width:"96%" }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="myInput"
            onChange={this.handleChange}
          />
          <button className="btn btn-outline-success" type="reset" style={{width:"80px"}}>
            Reset
          </button>
        </form>
        <div className="Quotes" id="Quotes">
          {this.state.quotes.map((x) => {
            return (
              <div id="Quote-box" className="Quote-box">
                <p>{x.quote}</p>
                <div className="Subox">
                  <p className="Author-name">-{x.author}</p>
                  <p className="likes">{x.likes}</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Quotes;