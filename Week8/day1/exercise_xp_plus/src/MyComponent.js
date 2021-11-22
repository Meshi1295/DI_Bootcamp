import React from 'react';
import logo from './logo.svg';

const myStyle = {
    color:"white",
    background:"DodgerBlue",
    padding:'10px',
    fontFamily:"Arial"
}

const mySuperStyles = {
    color:"yellow",
    fontSize:"16px",
    weight:"bold",
    border:"1px solid yellow",
    backgroundColor:"black",
    padding:"5px",
    borderRadius:"8px",
    cursor:"pointer",
    margin:"10px"
}

const MyComponent = () => {
    return(
        <div className="container">
            {/* style={myStyle} */}
        <header className="newStyle"><b>This is Header</b></header>
        <p>Tis is Paragraph</p>

        <a href="/" >This is a Link</a>

        <form>
            <h1>This is Form:</h1>
            <p>Enter your name:</p>

            <input type="text"></input>
            <input style={mySuperStyles} type="submit"></input>
        </form>
        <h2>Here is an Image:</h2>
        <img src={logo} width="100" height="50" alt="img" />

        <h2>This is a List:</h2>
            <ul>
                <li>Coffee</li>
                <ul>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </ul>
        </div>
    )
}

export default MyComponent;