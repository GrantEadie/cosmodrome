import React from "react";
import Category from "./Category";
import PropTypes from "prop-types";


function CategoryList(props) {
  return (
    <React.Fragment>
      <Category
        category={props.availableProducts[props.currentIndex].category}
        selection={props.availableProducts[props.currentIndex].selection}
        onProductSelection={props.onProductSelection}
        onBuyProduct={props.onBuyProduct}
        />
    </React.Fragment>
  );  
}

CategoryList.propTypes = {
  currentIndex: PropTypes.number,   
  availableProducts: PropTypes.array,
  onProductSelection: PropTypes.func,
  onBuyProduct: PropTypes.func
}

export default CategoryList;

