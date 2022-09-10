import React, { Component } from "react";
import "./quotes.css"

export class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
    };
  }

  componentDidMount() {
    let aut = sessionStorage.getItem("authName");
    console.log(aut)
    if (aut != null) {
      document.getElementById("myInput").value = aut;
      sessionStorage.removeItem("authName");
    }
    let url = "https://quote-api-app.herokuapp.com/quote";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ quotes: data });
      });
  }

  handleChange(event) {
    let author = event.target.value.toUpperCase();
    let Quotes = document.getElementById("Quotes");
    let Quote_box = Quotes.getElementsByTagName("div");
    for (var i = 0; i < Quote_box.length; i++) {
      let p = Quote_box[i].getElementsByTagName("p")[2];
      if (p) {
        let textValue = p.textContent || p.innerHTML;
        if (textValue.toUpperCase().indexOf(author) > -1) {
          Quote_box[i].style.display = "";
        } else {
          Quote_box[i].style.display = "none";
        }
      }
    }
  }

  render() {
    return (
      <>
        <form className="d-flex" style={{ margin: "30px" }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="myInput"
            onChange={this.handleChange}
          />
          <button className="btn btn-outline-success" type="reset">
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