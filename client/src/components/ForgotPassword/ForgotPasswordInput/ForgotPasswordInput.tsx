import {useState} from 'react'
import{useNavigate}from "react-router-dom"
import Cookies from 'universal-cookie';
import { RESET_PASSWORD } from '../../../costants/endpoints';
 
const ForgotPasswordInput = ()=>{
    const [password,setPassword] =useState<String>("");
    const cookies = new Cookies();
    const token =cookies.get('user')
    const navigate = useNavigate()
    const resetPassword = ()=>{
      console.log(token)
      const requestOptions = {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'Authorization':token
      },
        body: JSON.stringify({
          password: password,
        }),
      };
      fetch(RESET_PASSWORD, requestOptions)
          .then((response) => response.json())
        .then((data) =>{
          navigate('/')
          console.log(data)
        });
    }
   
    return(
        <>
       
      <div className="mb-4">
        <input
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setPassword(e.currentTarget.value)
        }
          type="password"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput1"
          placeholder="New password"
        />
     
        <button
          type="button"
          className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-2"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          onClick={()=>resetPassword()}
        >
          Reset Password
        </button>
      </div>
        </>
    )
}

export default ForgotPasswordInput