import React from 'react'

class Color extends React.Component {
    constructor(props){
        super();
        this.state = {
            favoriteColor:'red',
            msg:props.alert
        }
        this.changesBlue=this.changesBlue.bind(this)        
    }

    componentDidMount(){setTimeout(()=>this.setState({favoriteColor: 'yellow'}) , 5000)}

     changesBlue () {this.setState({favoriteColor:"blue"})}    

    render(){
        const {favoriteColor,msg} = this.state
        return (
            <>
            <h1>My Favorite Color is {favoriteColor} </h1>
            <button onClick={this.changesBlue}>blue</button>
            <button onClick={msg}>Take the shot!</button>
            </>
        )
    }
}
export default Color