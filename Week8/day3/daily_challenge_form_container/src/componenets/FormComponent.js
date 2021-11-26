import React from "react";
import './formComponent.css'

function FormComponent(props) {
    return (
        <main className="container">
            <h1><b>Sample Form</b></h1>
            <form className="formContainer">
                <input 
                className="sumText" 
                placeholder="First Name"  
                value={props.firstName} 
                name="firstName"
                onChange={props.handleChange}/><br />
                <input 
                className="sumText" 
                placeholder="Last Name" 
                value={props.lastName} 
                name="lastName"
                onChange={props.handleChange}/><br />
                <input 
                className="sumText" 
                placeholder="Age" 
                name="age"
                value={props.age}
                onChange={props.handleChange} /><br />

                Male:<input className="gender" type="radio" onChange={props.handleChange}
                            value="Male" name="gender" checked={props.gender === "male"}/><br />
                Female:<input className="gender" type="radio" onChange={props.handleChange}
                              value="Female" name="gender" checked={props.gender === "female"}/><br />

                <h4>Select your destination</h4>
                <select  onChange={props.handleChange} value={props.destination} name="destination">
                    <option value=""> -Choose a destination-</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Israel">Israel</option>
                </select><br />

                <h4>Dietary restrictions:</h4>
                Nuts free: <input type="checkbox" name="nutsFree"
                                  onChange={props.handleChange} 
                                  checked={props.nutsFree}/>
                                  <br />
             Lactose free: <input type="checkbox"  name="lactoseFree"
                                     onChange={props.handleChange}  
                                     checked={props.lactoseFree}/>
                                     <br />
                    Vegan: <input type="checkbox"  name="isVegan"
                                    onChange={props.handleChange} 
                                    checked={props.isVegan}/>
                                    <br />

                <button className="submit"><b>Submit</b></button>
            </form>
            <hr />
            <section className="sectionContainer">
                <h2>Entered information:</h2>
                 <p>Your full name: {props.firstName} {props.lastName}</p>
                 <p>Your age: {props.age}</p>
                 <p>Your gender: {props.gender}</p>
                 <p>Your destination: {props.destination} </p>
                 <p>Your dietary restrictions: </p>

                 <span>**Nuts free: {props.nutsFree ? " Yes" : "No"}</span><br />
                 <span>**Lactose free:  {props.lactoseFree ? " Yes" : "No"}</span><br />
                 <span>**Vegan meal: {props.isVegan ? " Yes" : "No"}</span><br />
            </section>
        </main>

    )
}

export default FormComponent