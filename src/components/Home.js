import React, { Component } from "react";
import "./home.css";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
    };
  }

  componentDidMount() {
    const getRandomQuote = (data, day) => {
      if (sessionStorage.getItem("date") != null) {
        console.log(day);
        const randomQuote = data[Math.floor(Math.random() * 84)];
        console.log(randomQuote);
        sessionStorage.setItem("quote", randomQuote);
        sessionStorage.setItem("date", day);
        return randomQuote;
      }
      console.log(sessionStorage.getItem("quote"));
      const randomQuote = sessionStorage.getItem("quote");
      return randomQuote;
    };
    let url = "https://quote-api-app.herokuapp.com/quote";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const now = new Date();
        const day = now.getDate();
        this.setState({ quotes: [getRandomQuote(data, day)] });
      });
  }

  render() {
    return (
      <>
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

export default Home;
