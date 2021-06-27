import { useState } from "react"
import  userContext  from "./userContext";
import { useContext } from "react";

export default function Userscreate(){

    let userInfo = useContext(userContext);

    let [firstName,setFirstname] = useState("");
    let [position,setPosition] = useState("");
    let [Office,setOffice] = useState("");
    let [Age,setAge] = useState("");
    let [Date,setDate] = useState("");
    let [Salary,setSalary] = useState("");
    
    let userSubmit = (e) => {
        e.preventDefault();
        userInfo.setUserData([...userInfo.userData, {
            firstName,
            position,
            Office,
            Age,
            Date,
            Salary
        }])
    }
    return <>
    
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1>Create User Form</h1>
            </div>
        </div>
    <form onSubmit={userSubmit}>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">FirstName</label>
      <input type="text" class="form-control" placeholder="Firstname" value={firstName} onChange={(e) => setFirstname(e.target.value)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Position</label>
      <input type="text" class="form-control" placeholder="Position" value={position} onChange={(e)=>setPosition(e.target.value)}/>
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
    <input class="form-control" type="date" value="2011-08-19" value={Date} onChange={(e)=>setDate(e.target.value)}/>
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