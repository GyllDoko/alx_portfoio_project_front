import React, { useState } from "react"
import { connect } from "react-redux"
import axios from "axios"
import { setCurrentUser } from "../redux/user/user.actions"
import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import Footer from "../components/Footer"
import Header from "../components/Header"
import { toast } from "react-toastify"

export const Register = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const navigate = useNavigate()
  const onHandleSubmit = (e) => {
    e.preventDefault()
    if (password === passwordConfirmation) {
      const data = {
        email: email,
        password: password
      }

      axios
        .post("/auth/signup", data)
        .then((res) => {
          console.log(res)
          if (res.status === 201) {
            console.log("here")
            props.dispatch(setCurrentUser(res.data))
            navigate("/")
          } else {
            for (let [key, value] of Object.entries(res.data)) {
              for (let error of value) {
                toast.warning(`${key} : ${error}`)
              }
            }
          }
        })
        .catch((err) => toast.error(err))
    } else {
      toast.error("Your password did not match !")
    }
  }
  const { t } = useTranslation()
  return (
    <div>
      <Header scrolled={true} />
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
                            <span class="text-primary">Market Place </span>
                            {t("register")}
                            <i class="bx bxs-quote-alt-right text-primary h1 align-middle me-3"></i>
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
            <div class="auth-full-page-content p-md-4 p-4">
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
                      <h5 class="text-primary">{t("register")}</h5>
                    </div>

                    <div class="mt-4">
                      <form
                        class="needs-validation"
                        onSubmit={(e) => onHandleSubmit(e)}
                      >
                        <div class="alert {{ message.tags }} mb-3" role="alert">
                          <strong>{}</strong>
                        </div>

                        {/* form place */}
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
                            value={email}
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
                              value={password}
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">
                            {t("password_confirmation")}
                          </label>
                          <div class="input-group auth-pass-inputgroup">
                            <input
                              required
                              type="password"
                              class="form-control shadow-none"
                              placeholder={t("password_confirmation")}
                              aria-label="Password"
                              aria-describedby="password-addon"
                              onChange={(e) =>
                                setPasswordConfirmation(e.target.value)
                              }
                              value={passwordConfirmation}
                            />
                          </div>
                        </div>

                        <div class="mt-4 d-grid">
                          <button
                            class="btn btn-primary waves-effect waves-light"
                            type="submit"
                          >
                            {t("register")}
                          </button>
                        </div>

                        {/* <div class="mt-4 text-center">
                          <h5 class="font-size-14 mb-3">Sign up using</h5>

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

                      <div class="mt-2 text-center">
                        <p>
                          {t("already_have_account")}
                          <Link to="/login" class="fw-medium text-primary mx-2">
                            {t("login")}
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
      {/* <Footer /> */}
    </div>
  )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Register)
