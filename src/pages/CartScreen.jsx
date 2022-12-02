import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import Footer from "../components/Footer";
import Header from "../components/Header";

import FedapayButton from "../components/FedapayButton";
import axios from "axios";
import { clearCart } from "../redux/cart/cart.actions";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const CartScreen = (props) => {
  const { t } = useTranslation();
  const PUBLIC_KEY = "pk_sandbox_RYWJP8U7m1ofdbUXZAdaRf-b";
  let checkoutButtonOptions = {
    public_key: PUBLIC_KEY,
    transaction: {
      amount: props.cart.total,
      description: "Market place Checkout",
    },
    currency: {
      iso: "XOF",
    },
    button: {
      class: "btn btn-success waves-effect waves-light mt-2 me-1 shadow-none",
      text: `${t("fedapay_button_text")}`,
    },
    // customer: {
    //   email: props.user.currentUser
    //     ? "dokogyll@gmail.com"
    //     : "dokogyll@gmail.com",
    //   lastname: "Gyll-christ",
    //   firstname: "DOKO",
    //   phone_number: "66000001",
    // },
    onComplete(resp) {
      const FedaPay = window["FedaPay"];
      if (resp.reason === FedaPay.DIALOG_DISMISSED) {
        toast.info("Transaction annulée par l'utilisateur");
      } else {
        const data = {
          user_id: props.user.currentUser.id,
          cart: props.cart,
          total_price: props.cart.total,
          transaction_id: resp.transaction.id,
        };
        axios.post("/orders", data).then((res) => {
          props.dispatch(clearCart());
          toast.success("Merci pour votre achat !");
        });
      }
    },
  };
  const [total_price, setTotal_price] = useState(0);
  useEffect(() => {
    setTotal_price(props.cart.total);
  }, [props.cart.total]);
  let cartItems = props.cart.cartItems;
  console.log(total_price);
  const { state } = props.location;

  return (
    <>
      <Header scrolled={true} />
      <br />
      <br />
      <br />
      <div className="container mt-5">
        <div class="row">
          <div class="col-xl-8">
            <div class="card">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table align-middle mb-0 table-nowrap">
                    <thead class="table-light">
                      <tr>
                        <th>{t("product")}</th>
                        <th>{t("product_desc")}</th>
                        <th>{t("price")}</th>
                        <th className="px-3">{t("quantity")}</th>
                        <th colspan="2">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <CartProduct key={index} product={item} />
                      ))}
                    </tbody>
                  </table>
                </div>
                <div class="row mt-4">
                  <div class="col-sm-6">
                    <Link to="/" class="btn btn-secondary">
                      <i class="mdi mdi-arrow-left me-1"></i>
                      {t("continue_shopping")}
                    </Link>
                  </div>
                  <div class="col-sm-6">
                    <div class="text-sm-end mt-2 mt-sm-0">
                      {props.user.currentUser &&
                      props.cart.cartItems.length !== 0 ? (
                        <FedapayButton
                          checkoutButtonOptions={checkoutButtonOptions}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-3">{t("order_summary")}</h4>

                <div class="table-responsive">
                  <table class="table mb-0">
                    <tbody>
                      <tr>
                        <td>Grand Total :</td>
                        <td> {props.cart.total} FCFA </td>
                      </tr>
                      <tr>
                        <td>{t("discount")} : </td>
                        <td>- 0 FCFA</td>
                      </tr>

                      <tr>
                        <th>Total :</th>
                        <th> {props.cart.total} FCFA</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart, user: state.user };
};

export default connect(mapStateToProps)(CartScreen);
