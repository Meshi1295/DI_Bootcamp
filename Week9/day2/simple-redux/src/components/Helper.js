import {connect} from 'react-redux';
import {handleChange,handleClick} from '../redux/actions'
const Helper = (props) => {
  return(
    <>
      <h4>Helper</h4>
      <div>
        Change property_one <input type='text' onChange={props.handleChange}/>
      </div>
      <div>
        Change property_two to property_one <button onClick={()=>props.handleClick(props.prop_one)}>Click</button>
      </div>
    </>
  )
}

const mapStateToProps =(state)=>{
  return{
    prop_one: state.reducer_one.property_one
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e)=> dispatch(handleChange(e.target.value)),
    handleClick: (value) => dispatch(handleClick(value))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Helper)
