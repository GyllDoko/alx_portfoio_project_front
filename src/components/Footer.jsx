import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const Footer = (props) => {
  const { t } = useTranslation();
  const [homeCategories, setHomeCategories] = useState([]);
  const [shomeCategories, setSHomeCategories] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("/category").then((res) => {
      let category = [];
      for (let i of res.data.results) {
        category.push(i);
      }
      setHomeCategories(category.slice(6, 13));
      setSHomeCategories(category.slice(0, 5));
    });
  }, []);
  return (
    <footer class="landing-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6">
            <div class="mb-4 mb-lg-0">
              <h5 class="mb-3 footer-list-title">{t("footer_link")}</h5>
              <ul class="list-unstyled footer-list-menu">
                <li>
                  <Link to="/home">{t("nav_home")}</Link>
                </li>
                <li>
                  <Link to="orders">{t("nav_order")}</Link>
                </li>
                <li>
                  <Link to="cart">{t("nav_cart")}</Link>
                </li>
                <li>
                  <Link to="profile">{t("nav_settings")}</Link>
                </li>
                <li>
                  <Link to="help">{t("nav_help")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="mb-4 mb-lg-0">
              <h5 class="mb-3 footer-list-title">{t("footer_category")}</h5>
              <ul class="list-unstyled footer-list-menu">
                {shomeCategories.map((item, index) => (
                  <li key={index}>
                   <Link
                        to="/category"
                        onClick={(e)=>{
                          e.preventDefault()
                          navigate('/category', {state: item})
                        }}
                        className="text-capitalize"
                      >
                        <i class="mdi mdi-chevron-right me-1"></i> {item.name}
                      </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6">
            <ul class="list-unstyled footer-list-menu">
              {homeCategories.map((item, index) => (
                <li key={index}>
                   <Link
                        to="/category"
                        onClick={(e)=>{
                          e.preventDefault()
                          navigate('/category', {state: item})
                        }}
                        className="text-capitalize"
                      >
                        <i class="mdi mdi-chevron-right me-1"></i> {item.name}
                      </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr class="footer-border my-5" />

        <div class="row">
          <div class="col-lg-6">
            <div class="mb-4">
              <a class="navbar-logo" href>
                <h3
                  style={{
                    fontFamily: "Fredoka One,  cursive",
                    color: "#fff",
                    fontSize: "50px",
                  }}
                >
                  Market Place
                </h3>
              </a>
            </div>

            <p class="mb-2">
              {new Date().getFullYear()} © Market Place.{" "}
              {t("footer_copy_rights")}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Footer);
