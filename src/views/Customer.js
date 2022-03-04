import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './Customer.css';

export default function Customer() {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState();
  
  const checkout = () => {
    const name = document.getElementById("name").value;
    document.getElementById("name").value = "";
    dispatch({type:'SET_CUSTOMER', customer});
    dispatch({type:'SET_CUSTOMER_SOBR', customer});
  }

  
  return (
    <div className="bg-customer">
      <h1>Customer data</h1>
      <input type="text" 
             placeholder="name" 
             id="name"
             onChange={
              (e)=>{
                 setCustomer({...customer, name:e.target.value});
              }}/>
      <button onClick={checkout}>Save</button>      
    </div>
    
  )

  

  
}
