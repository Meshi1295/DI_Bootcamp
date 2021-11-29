import React from "react";
import {connect} from 'react-redux'

class MovieDetails extends React.Component {
    render(){
        const {title, releaseDate,rating} = this.props
        return (
            <>
            <h1>Movie Details</h1>
            <p>title: {title}</p>
            <p>Release Date: {releaseDate}</p>
            <p>Rating: {rating}</p>
            </>
        )
    }
}

const mapStateToProps = (state)=> {
   
    const {title, releaseDate,rating} = state.selectedMovieReducer.selectedMovie
    return {
        title, releaseDate, rating
    }

}
export default connect(mapStateToProps)(MovieDetails);