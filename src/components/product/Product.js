import React from "react";
import PropTypes from "prop-types";

function Product(props){
  return (
    <React.Fragment>
      <div className="detailClick" onClick = {() => props.whenTicketclicked(props.id)}>
        <p className="itemTitle">{props.prodName}</p>
        <p>{props.prodDescription}</p>
        <p><em>Quantity: {props.prodQuantity}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Product.propTypes = {
  prodName: PropTypes.string,
  prodDescription: PropTypes.string,
  prodCategory: PropTypes.string,
  prodQuantity: PropTypes.number,
  id: PropTypes.number,
  key: PropTypes.number
};

export default Product;