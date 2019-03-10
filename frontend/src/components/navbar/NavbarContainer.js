import {connect} from "react-redux"
import Navbar from "./Navbar.js"
// import Navbar_Scroll from "./Navbar_Scroll.js"

const mapStateToProps = (state, ownProps) => {
return null
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  props: ownProps
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
