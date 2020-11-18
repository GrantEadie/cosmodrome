import React from "react";
import Category from "./Category";
import PropTypes from "prop-types";
//import ProductList from "../product/ProductList.js";

function CategoryList(props) {
  return (
    <React.Fragment>
      <Category
        category={props.availableProducts[props.currentIndex].category}
        selection={props.availableProducts[props.currentIndex].selection}
        />
    </React.Fragment>
  );  
}

CategoryList.propTypes = {
  currentIndex: PropTypes.number,   
  availableProducts: PropTypes.array
}

export default CategoryList;

