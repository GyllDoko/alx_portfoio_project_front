import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const CategoryProducts = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`/get_products/${props.category}`).then((res) => {
      setProducts(res.data);
    });
  }, [props.category]);
  const { t } = useTranslation();
  return (
    <div className="" style={props.details ? { marginTop: "100px" } : {}}>
      <div class="row mb-3">
        <div class="col-xl-4 col-sm-6">
          <div class="my-2">
            <h2>
              {t("category")} {props.category}
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        {products.map((item, index) => (
          <div class="col-xl-4 col-sm-6" key={index}>
            <div class="card ">
              <div class="card-body">
                <div class="product-img position-relative">
                  {/* <div class="avatar-sm product-ribbon">
                    <span class="avatar-title rounded-circle  bg-primary">
                      - 25 %
                    </span>
                  </div> */}
                  <img
                    src={item.image_tmp}
                    alt=""
                    class="img-fluid mx-auto d-block"
                  />
                </div>
                <div class="mt-4 text-center">
                  <h5 class="mb-3 text-truncate">
                    <Link
                      to={{
                        pathname: "details",
                        state: { ...item, category: props.category },
                      }}
                      class="text-dark"
                    >
                      {item.name}
                    </Link>
                  </h5>

                  <p class="text-muted">{item.desccription}</p>
                  <h5 class="my-0">
                    <b> {item.price} FCFA</b>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(CategoryProducts);
