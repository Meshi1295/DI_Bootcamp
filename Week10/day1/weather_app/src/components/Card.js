import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getData } from '../redux/actions';

const Card = (props) => {
    const { weatherData } = props

    useEffect(() => {
        props.getData()
    }, []);

    console.log(weatherData);
    return (
        <div>
            {weatherData !== null ? (
                <div className="main">
                    <h4>Live Weather Condition</h4>
                    <div className="weather-icon">
                        <img src={`https://api.openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt='icon' />
                    </div>
                    <h3>{weatherData.weather[0].description}</h3>
                    <div className="temperature">
                        <h1>{parseFloat(weatherData.main.temp - 273.15).toFixed(1)}&deg;C</h1>
                    </div>
                    <div className="location">
                        <h3><i className="fa fa-street-view"></i>{weatherData.name} | {weatherData.sys.country}</h3>
                    </div>
                    <div className="temperature-range">
                        <h6>min: 25&deg;C || max: 28&deg;C || Humidity: 10%</h6>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weatherData: state.weatherData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);