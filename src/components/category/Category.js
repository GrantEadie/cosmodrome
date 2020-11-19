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
        {props.selection.map((part, index) =>
        <li key={index}><Product
        prodName={part.prodName}
        prodDescription={part.prodDescription} 
        prodQuantity={part.prodQuantity}
        
        />
        </li>
        )}
      </ul>

    </React.Fragment>
  )
}

Category.propTypes = {
  category: PropTypes.string,
  selection: PropTypes.array
}

export default Category;