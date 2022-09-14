import React, { Component } from "react";
import "./home.css"

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
    };
  }
  

  componentDidMount() {
    let url = "https://quote-api-app.herokuapp.com/quote";
    fetch(url)
      .then((response) => {
        
        return response.json();
      })
      .then((data) => {
        const now = new Date();
        const day = now.getDate();
        const randomQuote = data[Math.floor(day)]; 
        console.log(randomQuote)
        this.setState({quotes : [randomQuote]})
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