
 "use client"

 import Link from "next/link"
  import { useEffect } from "react";
 import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import{signUp}from "../authSlice"
 
export default function SignUp() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
const dispatch=useDispatch()
let Data=useSelector((state)=>state.auth.data)

const notify = (message,status) => {
  if(status=="success"){
    toast.success(message)

  }
  else{
    toast.error(message)
    
  }
  }


useEffect(()=>{
 
    notify(Data.message,Data.status)
   
},[Data])


    return (
      <>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"/>      
        <div className="bg-slate-900 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
           
            <h2 className="mt-10 text-white text-center text-2xl font-bold leading-9 tracking-tight ">
              Create Account
            </h2>
          </div>
  
          <div className=" marker:mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form noValidate className="space-y-6" onSubmit={handleSubmit((data)=>{dispatch(signUp(data))})} >
              <div>
                <label  htmlFor="name" className="text-white block text-sm font-medium leading-6 ">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                 {...register("name",{required:"please enter name",minLength:{value:3,message:"please enter at least 3 letters"}})}
                    type="text"
                    autoComplete="name"
                    placeholder="Enter Your Name"
                 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.name&&<p className=" text-red-700">{errors.name.message}</p>}
                </div>
              </div>
              <div>
                <label  htmlFor="email" className="text-white block text-sm font-medium leading-6 ">
                  Email address
                </label>
                <div className="mt-2">
                <input
                    id="email"
                    {...register("email",{ required: "email is required",  pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,message:"please enter valid email"} })}
                    type="email"
                    autoComplete="email"
                    placeholder="email@example.com"
                    
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email&&<p className=" text-red-700">{errors.email.message}</p>}
                </div>
              </div>
  
              <div>
                <label  htmlFor="Mobileno" className="text-white block text-sm font-medium leading-6 ">
                  Mobile No:
                </label>
                <div className="mt-2">
                  <input
                    id="number"
                    
                  
                    
                    placeholder="Enter Your Mobile No:"
                    {...register("number",{required:"Mobile No is required ",minLength:{value:10,message:"please enter a valid mobile number"},maxLength:{value:10,message:"please enter a valid mobile number"}})}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                   {errors.number&&<p className=" text-red-700">{errors.number.message}</p>}
                </div>
              </div>
              
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-white block text-sm font-medium leading-6 ">
                    Password
                  </label>
                 
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                {...register("password",{required:"password is required",pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,message:`- at least 8 characters
                - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                - Can contain special characters`}})}
                    type="password"
                    autoComplete="current-password"
                    placeholder="password"
                
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.password&&<p className=" text-red-700">{errors.password.message}</p>}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-white block text-sm font-medium leading-6 ">
                   Confirm Password
                  </label>
                 
                </div>
                <div className="mt-2">
                  <input
                    id="confirm_password"
                 {...register("confirm_password",{validate: (value, formValues) => value === formValues.password||"pasword not mach"})}
                    type="password"
                    autoComplete="current-password"
                    placeholder="confirm password"
                
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.confirm_password&&<p className=" text-red-700">{errors.confirm_password.message}</p>}
                </div>
              </div>
             
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm  text-gray-200">
              
              If Account has already
              <Link href="/login" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-500 ml-3">
                Sign In
              </Link>
            </p>
          
          </div>
        </div>
      </>
    )
  }