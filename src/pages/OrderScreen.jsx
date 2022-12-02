import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OrderRow from "../components/OrderRow";

export const OrderScreen = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get(`/get_orders/${props.currentUser.id}`).then((res) => {
      setOrders(res.data);
    });
  }, [props.currentUser.id]);
  const { t } = useTranslation();
  return (
    <>
      <Header scrolled={true} />
      <div className="h-10 w-100 bg-dark" style={{ height: 80 }}></div>
      <div className="container">
        <div class=" row mt-2">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="row mb-2"></div>

                <div class="table-responsive">
                  <table class="table align-middle table-nowrap table-check">
                    <thead class="table-light">
                      <tr>
                        <th class="align-middle">{t("order_id")}</th>
                        <th class="align-middle">{t("billing_name")}</th>
                        <th class="align-middle">Date</th>
                        <th class="align-middle">Total</th>
                        <th class="align-middle">{t("payment_status")}</th>
                        <th class="align-middle">{t("payment_method")}</th>
                        <th class="align-middle">{t("view_details")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((item, index) => (
                        <OrderRow item={item} key={index} />
                      ))}
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

const mapStateToProps = (state) => state.user;

export default connect(mapStateToProps)(OrderScreen);
