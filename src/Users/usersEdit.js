import { useEffect, useState } from "react"
import  userContext  from "./userContext";
import { useContext } from "react";
import { useHistory } from "react-router";

export default function Usersedit(props){

    let userInfo = useContext(userContext);
    let history = useHistory();

    let [Name,setFirstname] = useState("");
    let [Position,setPosition] = useState("");
    let [Office,setOffice] = useState("");
    let [Age,setAge] = useState("");
    let [StartDate,setDate] = useState("");
    let [Salary,setSalary] = useState("");

    useEffect(async(e) =>{
        let data = await fetch(`https://606ff05f85c3f0001746f0d5.mockapi.io/users/${props.match.params.id}`);
        let parsedData = await data.json();
        setFirstname(parsedData.Name);
        setPosition(parsedData.Position);
        setOffice(parsedData.Office);
        setAge(parsedData.Age);
        setDate((parsedData.StartDate).slice(0,10));
        setSalary(parsedData.Salary);
        
    },[])
    
    let userSubmit = async (e) => {
        e.preventDefault();
        userInfo.setUserData([...userInfo.userData, {
            Name,
            Position,
            Office,
            Age,
            StartDate,
            Salary
        }])

      await fetch(`https://606ff05f85c3f0001746f0d5.mockapi.io/users/${props.match.params.id}`,{
        method: "PUT",
        body: JSON.stringify({
          Name,
          Position,
          Office,
          Age,
          StartDate,
          Salary
        }),
        headers: {
          "Content-type":"application/json"
        }

      })

      history.push("/users");
    }


    return <>
    
    <div className="container"no>
        <div className="row">
            <div className="col-lg-12">
                <h1>Edit User Form</h1>
            </div>
        </div>
    <form onSubmit={userSubmit}>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">FirstName</label>
      <input type="text" class="form-control" placeholder="Firstname" value={Name} onChange={(e) => setFirstname(e.target.value)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Position</label>
      <input type="text" class="form-control" placeholder="Position" value={Position} onChange={(e)=>setPosition(e.target.value)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Office</label>
      <input type="text" class="form-control" placeholder="Office" value={Office} onChange={(e)=>setOffice(e.target.value)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Age</label>
      <input type="number" class="form-control" placeholder="Age" value={Age} onChange={(e)=>setAge(e.target.value)}/>
    </div>
    <div class="form-group col-md-6">
    <label for="example-date-input" class="col-2 col-form-label">Date</label>
    <input class="form-control" type="date" value="2011-08-19" value={StartDate} onChange={(e)=>setDate(e.target.value)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Salary</label>
      <input type="number" class="form-control" placeholder="Salary" value={Salary} onChange={(e)=>setSalary(e.target.value)}/>
    </div>
    <div className="row">
        <div className="col-lg-6">
            <input class="btn btn-primary" type="submit" value="submit"/>
        </div>
    </div>
   </div>
   </form>
   </div>
    </>
}