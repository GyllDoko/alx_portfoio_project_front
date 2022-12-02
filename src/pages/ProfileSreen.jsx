import React from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const ProfileSreen = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Header scrolled={true} />
      <br />
      <br />
      <br />
      <div className="container mt-5">
        <div class="row">
          <div class="col-xl-4">
            <div class="card overflow-hidden">
              <div class="bg-primary bg-soft">
                <div class="row">
                  <div class="col-7">
                    <div class="text-primary p-3">
                      <h5 class="text-primary">Market place</h5>
                      <p>{t("profile")}</p>
                    </div>
                  </div>
                  <div class="col-5 align-self-end">
                    <img
                      src="assets/images/profile-img.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div class="card-body pt-0">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="avatar-md profile-user-wid mb-4">
                      <img
                        src="assets/images/users/profil-nophoto.png"
                        alt=""
                        class="img-thumbnail rounded-circle"
                      />
                    </div>
                  </div>

                  <div class="col-sm-8">
                    <div class="pt-4">
                      <span>
                        {t("user")}: <pre>{props.currentUser.email}</pre>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-nowrap mb-0">
                    <tbody>
                      <tr>
                        <th scope="row">{t("full_name")} :</th>
                        <td>
                          {props.currentUser.first_name +
                            props.currentUser.last_name ||
                            `<${t("edit_to_add")}>`}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Mobile :</th>
                        <td>
                          {props.currentUser.phone_number ||
                            `<${t("edit_to_add")}>`}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">E-mail :</th>
                        <td>{props.currentUser.email}</td>
                      </tr>
                      {/* <tr>
                        <th scope="row">Location :</th>
                        <td>California, United States</td>
                      </tr> */}
                    </tbody>
                  </table>
                  <div className="">
                    <Link
                      className="mt-2"
                      to={{ pathname: "edit_profile" }}
                      style={{ float: "right" }}
                    >
                      {t("edit")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-8">
            <div class="card">
              <div class="card-body">
                <h2 class="card-title mb-4">{t("like_product")}</h2>
                <div id="revenue-chart" class="apex-charts" dir="ltr"></div>
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

export default connect(mapStateToProps)(ProfileSreen);
