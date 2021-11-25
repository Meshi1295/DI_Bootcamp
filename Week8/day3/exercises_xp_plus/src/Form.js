const Form = (props) => {
    const { changeUserName, username, submitAlert, age, errMsg, txtArea } = props;
  
    return (
      <div>
        <form onSubmit={submitAlert}>
          <h1>
            Hello {username} Your age: {age || ""}
          </h1>
          <span>Enter your name:</span>        
          <input type="text" id="usernameInput" onKeyPress={changeUserName} /> 
         
          <hr />

           <span>Enter your age:</span>
          <input type="text" /> <b>{errMsg}</b>
          <hr />
          <textarea placeholder={txtArea}></textarea>
          <hr />
          <select defaultValue="volvo">
            <option value="ford">Ford</option>
            <option value="volvo">Volvo</option>
            <option value="fiat">Fiat</option>
          </select> <br /> <br />
          <input type="submit" value="submit" />
          
        </form>
      </div>
    );
  };
  
  export default Form;