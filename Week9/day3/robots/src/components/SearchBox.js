import {connect} from 'react-redux'
import {onSearch} from '../redux/actions'
const SearchBox = (props) => {
    const {onSearch} = props
    return(
        <div>
            <input type="text" onChange={onSearch}></input>
        </div>
    ) 
}

const mapDispatchToProps = (dispatch) =>{
   return {
    onSearch: (e)=> dispatch(onSearch(e.target.value))
   }
}

export default connect(null, mapDispatchToProps)(SearchBox)