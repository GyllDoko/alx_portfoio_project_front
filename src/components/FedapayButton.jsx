import React from "react"
import { connect } from "react-redux"
// import { FedaCheckoutButton } from "fedapay-reactjs";

export const FedapayButton = (props) => {
  return null
  // <FedaCheckoutButton options={props.checkoutButtonOptions} />
}

const mapStateToProps = (state) => state.user

export default connect(mapStateToProps)(FedapayButton)
