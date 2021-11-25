import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../App.css";

class QuoteAuthor extends React.Component {


 
  render() {
    return (
      <div >
        <Card className="container" style={{ width: '18vw' }}>
          <Card.Body >
            <Card.Text>"{this.props.quote}"</Card.Text>
            <Card.Subtitle className="mb-2 text-muted"> -{this.props.author ? this.props.author : "Unknown"}-</Card.Subtitle>
            <Button onClick={this.props.changeQuote} variant="primary">New quote</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default QuoteAuthor;