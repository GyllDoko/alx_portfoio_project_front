import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import OrderDetailModal from "./OrderDetailModal";

export const OrderRow = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <tr>
        <td>
          <a href="javascript: void(0);" class="text-body fw-bold">
            {props.item.transaction_id}
          </a>
        </td>
        <td>{props.currentUser.last_name || props.currentUser.email}</td>
        <td>{moment(props.item.created_at).calendar()}</td>
        <td>{props.item.total_price}</td>
        <td>
          <span class="badge badge-pill badge-soft-success font-size-12">
            Paid
          </span>
        </td>
        <td>
          <i class="fab fa-cc-mastercard me-1"></i> Fedapay
        </td>
        <td>
          <button
            type="button"
            class="btn btn-primary btn-sm btn-rounded shadow-none"
            onClick={() => setModalShow(true)}
          >
            View Details
          </button>
        </td>
      </tr>
      <OrderDetailModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        order={props.item.id}
        total={props.item.total_price}
      />
    </>
  );
};

const mapStateToProps = (state) => state.user;

export default connect(mapStateToProps)(OrderRow);
