import React from "react";
import PropTypes from "prop-types";
import Product from "../product/Product";

function Category(props){

  const ulStyle = {
    padding:0
  }

  return(
    <React.Fragment>
      <h3>{props.category}</h3>
      <p><em>available parts</em></p>
      <hr/>
      <ul style={ulStyle}>
        {props.selection.map((part) =>
        <li><Product
        onBuyProduct={props.onBuyProduct}
        whenProductClicked = {props.onProductSelection}
        prodName={part.prodName}
        prodDescription={part.prodDescription} 
        prodQuantity={part.prodQuantity}             
        id={part.id}
        key={part.id}/>
        </li>
        )}
      </ul>

    </React.Fragment>
  )
}

Category.propTypes = {
  category: PropTypes.string,
  selection: PropTypes.array,
  onProductSelection: PropTypes.func,
  onBuyProduct: PropTypes.func,
  whenProductClicked: PropTypes.func
};
export default Category;