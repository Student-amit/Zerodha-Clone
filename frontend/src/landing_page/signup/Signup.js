import React from 'react';
import { Link } from "react-router-dom";

import { redirect } from 'react-router-dom';
function Signup() {
    return ( 
       <div class="align-item-center p-5 ">
       
        <div class="row g-3 align-items-center p-7 mt-3 col-4  ">
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label "  type="required">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com"></input>
 </div>
 <div>
   <label for="exampleFormControlInput1" class="form-label "  required>User Name</label>
    <input type='name' class="form-control" placeholder='username'></input>
 </div>
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label"  required>Password</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"></input>
  </div>
  
  <Link class=" btn-primary d-grid gap-2 col-2 mx-auto" type="button required"  to="/">
 
  <button class="btn btn-primary" type="button">Signup</button>
 
  </Link>
 </div>
  
       </div>
     );
}

export default Signup;
