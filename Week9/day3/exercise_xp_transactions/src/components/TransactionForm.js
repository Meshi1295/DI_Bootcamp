import React from 'react';
import './TransactionForm.css'
import {connect} from 'react-redux'
import { insert, update } from '../redux/actions'

class TransactionForm extends React.Component {
  
    constructor(){
        super();
        this.state = {
            accountNumber: '',
            FSC: '',
            name: '',
            amount: '',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { amount, accountNumber, FSC, name } = this.state
        console.log(amount, accountNumber, FSC, name);

        if (this.props.currentIndex === -1) {
            this.props.insert({ amount, accountNumber, FSC, name })
        } else {
            this.props.update({ amount, accountNumber, FSC, name })
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target
        // console.log(name, value)
        this.setState({ [name]: value })
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.currentIndex !== -1
    }

         
    render(){
        const { amount, accountNumber, FSC, name } = this.state  
        console.log("a",amount,'b', accountNumber,'c', FSC,'d', name);     
        return (
        <div>
        <form className="form-container" onSubmit={this.handleSubmit}>
           <input 
           name='accountNumber' 
           type="text" 
           placeholder="Account Number"
           onChange={this.handleInputChange}
           /> 

           <input 
           name='FSC' 
           type="text" 
           placeholder="FSC"
           onChange={this.handleInputChange}
          />

           <input 
           name='name' 
           type="text" 
           placeholder="Holder Name"
           onChange={this.handleInputChange}
           />

           <input 
           name='amount' 
           type="number" 
           placeholder="Amount"
           onChange={this.handleInputChange}
           />
           
           <input  type="submit" value="submit"></input>
        </form>
        <hr />
    </div>
       )
    }
}


const mapStateToProps = (state) => {
    return {
        list: state.list,
        currentIndex: state.currentIndex,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        insert: (newObj) => dispatch(insert(newObj)),
     
        update: (newObj) => dispatch(update(newObj)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionForm);