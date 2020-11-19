import React from "react";
import ReusableForm from "../ReusableForm";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function EditProductForm(props) {

  function handleEditProductFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct({
      prodName: event.target.prodName.value,
      prodDescription: event.target.prodDescription.value,
      prodCategory: event.target.prodCategory.value,
      prodQuantity: event.target.prodQuantity.value,
      id: v4()
    })
  }
  
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditProductFormSubmission}
        buttonText="Update Product" />
    </React.Fragment>
  );
}

EditProductForm.propTypes = {
  onEditProduct: PropTypes.func
};

export default EditProductForm;