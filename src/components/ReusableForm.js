import React from 'react';
import PropTypes from "prop-types";

function NewProductForm(props) {
  
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div className="form-group">
        <input
        className="form-control"
          type='text'
          name='prodName'
          placeholder='Product Name' /><br/>
        <input
        className="form-control"
          type='text'
          name='prodDescription'
          placeholder='Description' /><br/>
        <input
        className="form-control"
          type="number"
          name='prodQuantity'
          placeholder='Quantity' /><br/>
          
        <select className="form-control" name='prodCategory'>
          <option value="0">Engine Parts</option>
          <option value="1">Hardpoints</option>
          <option value="2">Ship Armor</option>
          <option value="3">Utility Mounts</option>
          <option value="4">Shield Generators</option>
          <option value="5">Internal compartments</option>
        </select><br/>

        <button className="btn btn-outline-danger btn-block" type='submit'>{props.buttonText}</button>
        </div>
      </form>

    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewProductForm;
