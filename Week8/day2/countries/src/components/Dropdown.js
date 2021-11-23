import React from 'react'

class Dropdown extends React.Component {
    constructor(){
        super();
        this.state ={
            countriesArr:[],
            citiesArr:[]
        }
    }

componentDidMount(){
    fetch('http://localhost:9000/countries')
    .then(countries => countries.json())
    .then(data => this.setState({countriesArr:data}))
    .catch(e => console.log(e))
}

  allCities = (e) => {
      fetch(`http://localhost:9000/cities/${e.target.value}`)
      .then(city=> city.json())
      .then(data => this.setState({citiesArr:data}))
      .catch(e => console.log(e))
 }

    render(){
        const {countriesArr,citiesArr} = this.state
        return(
         <div>
         <select onChange={this.allCities}>
             <option>Your All Countries</option>
             {
                countriesArr.map((item, i)=>{
                   return <option key={i} value={item.country_id}>{item.country}</option>
                })
             }
         </select>
         <select> 
             {
                 citiesArr.map(item => {
                     return <option key={item.city_id} value={item.city_id}>{item.city}</option>
                 })
             }
             
         </select>
     </div>
        )
    }
}


   export default Dropdown