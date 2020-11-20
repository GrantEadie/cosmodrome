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
          prodDescription={product.prodDescription}
          prodQuantity={product.prodQuantity}
          cartTotal={product.cartTotal}
          key={index} 
          id={product.id}
          onDeleteCartProduct={props.onDeleteCartProduct}/>
      )}
    </React.Fragment>
  );
}

CartList.propTypes = {
  onDeleteCartProduct: PropTypes.func,
  cartList: PropTypes.array
}



export default CartList;