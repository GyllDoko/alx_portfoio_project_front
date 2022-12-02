import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../redux/cart/cart.actions";

export const CartProduct = (props) => {
  let item = props.product;
  const onRemoveClickk = () => {
    if (window.confirm(`Do you want to remove "${item.name}" from cart ?`)) {
      props.dispatch(clearItemFromCart(item));
    }
  };
  const onMinusClick = () => {
    props.dispatch(removeItem(item));
  };
  const onAddClickk = () => {
    props.dispatch(addItem(item));
  };
  return (
    <tr>
      <td>
        <img
          src={item.image_tmp}
          alt="product-img"
          title="product-img"
          class="avatar-md"
        />
      </td>
      <td>
        <h5 class="font-size-14 text-truncate">
          <Link
            to={{
              pathname: "details",
              state: item,
            }}
            class="text-dark"
          >
            {item.name}
          </Link>
        </h5>
      </td>
      <td> {item.price} F</td>
      <td>
        <div className="row" style={{ width: "120px" }}>
          <div className="col-3">
            <Link
              to="cart"
              class="action-icon text-danger"
              onClick={(e) => onMinusClick(e)}
            >
              <i
                class="mdi mdi-minus font-size-12 p-1"
                style={{ borderRadius: 8, border: "2px solid red" }}
              ></i>
            </Link>
          </div>
          <div className="col-6">
            <p className="text-center ms-3">{item.quantity}</p>
          </div>
          <div className="col-3">
            <Link
              to="cart"
              class="action-icon text-success"
              onClick={(e) => onAddClickk(e)}
            >
              <i
                class="mdi mdi-plus font-size-12 p-1"
                style={{ borderRadius: 8, border: "2px solid green " }}
              ></i>
            </Link>
          </div>
        </div>
      </td>

      <td> {item.quantity * item.price} F</td>
      <td>
        <Link
          to="cart"
          class="action-icon text-danger"
          onClick={(e) => onRemoveClickk(e)}
        >
          <i class="mdi mdi-trash-can font-size-24"></i>
        </Link>
      </td>
    </tr>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(CartProduct);
