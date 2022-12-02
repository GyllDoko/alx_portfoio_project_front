import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";

export const OrderDetailModal = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`/get_orders_products/${props.order}`).then((res) => {
      setProducts(res.data);
    });
  }, [props.orders]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Order Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p class="mb-4">
          Billing Name:
          <span class="text-primary mx-2">
            {props.currentUser.last_name || props.currentUser.email}{" "}
            {props.currentUser.first_name || " "}
          </span>
        </p>

        <div class="table-responsive">
          <table class="table align-middle table-nowrap">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index}>
                  <th scope="row">
                    <div>
                      <img
                        src={item.product.image_tmp}
                        alt="image"
                        class="avatar-sm"
                      />
                    </div>
                  </th>
                  <td>
                    <div>
                      <h5 class="text-truncate font-size-14">
                        {item.product.name}
                      </h5>
                      <p class="text-muted mb-0">
                        {item.product.price} F x{" "}
                        <b>{item.order_product.quantity}</b>
                      </p>
                    </div>
                  </td>
                  <td> {item.product.price} F</td>
                </tr>
              ))}

              <tr>
                <td colspan="2">
                  <h6 class="m-0 text-right">Total:</h6>
                </td>
                <td>{props.total} F</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => state.user;

export default connect(mapStateToProps)(OrderDetailModal);
