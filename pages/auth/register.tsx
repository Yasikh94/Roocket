

import type { NextPage } from "next"
import RegisterForm from "../../app/auth/registerForm"



const Register: NextPage = () => {

    return (
    <>
      
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-12 w-auto"
          />
          <h2 className= "mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
            Register
                </h2>
        </div>
    
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
           <RegisterForm  name= "Yasaman Khanghoee" />
           </div>
          </div>     
      </div>
    </>
  )
}
  export default Register