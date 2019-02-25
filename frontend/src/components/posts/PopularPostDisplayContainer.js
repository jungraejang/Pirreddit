import { connect } from "react-redux";
import { fetchPopularPosts } from "../../actions/postsAction.js";
import PopularPostDisplay from "./PopularPostDisplay.js";

const mapStateToProps = (state, ownProps) => {
  return {
    popularPosts: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPopularPosts: () => dispatch(fetchPopularPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularPostDisplay)
