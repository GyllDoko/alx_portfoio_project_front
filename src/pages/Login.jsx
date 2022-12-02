import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { setCurrentUser } from "../redux/user/user.actions";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    axios
      .post("/api/sessions", data)
      .then((res) => {
        if (res.status == 201) {
          props.dispatch(setCurrentUser(res.data));
          props.history.push("/");
        } else {
        }
      })
      .catch((err) => toast.error("Email ou mot de passe incorrect ! "));
  };
  const { t } = useTranslation();
  return (
    <>
      <Header scrolled={true} />
      <div>
        <div class="container-fluid p-0">
          <div class="row g-0">
            <div class="col-xl-9">
              <div class="auth-full-bg pt-lg-5 p-4">
                <div class="w-100">
                  <div class="bg-overlay"></div>
                  <div class="d-flex h-100 flex-column">
                    <div class="p-4 mt-auto">
                      <div class="row justify-content-center">
                        <div class="col-lg-7">
                          <div class="text-center">
                            <h4 class="mb-3">
                              <i class="bx bxs-quote-alt-left text-primary h1 align-middle me-3"></i>
                              <span class="text-primary">Market </span>Place{" "}
                              {t("login")}
                              <i class="bx bxs-quote-alt-right text-primary h1 align-middle ms-3"></i>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3">
              <div class="auth-full-page-content p-md-5 p-4">
                <div class="w-100">
                  <div class="d-flex flex-column h-100">
                    <div class="mb-4 mb-md-5">
                      {/* <a
                        href
                        style={{
                          fontFamily: "Fredoka One,  cursive",
                          fontSize: 40,
                        }}
                      >
                        Market Place
                      </a> */}
                    </div>
                    <div class="my-auto">
                      <div>
                        <h5 class="text-primary">{t("sign_in")}</h5>
                      </div>

                      <div class="mt-4">
                        <form
                          class="form-horizontal"
                          onSubmit={(e) => onHandleSubmit(e)}
                        >
                          <div class="mb-3">
                            <label for="username" class="form-label">
                              Email
                            </label>
                            <input
                              required
                              type="email"
                              class="form-control shadow-none"
                              id="username"
                              placeholder={t("enter_email")}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>

                          <div class="mb-3">
                            <label class="form-label">{t("password")}</label>
                            <div class="input-group auth-pass-inputgroup">
                              <input
                                required
                                type="password"
                                class="form-control shadow-none"
                                placeholder={t("enter_password")}
                                aria-label="Password"
                                aria-describedby="password-addon"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                          </div>

                          <div class="form-check">
                            <input
                              class="form-check-input shadow-none"
                              type="checkbox"
                              id="remember-check"
                            />
                            <label
                              class="form-check-label"
                              for="remember-check"
                            >
                              {t("remenber_me")}
                            </label>
                          </div>

                          <div class="mt-3 d-grid">
                            <button
                              class="btn btn-primary waves-effect waves-light shadow-none"
                              type="submit"
                            >
                              {t("login")}
                            </button>
                          </div>

                          {/* <div class="mt-4 text-center">
                          <h5 class="font-size-14 mb-3">Sign in with</h5>

                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <a
                                href="javascript::void()"
                                class="social-list-item bg-primary text-white border-primary"
                              >
                                <i class="mdi mdi-facebook"></i>
                              </a>
                            </li>
                          </ul>
                        </div> */}
                        </form>
                        <div class="mt-5 text-center">
                          <p>
                            {t("dont_have_account")}
                            <Link
                              to="register"
                              class="fw-medium text-primary mx-2"
                            >
                              {t("register")}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default connect(mapStateToProps)(Login);
