import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Blog from '../blog.png'
import { connect } from 'react-redux'
import '../style.css'

class Home extends Component {
  render(){
    console.log(this.props);
    const { posts } = this.props
    
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Blog} alt="blog" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h3 className="center">Home</h3>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)