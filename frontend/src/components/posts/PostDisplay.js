import React from "react";
// import { Router } from "react-router-dom";
import upvote_arrow from "../../img/upvote_arrow.png";
import downvote_arrow from "../../img/downvote_arrow.png";
// import upvote_arrow_red from "../../img/upvote_arrow_red.png";
// import downvote_arrow_blue from "../../img/downvote_arrow_blue.png";
import comments_logo from "../../img/comments_logo.png";

export default class PostDisplay extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  clickPost = post_title => {
    console.log(post_title);
  };

  pushHistory = post => {
    if (post) {
      return this.props.history.push(
        `/r/${post.subreddit_name}/comments/${post.id}/${post.title
          .split(" ")
          .join("_")}`
      );
    } else {
      return null;
    }
  };

  render() {
    let posts = Object.values(this.props.posts.posts).map(post => {
      return (
        <div
          className="post"
          value={post.id}
          onClick={() => this.pushHistory(post)}
          key={post.id}
        >
          <div className="likes_count">
            <img
              src={upvote_arrow}
              alt=""
              className="upvote_arrow"
            />
            <p>{post.likes ? post.likes : "0"}</p>
            <img src={downvote_arrow} alt="" className="downvote_arrow" />
          </div>
          <div className="post_info">
            <h4>{post.title}</h4>
            <p className="post_info_poster_info">
              r/{post.subreddit_name} {" - "} posted by u/{post.username}{" "}
              {post ? (post.time_stamp.slice(0, 10)) : null}
            </p>
            <a href="" className="comments_logo_a"><img src={comments_logo} alt="" className="comments_logo" /> {post.comments} comments</a>
          </div>
        </div>
      );
    });
    return (
      <div className="post_div">
        <ul onClick={this.clickPost}>{posts}</ul>
      </div>
    );
  }
}
