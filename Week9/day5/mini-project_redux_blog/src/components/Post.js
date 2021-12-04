import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'
// import {withRouter, useParams} from 'react-router-dom';

import '../style.css'

class Post extends React.Component {
 
  render() {
    // let {productId} = useParams();

    console.log(this.props.post);
    const {post} = this.props
    const {title,body} = post
    
    const OnePost = post ? (
      <div className="post">
        <h4 className="center">{title}</h4>
        <p>{body}</p>
        <div className="center">
          <button className="btn grey" >
            Delete 
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading Post Please Wait...</div>
    );

    return (
      <div className="container">
        {OnePost}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps',ownProps); 
    console.log('state',state);
  let id = ownProps.match.params.post_id
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
