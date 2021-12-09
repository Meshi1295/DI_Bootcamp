import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks, handelChange, getValue } from '../redux/actions'

class SearchBox extends Component {

    // 12.() => this.props.getBooks(this.props.search)
    render() {
        const { getBooks, handelChange, getValue } = this.props

        return (
            <div>
                <div className="hed" >
                    <input
                        className="search"
                        onChange={handelChange} name="search" type="text" placeholder="Search..." />
                    <input className="click" onClick={() => getBooks()} type="submit" value='Click' />

                    <select
                        name="Sort By"
                        onChange={(e) => {
                            getValue(e);
                            getBooks();
                        }}
                    >{" "}
                        <option value="NEWEST">Newest First</option>
                        <option value="RELEVANCE">Relevance</option>
                        <option value="NONE" selected>none</option>
                    </select>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         search: state.search
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: () => dispatch(getBooks()),
        handelChange: (e) => dispatch(handelChange(e.target.value)),
        getValue: (e) => dispatch(getValue(e.target.value)),
    }
}

export default connect(null, mapDispatchToProps)(SearchBox);
