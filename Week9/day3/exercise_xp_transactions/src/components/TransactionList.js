import React from 'react'
import { connect } from 'react-redux'
import TransactionForm from './TransactionForm'
import { updateIndex, deleteIndex } from '../redux/actions'

const TransactionList = ({ list, updateIndex, deleteIndex }) => {
    return (
        <div>
            <h1>Financial Transactions</h1>
            <TransactionForm />
            <table>
                <tbody>
                    {list.map(({ amount, accountNumber, name }, i) => {
                        return (
                            <tr key={`${i}`}>
                                <td>{accountNumber}</td>
                                <td>{name}</td>
                                <td>{amount}</td>
                                <td>
                                    <button onClick={() => updateIndex(i)}>
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => deleteIndex(i)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateIndex: (i) => dispatch(updateIndex(i)),
        deleteIndex: (i) => dispatch(deleteIndex(i)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
