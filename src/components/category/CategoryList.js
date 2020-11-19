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
        onProductSelection={props.onProductSelection}
        />
    </React.Fragment>
  );  
}

CategoryList.propTypes = {
  currentIndex: PropTypes.number,   
  availableProducts: PropTypes.array,
  onProductSelection: PropTypes.func
}

export default CategoryList;

