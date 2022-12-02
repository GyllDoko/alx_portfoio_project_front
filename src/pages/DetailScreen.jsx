import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { addItem } from "../redux/cart/cart.actions"
// import { FedaCheckoutButton } from "fedapay-reactjs";
import axios from "axios"
import Comment from "../components/Comment"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"

export const DetailScreen = (props) => {
  const { state } = props.location
  const [comment, setComment] = useState("")
  const [commentTab, setCommentTab] = useState([])

  useEffect(() => {
    axios.get(`/get_comments/${state.id}`).then((res) => {
      setCommentTab(res.data)
    })
  }, [])
  const onCommentSubmit = (e) => {
    e.preventDefault()
    let data = {
      comment: {
        user_id: props.currentUser.id,
        product_id: state.id,
        description: comment
      }
    }
    axios.post("/comments", data).then((res) => {
      if (res.data.id) {
        axios.get(`/get_comments/${state.id}`).then((res) => {
          setCommentTab(res.data)
          setComment("")
        })
      }
    })
  }
  const PUBLIC_KEY = "pk_sandbox_RYWJP8U7m1ofdbUXZAdaRf-b"
  const { t } = useTranslation()
  let checkoutButtonOptions = {
    public_key: PUBLIC_KEY,
    transaction: {
      amount: state.price,
      description: "Market place Checkout"
    },
    currency: {
      iso: "XOF"
    },
    button: {
      class: "btn btn-success waves-effect waves-light mt-2 me-1 shadow-none",
      text: `${t("fedapay_button_text")}`
    },
    // customer: {
    //   email: "doko@gmail.com",
    //   lastname: "Gyll-christ",
    //   firstname: "DOKO ALFA",
    // },
    onComplete(resp) {
      const FedaPay = window["FedaPay"]
      if (resp.reason === FedaPay.DIALOG_DISMISSED) {
        toast.info("Transaction annulée par l'utilisateur")
      } else {
        const data = {
          user_id: props.currentUser.id,
          product: state.id,
          quantity: 1,
          transaction_id: resp.transaction.id,
          total_price: state.price
        }
        axios.post("/orders", data).then((res) => {
          toast.success("Merci pour votre achat !")
        })
      }
    }
  }

  const addToCart = (e) => {
    e.preventDefault()
    props.dispatch(addItem(state))
  }
  return (
    <>
      <Header scrolled={true} />
      <br />
      <br />
      <div className="container mt-5">
        <div class="row mt-2">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-xl-6">
                    <div class="product-detai-imgs">
                      <div class="row">
                        <div class="col-md-2 col-sm-3 col-4">
                          <div
                            class="nav flex-column nav-pills "
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                          >
                            <a
                              class="nav-link active"
                              id="product-1-tab"
                              data-bs-toggle="pill"
                              href="#product-1"
                              role="tab"
                              aria-controls="product-1"
                              aria-selected="true"
                            >
                              <img
                                src={state.image_tmp}
                                alt=""
                                class="img-fluid mx-auto d-block rounded"
                              />
                            </a>
                            <a
                              class="nav-link"
                              id="product-2-tab"
                              data-bs-toggle="pill"
                              href="#product-2"
                              role="tab"
                              aria-controls="product-2"
                              aria-selected="false"
                            >
                              <img
                                src={state.image_tmp}
                                alt=""
                                class="img-fluid mx-auto d-block rounded"
                              />
                            </a>
                            <a
                              class="nav-link"
                              id="product-3-tab"
                              data-bs-toggle="pill"
                              href="#product-3"
                              role="tab"
                              aria-controls="product-3"
                              aria-selected="false"
                            >
                              <img
                                src={state.image_tmp}
                                alt=""
                                class="img-fluid mx-auto d-block rounded"
                              />
                            </a>
                            <a
                              class="nav-link"
                              id="product-4-tab"
                              data-bs-toggle="pill"
                              href="#product-4"
                              role="tab"
                              aria-controls="product-4"
                              aria-selected="false"
                            >
                              <img
                                src={state.image_tmp}
                                alt=""
                                class="img-fluid mx-auto d-block rounded"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="col-md-7 offset-md-1 col-sm-9 col-8">
                          <div class="tab-content" id="v-pills-tabContent">
                            <div
                              class="tab-pane fade show active"
                              id="product-1"
                              role="tabpanel"
                              aria-labelledby="product-1-tab"
                            >
                              <div>
                                <img
                                  src={state.image_tmp}
                                  alt=""
                                  class="img-fluid mx-auto d-block"
                                />
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="product-2"
                              role="tabpanel"
                              aria-labelledby="product-2-tab"
                            >
                              <div>
                                <img
                                  src={state.image_tmp}
                                  alt=""
                                  class="img-fluid mx-auto d-block"
                                />
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="product-3"
                              role="tabpanel"
                              aria-labelledby="product-3-tab"
                            >
                              <div>
                                <img
                                  src={state.image_tmp}
                                  alt=""
                                  class="img-fluid mx-auto d-block"
                                />
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="product-4"
                              role="tabpanel"
                              aria-labelledby="product-4-tab"
                            >
                              <div>
                                <img
                                  src={state.image_tmp}
                                  alt=""
                                  class="img-fluid mx-auto d-block"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="text-center">
                            {props.currentUser ? (
                              <>
                                {" "}
                                <button
                                  type="button"
                                  class="btn btn-primary waves-effect waves-light mt-2 me-1 shadow-none"
                                  onClick={(e) => addToCart(e)}
                                >
                                  <i class="bx bx-cart me-2"></i>{" "}
                                  {t("add_to_cart")}
                                </button>
                                {/* <FedaCheckoutButton
                                  options={checkoutButtonOptions}
                                /> */}
                              </>
                            ) : (
                              <p
                                className="p-1 bg-warning mt-2"
                                style={{ borderRadius: 8, opacity: 0.7 }}
                              >
                                {t("log_before_buy")}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-6">
                    <div class="mt-4 mt-xl-3">
                      <a href="#" class="text-primary">
                        {t("category")}: {state.category}
                      </a>
                      <h4 class="mt-1 mb-3">{state.name}</h4>

                      <p class="text-muted float-start me-3">
                        <span class="bx bxs-star text-warning"></span>
                        <span class="bx bxs-star text-warning"></span>
                        <span class="bx bxs-star text-warning"></span>
                        <span class="bx bxs-star text-warning"></span>
                        <span class="bx bxs-star"></span>
                      </p>
                      <p class="text-muted mb-4">( 0 Customers Review )</p>

                      <h5 class="mb-4">
                        Price :<b> {state.price} F CFA</b>
                      </h5>
                      <p class="text-muted mb-4">{state.desccription}</p>
                    </div>
                  </div>
                </div>

                <div class="mt-5">
                  <h5 class="mb-3">{t("specifications")} :</h5>

                  <div class="table-responsive">
                    <table class="table mb-0 table-bordered">
                      <tbody>
                        <tr>
                          <th scope="row" style={{ width: "400px" }}>
                            {t("category")}
                          </th>
                          <td>{state.category}</td>
                        </tr>
                        <tr>
                          <th scope="row">{t("brand")} </th>
                          <td>N/A</td>
                        </tr>
                        <tr>
                          <th scope="row">{t("color")}</th>
                          <td>N/A</td>
                        </tr>

                        <tr>
                          <th scope="row">{t("warranty")} </th>
                          <td>1 Year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="mt-5">
                  <h5>{t("comments")} :</h5>

                  {commentTab.map((item, index) => (
                    <Comment comment={item} key={index} />
                  ))}
                  <div class="mt-3">
                    <textarea
                      id="textarea"
                      class="form-control shadow-none"
                      maxlength="225"
                      rows="3"
                      placeholder={t("add_a_comment")}
                      onChange={(e) => setComment(e.target.value)}
                      value={comment}
                    ></textarea>
                  </div>
                  <div class="d-grid gap-2  mt-2">
                    <button
                      type="button"
                      class="btn btn-secondary btn-sm waves-effect waves-light shadow-none"
                      onClick={(e) => onCommentSubmit(e)}
                    >
                      {t("submit_your_comment")}
                    </button>
                  </div>
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

const mapStateToProps = (state) => state.user

export default connect(mapStateToProps)(DetailScreen)
