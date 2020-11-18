import React from "react";
import PropTypes from "prop-types";

function Product(props){
  return (
    <React.Fragment>
      <p className="itemTitle">{props.prodName}</p>
      <p>{props.prodDescription}</p>
      <p><em>Quantity: {props.prodQuantity}</em></p>
      <hr/>
    </React.Fragment>
  );
}
//Below: is required can be tacked on to make a property required
Product.propTypes = {
  prodName: PropTypes.string,
  prodDescription: PropTypes.string,
  prodCategory: PropTypes.string,
  prodQuantity: PropTypes.number,
};
export default Product;