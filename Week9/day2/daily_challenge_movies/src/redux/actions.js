export const MOVIE_SELECTED = 'MOVIE_SELECTED'

export const selectedMovieAction = (movie) => {
    return{
       type: MOVIE_SELECTED,
        payload: movie
    }
}