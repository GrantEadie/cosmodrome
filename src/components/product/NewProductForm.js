import React from 'react';
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "../ReusableForm";

function NewProductForm(props) {

  function handleNewProductFormSubmission(event){
    event.preventDefault();
   props.onNewProductCreation({prodName: event.target.prodName.value, prodDescription: event.target.prodDescription.value, prodCategory: event.target.prodCategory.value, prodQuantity: event.target.prodQuantity.value, id: v4(), cartTotal: 0 })
  }  
  
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewProductFormSubmission}
      buttonText="Add Space Product"/>
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;