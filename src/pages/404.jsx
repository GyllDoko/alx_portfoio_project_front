import React from "react";
import { connect } from "react-redux";

export const Error404 = (props) => {
  return (
    <div class="account-pages my-5 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center mb-5">
              <h1 class="display-2 fw-medium">
                4<i class="bx bx-buoy bx-spin text-primary display-3"></i>4
              </h1>
              <h4 class="text-uppercase">Sorry, page not found</h4>
              <div class="mt-5 text-center"></div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-8 col-xl-6">
            <div>
              <img src="assets/images/error-img.png" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Error404);
