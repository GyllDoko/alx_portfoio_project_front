import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { clearCart } from "../redux/cart/cart.actions"
import { setCurrentUser } from "../redux/user/user.actions"
import { useTranslation } from "react-i18next"
import i18next from "i18next"
import cookies from "js-cookie"

export const Header = (props) => {
  const GlobeIcon = ({ width = 24, height = 24 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      class="bi bi-globe"
      viewBox="0 0 16 16"
    >
      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
    </svg>
  )
  const { t } = useTranslation()
  const language = [
    {
      code: "fr",
      name: "Français",
      country_code: "fr"
    },
    {
      code: "en",
      name: "English",
      country_code: "us"
    }
  ]
  const currentLanguageCode = cookies.get("i18next")
  const [navScroll, setNavScroll] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  useEffect(() => {
    props.scrolled ? setNavScroll(true) : setNavScroll(false)
  }, [props.scrolled])
  const changeBackground = () => {
    if (window.scrollY > 100) {
      setNavScroll(true)
    } else if (props.scrolled) {
      setNavScroll(true)
    } else {
      setNavScroll(false)
    }
  }
  window.addEventListener("scroll", changeBackground)
  const logOut = () => {
    props.dispatch(setCurrentUser(null))
    props.dispatch(clearCart())
  }
  return (
    <nav
      class={
        navScroll
          ? "navbar navbar-expand-lg navigation fixed-top sticky nav-sticky"
          : "navbar navbar-expand-lg navigation fixed-top sticky "
      }
    >
      <div class="container">
        <a class="navbar-logo" href>
          <h3
            style={
              navScroll
                ? { fontFamily: "Fredoka One,  cursive" }
                : { fontFamily: "Fredoka One,  cursive", color: "#fff" }
            }
          >
            Market Place
          </h3>
        </a>

        <button
          type="button"
          class="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
          data-bs-toggle="collapse"
          data-bs-target="#topnav-menu-content"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="topnav-menu-content">
          <ul class="navbar-nav ms-auto" id="topnav-menu">
            <li class="nav-item mx-1">
              <NavLink class="nav-link " to="/">
                {t("nav_home")}
              </NavLink>
            </li>
            {props.user.currentUser ? (
              <li class="nav-item mx-1">
                <NavLink class="nav-link" to="/orders">
                  {t("nav_order")}
                </NavLink>
              </li>
            ) : (
              ""
            )}
            <li class="nav-item mx-1">
              <NavLink class="nav-link" to="/cart">
                <i class="bx bx-cart bx-tada font-size-22"></i>
                <span class="badge bg-danger rounded-pill">
                  {props.cart.cartItems.length}
                </span>
              </NavLink>
            </li>
            {props.user.currentUser ? (
              <li class="nav-item mx-1">
                <NavLink class="nav-link" to="/profile">
                  {t("nav_my_account")}
                </NavLink>
              </li>
            ) : (
              ""
            )}
            <li class="nav-item mx-1">
              <NavLink class="nav-link" to="/help">
                {t("nav_help")}
              </NavLink>
            </li>
          </ul>

          {props.user.currentUser ? (
            <div class="my-2 ms-lg-2">
              <Link
                to="login"
                onClick={(e) => logOut()}
                class="btn btn-outline-danger w-xs shadow-none"
              >
                {t("nav_log_out")}
              </Link>
            </div>
          ) : (
            <>
              <div class="my-2 ms-lg-2">
                <Link
                  to="/login"
                  class="btn btn-outline-success w-xs shadow-none border-0"
                >
                  {t("nav_sign_in")}
                </Link>
              </div>
              <div class="my-2 ms-lg-2">
                <Link
                  to="/register"
                  class="btn btn-outline-primary shadow-none w-xs"
                >
                  {t("nav_register")}
                </Link>
              </div>
              {/* <div class="my-2 ms-lg-2">
                <a
                  // href="http://127.0.0.1:3001/guess_admin"
                  href="https://dive-original-app-backend.herokuapp.com/guess_admin"
                  class="btn btn-outline-warning shadow-none w-xs"
                >
                  {t("nav_log_as_guess_admin")}
                </a>
              </div> */}
              <div class="my-2 ms-lg-2">
                <Link
                  to="/"
                  onClick={() =>
                    props.dispatch(
                      setCurrentUser({
                        id: 50,
                        email: "guess@marketplace.com",
                        last_name: "Guess",
                        phone_number: "66000001"
                      })
                    )
                  }
                  class="btn btn-outline-warning shadow-none w-xs"
                >
                  {t("nav_log_as_guess")}
                </Link>
              </div>
            </>
          )}
          <div class="dropdown">
            <button
              class="btn btn-link dropdown-toggle shadow-none ms-3"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <GlobeIcon />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <span className="text-muted font-size-12 mx-2">{t("lang")}</span>
              {language.map(({ code, country_code, name }) => (
                <li key={country_code}>
                  <button
                    class="dropdown-item"
                    type="button"
                    onClick={() => i18next.changeLanguage(code)}
                    disabled={code === currentLanguageCode}
                    style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                    ></span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return { user: state.user, cart: state.cart }
}

export default connect(mapStateToProps)(Header)
