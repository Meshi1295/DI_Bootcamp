import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card';
import { getData } from '../redux/actions'

const Search = (props) => {

    const mid = () => {
        let city = document.getElementById('city').value
        props.getData(city)
    }

    return (
        <div className="App">
            <div className="card">
                <h2 className="title"><i className="fa fa-cloud"></i>Weather App</h2>
                <div className="search-form">
                    <input
                        id="city"
                        type="text"
                        placeholder="Enter your city name"
                    />
                    <button onClick={() => mid()}>Search</button>
                </div>
                <Card />
            </div >
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        getData: (e) => dispatch(getData(e))
    }
}

export default connect(null, mapDispatchToProps)(Search);