import React from "react";
import { Link } from "react-router-dom";
import upvote_arrow from "../../img/upvote_arrow.png"
import downvote_arrow from "../../img/downvote_arrow.png"


export default class PostDisplay extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  clickPost = (post_title) => {
    console.log(post_title)
  }

  render() {
    console.log("post display: ", this.props.posts)
    let posts = Object.values(this.props.posts.posts).map(post => {
      return (
        <div className="post" value={post.id} onClick={() => this.clickPost(post.title)}>
        <div className="likes_count">
        <img src={upvote_arrow} alt="" className="upvote_arrow" />
        <p>{post.likes ? post.likes : "0"}</p>
        <img src={downvote_arrow} alt="" className="downvote_arrow" />
        </div>
        <div className="post_info">
          <h4>{post.title}</h4>
          <p>
            r/{post.subreddit_name} {" - "} posted by u/{post.username}{" "}
            {post.time_stamp.slice(0, 10)}
          </p>
          <p>{post.comments}{" "}comments</p>
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
