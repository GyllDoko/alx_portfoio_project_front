import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Hero = (props) => {
  const { t } = useTranslation();
  return (
    <section class="section hero-section bg-ico-hero" id="home">
      <div class="bg-overlay bg-transparent"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="text-white-50">
              <h2 class="text-white font-weight-semibold mb-3 hero-title">
                <code>Market place</code> {t("hero_description")}
              </h2>

              <div class="button-items mt-4">
                <a href="#preview" class="btn btn-light shadow-none">
                  {t("hero_button")}
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-8 col-sm-10 ms-lg-auto"></div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
