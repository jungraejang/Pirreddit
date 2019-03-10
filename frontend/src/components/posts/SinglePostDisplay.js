import React from "react";
import axios from "axios";
import upvote_arrow from "../../img/upvote_arrow.png";
import downvote_arrow from "../../img/downvote_arrow.png";
import header_posts_logo from "../../img/header_posts_logo.png";
import close_x_mark from "../../img/x-mark-thin-240.png";
import ReactQuill from "react-quill";
import AdDisplay from "./../ad_space/AdDisplay.js";

class SinglePostDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comment_body: ""
    };
  }

  pushHistory = single_post => {
    if (single_post) {
      return this.props.history.push(
        `/r/${single_post.subreddit_name}/comments/${
          single_post.id
        }/${single_post.title.split(" ").join("_")}`
      );
    } else {
      return null;
    }
  };

  handleChange = value => {
    let new_value = value;
    this.setState({
      comment_body: new_value
    });
  };

  handleSubmit = () => {
    let single_post = Object.values(this.props.posts.posts).map(item => {
      return item;
    })[Number(this.props.match.params.id) - 1];
    let body = this.state.comment_body
      .replace(/<p>/gi, "")
      .replace(/<[\/]p>/gi, "");
    let commenter_username = this.props.username;
    let post_id = single_post.id;
    axios
      .post("/comments/create", { body, commenter_username, post_id })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      comment_body: ""
    });
  };

  componentDidMount() {
    this.props.fetchPosts();
    axios.get(`/comments/${this.props.match.params.id}`).then(res => {
      this.setState({
        comments: res.data.data
      });
    });
  }

  closeSinglePost = () => {
    window.history.back();
  };

  render() {
    let title = this.props.match.params.post_title.replace(/_/g, " ");
    let single_post = Object.values(this.props.posts.posts).map(item => {
      return item;
    })[Number(this.props.match.params.id) - 1];
    let comments = Object.values(this.state.comments).map(item => {
      return (
        <div className="single_comment">
          <div className="single_comment_arrows">
            <img src={upvote_arrow} alt="" className="upvote_arrow_comments" />
            <img
              src={downvote_arrow}
              alt=""
              className="downvote_arrow_comments"
            />
          </div>
          <div className="single_comment_contents">
            <p className="single_comment_username">{item.username}</p>
            <p className="single_comment_body">{item.body}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="singlePost_div">
        <div className="singlePost_header">
          <div className="singlePost_header_likes">
            <img src={upvote_arrow} alt="" className="upvote_arrow_header" />
            <p>
              {single_post
                ? single_post.likes
                  ? single_post.likes
                  : "0"
                : "0"}
            </p>
            <img
              src={downvote_arrow}
              alt=""
              className="downvote_arrow_header"
            />
          </div>
          <img src={header_posts_logo} alt="" className="header_posts_logo" />
          <p>{single_post ? single_post.title : null}</p>
          <div className="header_close_button" onClick={this.closeSinglePost}>
            <img src={close_x_mark} alt="" className="close_x_mark" />
            <p>Close</p>
          </div>
        </div>
        <div className="singlePost_contents_div">
          <div className="singlePost_contents">
            <div className="single_post_likes">
              <img src={upvote_arrow} alt="" className="upvote_arrow_post" />
              <p>
                {single_post
                  ? single_post.likes
                    ? single_post.likes
                    : "0"
                  : "0"}
              </p>
              <img
                src={downvote_arrow}
                alt=""
                className="downvote_arrow_post"
              />
            </div>
            <div className="singlePost_contents_body">
              <p className="singlePost_poster_info">
                r/{single_post ? single_post.subreddit_name : "null"} Posted by
                u/{single_post ? single_post.username : null}
              </p>
              <h2 className="singlePost_title">{title ? title : null}</h2>
              <div className="single_post_body">
                <p>{single_post ? single_post.body : null}</p>
              </div>
              <br />
              <div
                className={
                  this.props.isLoggedIn
                    ? "text_editor"
                    : "single_post_please_login"
                }
              >
                {this.props.isLoggedIn ? (
                  <>
                    <ReactQuill
                      value={this.state.comment_body}
                      onChange={this.handleChange}
                    />
                    <div>
                    <button
                      className="comment_submit_button"
                      onClick={this.handleSubmit}
                    >
                      Submit
                    </button>
                    </div>
                  </>
                ) : (
                  <p>What are your thoughts? Log in or Sign up</p>
                )}
              </div>
              <div className="comments_div">{comments}</div>
            </div>
          </div>
          <div className="single_post_ad">
            <AdDisplay />
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePostDisplay;
