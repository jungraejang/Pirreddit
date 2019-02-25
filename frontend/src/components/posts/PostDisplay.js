import React from "react";
import { Link } from "react-router-dom";

export default class PostDisplay extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  clickPost = (post_title) => {
    console.log(post_title)
  }

  render() {
    let posts = Object.values(this.props.posts.posts).map(post => {
      return (
        <div className="post" value={post.id} onClick={() => this.clickPost(post.title)}>
        <div className="likes_count">
        <p>{post.sum ? post.sum : "0"}</p>
        </div>
        <div className="post_info">
          <h4>{post.title}</h4>
          <p>
            r/{post.subreddit_name} {" - "} posted by u/{post.username}{" "}
            {post.time_stamp.slice(0, 10)}
          </p>
          </div>
        </div>
      );
    });
    return (
      <div className="post_div">
      <ul onClick={this.clickPost.value}>
        {posts}
        </ul>
      </div>
  )
  }
}
