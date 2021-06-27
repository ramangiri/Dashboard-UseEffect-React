import { useState } from "react"
import userContext from "../Users/userContext";
import { useContext } from "react";

export default function Productscreate(){

    let productInfo = useContext(userContext);

    let [Name,setname] = useState("");
    let [Category,setCategory] = useState("");
    let [Price,setPrice] = useState("");
    
    let productSubmit = (e) => {
        e.preventDefault();
        productInfo.setProductData([...productInfo.productData, {
            Name,
            Category,
            Price
        }])
    }
    return <>
    
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1>Create Product Form</h1>
            </div>
        </div>
    <form onSubmit={productSubmit}>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name</label>
      <input type="text" class="form-control" placeholder="Name" value={Name} onChange={(e)=>setname(e.target.value)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Category</label>
      <input type="text" class="form-control" placeholder="Category" value={Category} onChange={(e)=>setCategory(e.target.value)} />
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Price</label>
      <input type="number" class="form-control" placeholder="Price" value={Price} onChange={(e)=>setPrice(e.target.value)} />
    </div>
    <div className="col-md-12">
        
            <input class="btn btn-primary" type="submit" value="submit"/>
       
    </div>
   </div>
   </form>
   </div>
    </>
}