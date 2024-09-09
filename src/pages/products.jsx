import { products } from "../data/products";

export function Products() {
    return (

      <div>
      <div className='Menu'>
        <div><h2>Products</h2></div>
        <div><button>Create Product</button></div>
      </div>   
        <div className="App">          
          {
            products.map((item)=>{ return (
          <div className="product-list"  key={item.id}>      
            <div className="product">
              <div className="product-preview">
                <img
                  src={item.image}
                  alt="some product"
                  width="350"
                  height="350"
                />
              </div>
            <div className="product-detail">
              <div className="product-text-input"><h1>Product name: {item.name}</h1></div>
              <div className="product-text-input"><h2>Product price: {item.price} Baht</h2></div>
              <div className="product-text-input"><p>Product description: {item.description}</p></div>              
              <div className="button-group">
                <button>View</button>
                <button>Edit</button>
              </div>
            </div>  
            <button className="delete-button">x</button>

          </div>          
        </div>
            ) 
        })}
        </div>
        </div>
      );
}
