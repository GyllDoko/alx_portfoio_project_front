import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import CartProduct from "../components/CartProduct"
import Footer from "../components/Footer"
import Header from "../components/Header"
import axios from "axios"
import { clearCart } from "../redux/cart/cart.actions"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"
import {
  openKkiapayWidget,
  addKkiapayListener,
  removeKkiapayListener
} from "kkiapay"

export const CartScreen = (props) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [total_price, setTotal_price] = useState(0)

  function open() {
    openKkiapayWidget({
      amount: total_price,
      api_key: "790f97f014c511eb867121618f21fc94",
      sandbox: true,
      email: props.user.email,
      phone: props.user.phone
    })
  }
  async function successHandler(response) {
    const data = {
      user_id: props.user.currentUser.id,
      cart: props.cart,
      total_price: props.cart.total,
      transaction_id: response.transaction.id
    }
    await axios
      .post("/category/orders", data)
      .then((res) => {
        if (res.status) {
          navigate("/home")
        }
      })
      .catch((error) => {
        console.log(error)
        toast.error(error.message)
      })
  }

  useEffect(() => {
    setTotal_price(props.cart.total)
  }, [props.cart.total])
  let cartItems = props.cart.cartItems
  useEffect(() => {
    addKkiapayListener("success", successHandler)
    return () => {
      removeKkiapayListener("success", successHandler)
    }
  }, [])

  const onHandlePay = async () => {
    open()
    const data = {
      user_id: props.user.currentUser.id,
      products: props.cart.cartItems,
      total_price: props.cart.total
    }
    await axios
      .post("/category/orders", data, {
        headers: { Authorization: `Token ${props.user.currentUser.token}` }
      })
      .then((res) => {
        if (res.status) {
          // navigate("/home")
        }
      })
      .catch((error) => {
        console.log(error)
        toast.error(error.message)
      })
  }
  return (
    <>
      <Header scrolled={true} />
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
                    <Link to="/home" class="btn btn-secondary">
                      <i class="mdi mdi-arrow-left me-1"></i>
                      {t("continue_shopping")}
                    </Link>
                  </div>
                  <div class="col-sm-6">
                    <div class="text-sm-end mt-2 mt-sm-0">
                      {props.user.currentUser &&
                      props.cart.cartItems.length !== 0 ? (
                        <button
                          className="btn gradient btn-primary ml-4"
                          onClick={() => open()}
                        >
                          Payer
                        </button>
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
  )
}

const mapStateToProps = (state) => {
  return { cart: state.cart, user: state.user }
}

export default connect(mapStateToProps)(CartScreen)
