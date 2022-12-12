import React from "react"

export default function About() {
  return (
    <section class="section" id="features">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center mb-5">
              <div class="small-title">About</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7">
            <div class="card">
              <div class="card-body">
                <div class="media">
                  <div class="media-body overflow-hidden">
                    <h5 class="text-truncate font-size-15">Market Place</h5>
                    <p class="text-muted">Online Market platform</p>
                  </div>
                </div>

                <h5 class="font-size-15 mt-4">Project Details :</h5>

                <p class="text-muted" style={{ textAlign: "justify" }}>
                  Market place is an application intended to register local
                  sellers and their products by categories. It allows you to
                  classify products by category, add products to a basket,
                  define a delivery address and pay using a local payment
                  method. You have the possibility to consult your history, to
                  see the orders in progress and those already delivered, to
                  change the method of payment, to edit your profile, to contact
                  a seller and to give your opinion on a product. This was
                  inspired by large e-commerce companies with a local goal,
                  bringing sellers closer to consumers
                </p>

                <div class="text-muted mt-4">
                  <p>
                    <i class="mdi mdi-chevron-right text-primary me-1"></i> This
                    is a Portfolio Project for{" "}
                    <a
                      href="https://www.holbertonschool.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Holberton School
                    </a>
                  </p>
                </div>

                <div class="row task-dates">
                  <div class="col-sm-4 col-6">
                    <div class="mt-4">
                      <h5 class="font-size-14">
                        <i class="bx bx-calendar me-1 text-primary"></i> Start
                        Date
                      </h5>
                      <p class="text-muted mb-0">28 Oct, 2022</p>
                    </div>
                  </div>

                  <div class="col-sm-4 col-6">
                    <div class="mt-4">
                      <h5 class="font-size-14">
                        <i class="bx bx-calendar-check me-1 text-primary"></i>
                        Due Date
                      </h5>
                      <p class="text-muted mb-0">08 Dec, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-4">Team Members</h4>

                <div class="table-responsive">
                  <table class="table align-middle table-nowrap">
                    <tbody>
                      <tr>
                        <td style={{ width: "50px" }}>
                          <img
                            src="./assets/images/users/gyll-christ.jpg"
                            class="rounded-circle avatar-md"
                            alt=""
                          />
                        </td>
                        <td>
                          <h5 class="font-size-14 m-0">
                            <a href class="text-dark">
                              Gyll-christ DOKO ALFA
                            </a>
                          </h5>
                          <span>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://www.linkedin.com/in/gyll-christ-doko-alfa-bbab2b205/"
                            >
                              <i
                                class="mdi mdi-linkedin text-primary me-1"
                                style={{ fontSize: "24px" }}
                              ></i>
                            </a>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://twitter.com/gylldoko"
                            >
                              <i
                                class="mdi mdi-twitter text-primary me-1"
                                style={{ fontSize: "24px" }}
                              ></i>
                            </a>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://github.com/GyllDoko"
                            >
                              <i
                                class="mdi mdi-github text-primary me-1"
                                style={{ fontSize: "24px" }}
                              ></i>
                            </a>
                          </span>
                        </td>
                        <td>
                          <div>
                            <a
                              href="https://github.com/GyllDoko/alx_portfoio_project_front.git"
                              class="badge bg-primary bg-soft text-primary font-size-11"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Frontend
                            </a>
                            <a
                              href="https://github.com/GyllDoko/market-place-backend.git"
                              class="badge bg-primary bg-soft text-primary font-size-11"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Backend
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
