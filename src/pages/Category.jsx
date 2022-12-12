import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { CategoryProducts } from "../components/CategoryProducts";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const Category = (props) => {
  let { state } =useLocation();
  console.log(state)
  console.log("here")
  return (
    <>
      <Header scrolled={true} />
      <div className="container mt-5">
        <CategoryProducts category={state} details={true} />
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
