import { useEffect, useState } from "react"
import userContext from "../Users/userContext";
import { useContext } from "react";
import { useHistory } from "react-router";

export default function Productsedit(props){

    let productInfo = useContext(userContext);

    let history = useHistory();

    let [Name,setname] = useState("");
    let [Category,setCategory] = useState("");
    let [Price,setPrice] = useState("");

    useEffect(async ()=>{
        let data = await fetch(`https://606ff05f85c3f0001746f0d5.mockapi.io/products/${props.match.params.id}`);
        let parsedData = await data.json();
        setname(parsedData.Name)
        setCategory(parsedData.Category)
        setPrice(parsedData.Price)
    },[]);
    
    let productSubmit = async (e) => {
        e.preventDefault();
        productInfo.setProductData([...productInfo.productData, {
            Name,
            Category,
            Price
        }])
        await fetch(`https://606ff05f85c3f0001746f0d5.mockapi.io/products/${props.match.params.id}`,{
        method: "PUT",
        body: JSON.stringify({
          Name,
          Category,
          Price
        }),
        headers: {
          "Content-type":"application/json"
        }})

        history.push('/products');
    }
    return <>
    
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1>Edit Product Form</h1>
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