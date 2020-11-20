import React from "react";
import CartProduct from "./CartProduct";
import PropTypes from "prop-types";


function CartList(props) {
  return (
    <React.Fragment>
    <hr />
      <h2>Your Cart</h2>
      <hr />
      {props.cartList.map((product, index) =>
        <CartProduct
          prodName={product.prodName}
          prodCategory={product.prodCategory}
          cartTotal={product.cartTotal}
          key={index} />
      )}
    </React.Fragment>
  );
}

CartList.propTypes = {
  cartList: PropTypes.array
}



export default CartList;