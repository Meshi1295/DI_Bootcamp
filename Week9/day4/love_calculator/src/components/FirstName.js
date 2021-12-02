
const FirstName = (props) => {
   
        return(
            <div>
           First Name: <input type="text" name='firstName' onChange={props.handelChange} />
           {props.fname}
            </div>
        )

    
}

export default FirstName;