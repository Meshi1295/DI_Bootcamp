import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'
import { Link } from 'react-router-dom'



import '../style.css'

class Post extends React.Component {
 
 
  render() {
    
    const {post,deletePost} = this.props
    const {title,body,id} = post
    
    
    const OnePost = post ? (
      <div className="post">
        <h4 className="center">{title}</h4>
        <p>{body}</p>
        <div className="center">
          <Link to='/'>
            <button className="btn grey" onClick={()=>deletePost(id)}>
              Delete 
            </button>
          </Link>
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
