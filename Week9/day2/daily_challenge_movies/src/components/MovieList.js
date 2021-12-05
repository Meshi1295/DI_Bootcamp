import React from "react";
import { connect } from "react-redux";
import { selectedMovieAction } from '../redux/actions'

class MovieList extends React.Component {
    render(){
        const {movies,selectMovie} =this.props

        return (
            <>
                <h1>Movies List</h1>
                <div>
                    {
                    movies.map((movie,i) => {
                        return <div key={i}  >{movie.title}
                        <button onClick={() => selectMovie(movie)}>details</button>
                        </div>
                      })
                    }
                </div>
            </>
        )

    }
} 
    
  

const mapStateToProps = (state) =>{
 return{
    movies: state.moviesReducer.movies 
 } 
}
 const mapDispatchToProps =(dispatch) =>{
     return{
        selectMovie:(movie)=> dispatch(selectedMovieAction(movie))
     }    
 }


export default connect(mapStateToProps,mapDispatchToProps)(MovieList);