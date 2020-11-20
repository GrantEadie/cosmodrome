import React from 'react';
import CategoryList from './CategoryList';
import NewProductForm from '../product/NewProductForm.js'
import ProductDetail from '../product/ProductDetail'
import EditProductForm from '../product/EditProductForm';
import CartList from '../cart/CartList';

class CategoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterCartList: [{ prodName: "Pulse Laser", prodDescription: "Blasters!", prodQuantity: 3, id:9708, cartTotal: 1 }],
      formVisibleOnPage: false,
      selectedProduct: null,
      categoryVisibleOnPage: 0,
      editing: false,
      masterProductList: [
      {
        category: "Engine Parts",
        selection: [
          { prodName: "3A Thrusters", prodDescription: "Thrusters are what propels a ship when flying in normal space.", prodQuantity: 1, id: 9807, cartTotal: 1 },
          { prodName: "Warp Converter", prodDescription: "A spacecraft equipped with a warp drive may travel at speeds greater than that of light by many orders of magnitude.", prodQuantity: 4, id:9808, cartTotal: 1  }
        ]
      },
      {
        category: "Hardpoints",
        selection: [{ prodName: "Pulse Laser", prodDescription: "Blasters!", prodQuantity: 3, id:9708, cartTotal: 1  }]
      },
      {
        category: "Ship Armor",
        selection: [{ prodName: "Titanium Plate", prodDescription: "Ship Armor", prodQuantity: 4, id:9608, cartTotal: 1  }]
      },
      {
        category: "Utility Mounts",
        selection: [{ prodName: "Detailed Surface Scanner", prodDescription: "Scans Planets", prodQuantity: 5, id:9508, cartTotal: 1  }]
      },
      {
        category: "Shield Generators",
        selection: [{ prodName: "4E Shield Generator", prodDescription: "Protect your shiiit", prodQuantity: 4, id:9408, cartTotal: 1  }]
      },
      {
        category: "Internal compartments",
        selection: [{ prodName: "6B Cargo Hold", prodDescription: "Hold your shiiit", prodQuantity: 5, id:9308, cartTotal: 1  }]
      }]
    };
  }

  handleBuyClick = (id) => {    
    const currentCatIndex = this.state.categoryVisibleOnPage;
    const clone = [...this.state.masterProductList]
    const cartClone = [...this.state.masterCartList]
    for (let i = 0; i <= clone[currentCatIndex].selection.length; i++){
      if (clone[currentCatIndex].selection[i].id === id){

        const currentProduct = clone[currentCatIndex].selection[i];
        if (clone[currentCatIndex].selection[i].prodQuantity > 1) {
          clone[currentCatIndex].selection[i].prodQuantity = clone[currentCatIndex].selection[i].prodQuantity -1;

        } else {
          clone[currentCatIndex].selection = this.state.masterProductList[currentCatIndex].selection.filter(pro => pro.id !== id);
        }


        let match = false
        for (const e of cartClone) {
          if (e.id === currentProduct.id) {
            console.log("match in cart!")
            match = true
            e.cartTotal += 1;
            break;
          } 
        };
        if (!match) {
          cartClone.push(currentProduct)
        }
        
        break;        
      }
    }
    
    this.setState({
      selectedProduct: null,
      formVisibleOnPage:false,
      masterProductList: clone,
      masterCartList: cartClone
    });
  }

  handleEditingProductInList = (productToEdit) => {
    const currentCatIndex = this.state.categoryVisibleOnPage;
    const clone = [...this.state.masterProductList]
    const editedSelection = this.state.masterProductList[currentCatIndex].selection
    .filter(product => product.id !== this.state.selectedProduct.id)
    .concat(productToEdit);
    clone[currentCatIndex].selection = editedSelection;
    this.setState({
      masterProductList: clone,
      editing: false,
      selectedProduct: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleClickForm = () => {
    if (this.state.selectedProduct != null){
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleDeletingProduct = (id) => {
    const currentCatIndex = this.state.categoryVisibleOnPage;
    const clone = [...this.state.masterProductList]
    const newSelection = this.state.masterProductList[currentCatIndex].selection.filter(pro => pro.id !== id);     
    clone[currentCatIndex].selection = newSelection;    
    this.setState({
      selectedProduct: null,
      formVisibleOnPage:false,
      masterProductList: clone});    
  }  

  handleClickUp = () => {
    if (this.state.categoryVisibleOnPage >= 5) {
      this.setState({ categoryVisibleOnPage: 0 })
    }
    else {
      this.setState(prevState => ({
        categoryVisibleOnPage: prevState.categoryVisibleOnPage + 1
      }))
    }
  }

  handleClickDown = () => {
    if (this.state.categoryVisibleOnPage <= 0) {
      this.setState({ categoryVisibleOnPage: 5 })
    }
    else {
      this.setState(prevState => ({
        categoryVisibleOnPage: prevState.categoryVisibleOnPage - 1
      }));
    }
  }

  handleChangingSelectedProduct = (id) => {
    const currentCatIndex = this.state.categoryVisibleOnPage;
    const selectedProduct = this.state.masterProductList[currentCatIndex].selection.filter(pro => pro.id === id)[0];  
    this.setState({selectedProduct: selectedProduct});
  }

  handleAddingNewProductToList = (newProduct) => {
    const clone = [...this.state.masterProductList]
    const newSelection = clone[newProduct.prodCategory].selection.concat(newProduct);    
    clone[newProduct.prodCategory].selection = newSelection;
    this.setState({
      masterProductList: clone,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;

    if (this.state.editing){
      currentVisibleState = <EditProductForm product = {this.state.selectedProduct} onEditProduct = {this.handleEditingProductInList} />
      buttonText = "Return to Outfitter";
    } else if (this.state.selectedProduct != null) {
      currentVisibleState = <ProductDetail 
      product = {this.state.selectedProduct} 
      onClickingDelete = {this.handleDeletingProduct}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Outfitting";
    }
    else if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList} />;
      buttonText = "Return to Outfitting"
    } else {
      currentVisibleState = <CategoryList
        currentIndex={this.state.categoryVisibleOnPage} 
        availableProducts={this.state.masterProductList} 
        onProductSelection={this.handleChangingSelectedProduct}
        onBuyProduct={this.handleBuyClick}/>
      buttonText = "Add new Space Product"
    }    

    return (
      <React.Fragment>
        <div className="container">
        <div className="row">          
          <div className="col-md-6">
          <button className="arrow btn btn-outline-light btn-sm" onClick={this.handleClickDown}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg></button>
        <button className="arrow btn btn-outline-light btn-sm" onClick={this.handleClickUp}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg></button>
        {currentVisibleState}
        <button className="arrow btn btn-outline-info btn-block" onClick={this.handleClickForm}>{buttonText}</button>
          </div>
          <div className="col-md-6">
            <CartList cartList={this.state.masterCartList}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default CategoryControl;