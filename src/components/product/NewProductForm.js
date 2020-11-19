import React from 'react';
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "../ReusableForm";

function NewProductForm(props) {

  function handleNewProductFormSubmission(event){
    console.log("FORM name: "+event.target.prodName.value)
    event.preventDefault();
   props.onNewProductCreation({prodName: event.target.prodName.value, prodDescription: event.target.prodDescription.value, prodCategory: event.target.prodCategory.value, prodQuantity: event.target.prodQuantity.value, id: v4() })
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


// import React from 'react';
// import PropTypes from "prop-types";
// import { v4 } from 'uuid';

// function NewProductForm(props) {

//   function handleNewProductFormSubmission(event){
//     console.log("FORM name: "+event.target.prodName.value)
//     event.preventDefault();
//    props.onNewProductCreation({prodName: event.target.prodName.value, prodDescription: event.target.prodDescription.value, prodCategory: event.target.prodCategory.value, prodQuantity: event.target.prodQuantity.value, id: v4() })
//   }  
  
//   return (
//     <React.Fragment>
//       <form onSubmit={handleNewProductFormSubmission}>
//         <div className="form-group">
//         <input
//         className="form-control"
//           type='text'
//           name='prodName'
//           placeholder='Product Name' /><br/>
//         <input
//         className="form-control"
//           type='text'
//           name='prodDescription'
//           placeholder='Description' /><br/>
//         <input
//         className="form-control"
//           type="number"
//           name='prodQuantity'
//           placeholder='Quantity' /><br/>
          
//         <select className="form-control" name='prodCategory'>
//           <option value="0">Engine Parts</option>
//           <option value="1">Hardpoints</option>
//           <option value="2">Ship Armor</option>
//           <option value="3">Utility Mounts</option>
//           <option value="4">Shield Generators</option>
//           <option value="5">Internal compartments</option>
//         </select><br/>

//         <button className="btn btn-outline-danger btn-block" type='submit'>Add Space Product</button>
//         </div>
//       </form>

//     </React.Fragment>
//   );
// }

// NewProductForm.propTypes = {
//   onNewProductCreation: PropTypes.func
// };

// export default NewProductForm;
