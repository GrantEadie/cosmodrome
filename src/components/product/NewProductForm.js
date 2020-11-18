import React from 'react';
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewProductForm(props) {

  function handleNewProductFormSubmission(event){
    console.log("FORM name: "+event.target.prodName.value)
    event.preventDefault();
   props.onNewProductCreation({prodName: event.target.prodName.value, prodDescription: event.target.prodDescription.value, prodCategory: event.target.prodCategory.value, prodQuantity: event.target.prodQuantity.value, id: v4() })
  }  
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewProductFormSubmission}>
        <input
          type='text'
          name='prodName'
          placeholder='Product Name' />
        <input
          type='text'
          name='prodDescription'
          placeholder='Description' />
        <input
          type="number"
          name='prodQuantity'
          placeholder='Quantity' />
          
        <select className="form-control" name='prodCategory'>
          <option value="0">Engine Parts</option>
          <option value="1">Hardpoints</option>
          <option value="2">Ship Armor</option>
          <option value="3">Utility Mounts</option>
          <option value="4">Shield Generators</option>
          <option value="5">Internal compartments</option>
        </select>

        <button type='submit'>Add Space Product</button>
      </form>
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;
