import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";


function ProductList() {
  return (
    <React.Fragment>
      <hr />
      {/* {marketSchedule.map((market, index) =>
        <Product
          prodName={product.prodName}
          prodCategory={product.prodCategory}
          prodQuantity={product.prodQuantity}
          key={index} />
      )} */}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  currentIndex: PropTypes.number   
}

export default ProductList;