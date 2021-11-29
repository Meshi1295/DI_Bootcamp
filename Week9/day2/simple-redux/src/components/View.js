import {connect} from 'react-redux';
const View = (props) => {
  console.log(props);
  return(
    <>
      <h4>View</h4>
      <div>
        {props.one}
      </div>
      <div>
        {props.two}
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    one: state.reducer_one.property_one,
    two: state.reducer_two.property_two
  }
}
export default connect(mapStateToProps)(View)
