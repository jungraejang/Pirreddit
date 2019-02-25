import React from "react";
import { Link } from "react-router-dom";

export default class PostDisplay extends React.Component {
  componentDidMount() {
    this.props.fetchPopularPosts();
  }

  clickPost = (post_title) => {
  }

  render() {
    let posts = Object.values(this.props.popularPosts.posts).map(post => {
      return (
        <div className="post" value={post.id} onClick={() => this.clickPost(post.title)}>
        <div className="likes_count">
        <p>{post.sum}</p>
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
      <div>
      <ul onClick={this.clickPost.value}>
        {posts}
        </ul>
      </div>
  )
  }
}
