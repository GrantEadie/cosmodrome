import React from "react";
import PropTypes from "prop-types";

function Product(props){
  return (
    <React.Fragment>
      <div className="detailClick" onClick = {() => props.whenProductClicked(props.id)}>
        <p className="itemTitle">{props.prodName}</p>
        <p>{props.prodDescription}</p>
        <p><em>Quantity: {props.prodQuantity}</em></p>
        </div>
        <button className="btn btn-outline-light btn-sm" onClick = {() => props.onBuyProduct(props.id)}>Buy</button>
        <hr/>

    </React.Fragment>
  );
}

Product.propTypes = {
  prodName: PropTypes.string,
  prodDescription: PropTypes.string,
  prodCategory: PropTypes.string,
  prodQuantity: PropTypes.number,
  id: PropTypes.number,
  key: PropTypes.number,
  whenProductClicked: PropTypes.func,
  onBuyProduct: PropTypes.func
};

export default Product;