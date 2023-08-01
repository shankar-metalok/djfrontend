import React, { useState, useEffect } from 'react';
import '../styles/signup.css'

import { useNavigate } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate();



const [regsuccess,setregsuccess] = useState(null)
const [formnone,setformnone] = useState(true)

const [regdata,setregdata] = useState(
  {
    restaurantname:'',
    businessmail:'',
    phonenumber:'',
    location:'',
    password:'',
    confirmpassword:''
  }
)

const eventChange = (e) =>{
const {name,vaue} = e.target

setregdata({...regdata,[e.target.name]:e.target.value})


}


const regsubmit = () =>{

  if(regdata.restaurantname!=='' && regdata.businessmail && regdata.phonenumber && regdata.location && regdata.password && regdata.confirmpassword){
    setregsuccess(true)
    setformnone(false)
  }

}

useEffect(()=>{
  if(formnone===false){
    console.log('register user data',regdata)

  }
})

const successfun = () =>{
  navigate('/signup');


}







  return <div>

   {regsuccess &&
     <div className='text-center'>
        <h1>Registered Successfully</h1>
        <button className='btn btn-primary' onClick={successfun} >done</button>
     </div>
   }

    {formnone &&
      <div className='reg-section'> 
       <h3 className='mb-5'>Registration Details</h3>
       <div className='input-section'>
        <input type="text" placeholder='Restaurant Name' name='restaurantname' value={regdata.restaurantname} onChange={eventChange}/>
        <input type="text" placeholder='Business Mail' name='businessmail' value={regdata.businessmail} onChange={eventChange}/>
        <input type="number" placeholder='Phone Number' name='phonenumber' value={regdata.phonenumber} onChange={eventChange}/>
        <input type="text" placeholder='Location' name='location' value={regdata.location} onChange={eventChange}/>
        <input type="password" placeholder='Password' name='password' value={regdata.password} onChange={eventChange}/>
        <input type="password" placeholder='Confirm Password' name='confirmpassword' value={regdata.confirmpassword} onChange={eventChange}/>

       </div>
 
       <button className='m-5' onClick={regsubmit} >Continue</button>
    </div>}
  

  </div>;
};

export default Register;
