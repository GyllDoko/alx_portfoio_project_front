import React from "react"

export default function Features() {
  return (
    <section class="section" id="features">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center mb-5">
              <div class="small-title">Features</div>
              <h4>Key features of the product</h4>
            </div>
          </div>
        </div>

        <div class="row align-items-center pt-4">
          <div class="col-md-6 col-sm-8">
            <div>
              <img
                src="./assets/images/crypto/features-img/img-1.png"
                alt=""
                class="img-fluid mx-auto d-block"
              />
            </div>
          </div>
          <div class="col-md-5 ms-auto">
            <div class="mt-4 mt-md-auto">
              <div class="d-flex align-items-center mb-2">
                <div class="features-number font-weight-semibold display-4 me-3">
                  01
                </div>
                <h4 class="mb-0">Online Market</h4>
              </div>
              <p class="text-muted">
                At its core, Marketplace is an ecommerce site that offers many
                different products from many different sellers.
              </p>
              <div class="text-muted mt-4">
                <p class="mb-2">
                  You can buy products from the platform and be delivered at
                  your house
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row align-items-center mt-5 pt-md-5">
          <div class="col-md-5">
            <div class="mt-4 mt-md-0">
              <div class="d-flex align-items-center mb-2">
                <div class="features-number font-weight-semibold display-4 me-3">
                  02
                </div>
                <h4 class="mb-0">History Saving</h4>
              </div>
              <p class="text-muted">
                Don't waste your time remember what you buy. We do it for you.
                We save all your orders as same as your pending cart. All
                secured and related only to your profile
              </p>
            </div>
          </div>
          <div class="col-md-6  col-sm-8 ms-md-auto">
            <div class="mt-4 me-md-0">
              <img
                src="./assets/images/crypto/features-img/img-2.png"
                alt=""
                class="img-fluid mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
