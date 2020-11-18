import React from 'react';
import ProductList from './ProductList';

class ProductControl extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      productVisibleOnPage: true
    };
  }

  render(){   
    
    return (
      <React.Fragment>
        <ProductList />
      </React.Fragment>
    )
  }
}

export default ProductControl;