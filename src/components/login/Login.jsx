"use client"
import Image from "next/image"
 import Link from "next/link"
 
 import { useForm } from "react-hook-form";

 
export default function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();





    return (
      <>
        
        <div className="bg-slate-900 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className="mt-10 text-white text-center text-2xl font-bold leading-9 tracking-tight ">
              Sign in to your account
            </h2>
          </div>
  
          <div className=" marker:mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form noValidate className="space-y-6" onSubmit={handleSubmit((data)=>{console.log(data)})}>
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
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-white block text-sm font-medium leading-6 ">
                    Password
                  </label>
                  <div className="text-sm">
                    <Link href="#" className="font-semibold text-indigo-400 hover:text-indigo-500">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                <input
                    id="password"
                {...register("password",{required:"password is required",pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,message:`- at least 8 characters\n- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n  - Can contain special characters`}})}
                    type="password"
                    autoComplete="current-password"
                    placeholder="password"
                
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.password&&<p className=" text-red-700">{errors.password.message}</p>}
                </div>
              </div>
              <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"  />
                         
                          
                            <span htmlFor="remember" className="text-gray-200 dark:text-gray-300 ml-3 text-sm" >Remember me</span>
                         </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm  text-gray-200">
              
              Don&apos;t have an account?
              <Link href="/signup" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-500 ml-3">
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }