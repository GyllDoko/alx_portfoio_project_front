import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { setCurrentUser } from "../redux/user/user.actions";

export const EditProfileScreen = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

  const onProfileUpdate = (e) => {
    e.preventDefault();
    const data = {
      user: {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
      },
    };
    axios.patch(`/api/users/${props.currentUser.id}`, data).then((res) => {
      if (res.data) {
        props.dispatch(setCurrentUser(res.data));
        props.history.push("profile");
      }
    });
  };
  const { t } = useTranslation();
  return (
    <>
      <Header scrolled={true} />
      <br />
      <br />
      <div className="container mt-5">
        <br />
        <div class="col-xl-6 offset-3">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">{t("edit_your_profile")}</h4>

              <form onSubmit={(e) => onProfileUpdate(e)}>
                <div class="row mb-4">
                  <label
                    for="horizontal-firstname-input"
                    class="col-sm-3 col-form-label"
                  >
                    {t("first_name")}
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control shadow-none"
                      id="horizontal-firstname-input"
                      placeholder={t("enter_your_first_name")}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row mb-4">
                  <label
                    for="horizontal-firstname-input"
                    class="col-sm-3 col-form-label"
                  >
                    {t("last_name")}
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      placeholder={t("enter_your_last_name")}
                      class="form-control shadow-none"
                      onChange={(e) => setLastName(e.target.value)}
                      id="horizontal-firstname-input"
                    />
                  </div>
                </div>
                <div class="row mb-4">
                  <label
                    for="horizontal-email-input"
                    class="col-sm-3 col-form-label "
                  >
                    {t("phone_number")}
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      placeholder={t("enter_your_phone_number")}
                      class="form-control shadow-none"
                      id="horizontal-email-input"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>

                <div class="row justify-content-end">
                  <div class="col-sm-9">
                    <div className="d-flex">
                      <button
                        type="submit "
                        class="btn btn-primary w-md right shadow-none"
                      >
                        {t("update_information")}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => state.user;

export default connect(mapStateToProps)(EditProfileScreen);
