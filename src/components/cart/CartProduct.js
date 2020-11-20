import React from "react";
import PropTypes from "prop-types";

function CartProduct(props){
  return (
    <React.Fragment>
        <p className="itemTitle">{props.prodName}</p>
        <p>{props.prodDescription}</p>
        <p><em>Total: {props.cartTotal}</em></p>
        <button onClick = {() => props.onDeleteCartProduct(props)} className="btn btn-outline-light btn-sm"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
</svg></button>
        <hr/>

    </React.Fragment>
  );
}

CartProduct.propTypes = {
  prodName: PropTypes.string,
  prodDescription: PropTypes.string,
  prodCategory: PropTypes.string,
  prodCartTotal: PropTypes.number,
  id: PropTypes.number,
  key: PropTypes.number,
  whenProductClicked: PropTypes.func,
  onDeleteCartProduct: PropTypes.func
};

export default CartProduct;