import Card from './Card';
import React from 'react';
import {connect} from 'react-redux'
import {getRobots} from '../redux/actions'

class CardList extends React.Component {
  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(robots =>{
     
      this.props.getRobots(robots)
    })
    .catch(e => {console.log(e)})
  }

  render(){
    const {robotsArr,filter} = this.props
    const array = filter || robotsArr
    return(
      <div>
        {
          array.map((item,i) => {
            return <Card robot={item} key={i} />
          })
        }
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    return{
      robotsArr : state.arr,
      filter: state.filter
    }
  }

  const mapDispatchToProps = (dispatch)=>{
    return{
      getRobots: (data)=> dispatch(getRobots(data))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(CardList);