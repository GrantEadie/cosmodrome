import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props){
  const { product, onClickingDelete} = props;
  
  return (
    <React.Fragment>
      <h1>Product Detail</h1>
      <h3>Name: {product.prodName}</h3>
      <h3>Description: {product.prodDescription}</h3>
      <h3>Quantity: {product.prodQuantity}</h3>
      <button className="btn btn-outline-danger btn-block" onClick={() => onClickingDelete(product.id) }>Delete This Part</button>
      <button className="btn btn-outline-light btn-block" onClick={ props.onClickingEdit }>Edit This Part</button>

      <hr/>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default ProductDetail;

// className="btn btn-outline-danger btn-block"