import { Link } from "react-router-dom";
import userContext from "./userContext";
import { useContext, useEffect, useState } from "react";

export default function Users(){
    let tableData = useContext(userContext);
    
    let [userList,setUserList] = useState([]);
    useEffect(async ()=> {
        let users = await fetch("https://606ff05f85c3f0001746f0d5.mockapi.io/users");
        let userData = await users.json();
        setUserList([...userData])
      
    },[])
  
    return <>
    <div class="container-fluid">


<h1 class="h3 mb-2 text-gray-800">Tables</h1>


<Link to="/userscreate">Create User</Link>
<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Users List</h6>
    </div>
    
    <div class="card-body">
        <div class="table-responsive">
            { userList.length > 0 ? 
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                    
                    userList.map((obj)=>{
                        return <tr>
                        <td>{obj.Name}</td>
                        <td>{obj.Position}</td>
                        <td>{obj.Office}</td>
                        <td>{obj.Age}</td>
                        <td>{(obj.StartDate).slice(0,10)}</td>
                        <td>${obj.Salary}</td>
                        <td>
                            <Link to={`/usersedit/${obj.id}`}>Edit User</Link>
                        </td>
                    </tr>
                        
                    })
                    }
                  </tbody>
            </table>
            : <div><h1>Loading..!</h1></div>
            }
        </div>
    </div>
</div>

</div>
    </>
}