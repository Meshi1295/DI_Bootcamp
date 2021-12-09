import React from 'react'
import HomePage from './HomePage'

const FavoritePage = () => { 

      const favoriteWeathers = [{ 
            id:'',
            name:''
        }]

        return (
            <div>
                <h1>Favorite Page</h1>
                {
                    favoriteWeathers.map((favoriteWeather,index)=> <HomePage 
                    weatherData={favoriteWeather} key={index}/>)
                }
            </div>
        )
}

export default FavoritePage;
