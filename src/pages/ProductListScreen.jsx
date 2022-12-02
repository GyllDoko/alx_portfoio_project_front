import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Hero } from "../components/Hero";
import { Shop } from "../components/Shop";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { CategoryProducts } from "../components/CategoryProducts";
import { useTranslation } from "react-i18next";

export const ProductListScreen = (props) => {
  const { t } = useTranslation();
  const [allCategories, setAllCategories] = useState([]);
  const [homeCategories, setHomeCategories] = useState([]);
  useEffect(() => {
    axios.get("/categories").then((res) => {
      let category = [];
      for (let i of res.data) {
        category.push(i.name);
      }
      setAllCategories([...new Set(category)]);
      setHomeCategories(category.slice(0, 3));
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <div id="preview" class="row mt-5 mx-5">
        <div class="col-lg-3">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">{t("home_filter")}</h4>

              <div>
                <h5 class="font-size-14 mb-3">
                  {t("home_filter_by_category")}
                </h5>
                <ul class="list-unstyled product-list">
                  {allCategories.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={{ pathname: "category", state: item }}
                        className="text-capitalize"
                      >
                        <i class="mdi mdi-chevron-right me-1"></i> {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div class="mt-4 pt-3">
                <h5 class="font-size-14 mb-3">
                  {t("home_filter_by_customer_rating")}
                </h5>
                <div>
                  <div class="form-check mt-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="productratingCheck1"
                    />
                    <label class="form-check-label" for="productratingCheck1">
                      4 <i class="bx bxs-star text-warning"></i> &{" "}
                      {t("home_filter_by_customer_rating_above")}
                    </label>
                  </div>
                  <div class="form-check mt-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="productratingCheck2"
                    />
                    <label class="form-check-label" for="productratingCheck2">
                      3 <i class="bx bxs-star text-warning"></i> &{" "}
                      {t("home_filter_by_customer_rating_above")}
                    </label>
                  </div>
                  <div class="form-check mt-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="productratingCheck3"
                    />
                    <label class="form-check-label" for="productratingCheck3">
                      2 <i class="bx bxs-star text-warning"></i> &{" "}
                      {t("home_filter_by_customer_rating_above")}
                    </label>
                  </div>

                  <div class="form-check mt-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="productratingCheck4"
                    />
                    <label class="form-check-label" for="productratingCheck4">
                      1 <i class="bx bxs-star text-warning"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="row mb-3">
            <div class="col-xl-4 col-sm-6">
              <div class="mt-2">
                <h5>{t("home_for_you")}</h5>
              </div>
            </div>
            <div class="col-lg-8 col-sm-6">
              <form class="mt-4 mt-sm-0 float-sm-end d-flex align-items-center">
                <div class="search-box me-2">
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control border-0 shadow-none"
                      placeholder={t("home_search")}
                    />
                    <i class="bx bx-search-alt search-icon"></i>
                  </div>
                </div>
                <ul class="nav nav-pills product-view-nav">
                  <li class="nav-item">
                    <a class="nav-link active" href>
                      <i class="bx bx-grid-alt"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href>
                      <i class="bx bx-list-ul"></i>
                    </a>
                  </li>
                </ul>
              </form>
            </div>
          </div>
          {homeCategories.map((item, index) => (
            <CategoryProducts key={index} category={item} />
          ))}
        </div>
      </div>
      {/* <Shop /> */}
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListScreen);
