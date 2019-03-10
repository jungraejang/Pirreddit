import { connect } from "react-redux";
import {fetchPosts} from "../../actions/postsAction.js"
import SinglePostDisplay from "./SinglePostDisplay.js"

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostDisplay)
