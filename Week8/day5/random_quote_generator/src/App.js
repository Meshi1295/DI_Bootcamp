import React from "react";
import QuoteAuthor from "./components/QuoteAuthor";
import quotes from './components/Quotesdb';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author
     
    };
  }

  setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  }

  clickBtn = () => {
    const randomQuote = this.getRandomNum();
    this.setBg()
    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author
    })
  }


  getRandomNum = () => {
    const num = Math.floor(Math.random() * quotes.length)
    console.log( quotes[num]);
    let oneQuotes =  quotes[num];
    return oneQuotes
  }

 
   
  render() {
    return (
      <div>
        <QuoteAuthor changeQuote={this.clickBtn} {...this.state}/>
      </div>
    );
  }
}

export default App;