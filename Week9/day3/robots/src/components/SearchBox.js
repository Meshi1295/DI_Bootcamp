const SearchBox = (props) => {

    return(
        <div>
            <input type="text" onChange={props.searchChang}></input>
        </div>
    ) 
}

export default SearchBox