

import type { NextPage } from "next"
import LoginForm from "../../app/auth/loginForm"
import { useCookies } from "react-cookie"
import { useRouter } from "next/navigation"





const Login: NextPage = () => {

    const [cookies,setCookies] = useCookies (['target-token'])
    const router = useRouter();

    return (
    <>

      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-12"
          />
          <h2 className= "text-center text-3xl tracking-tight font-bold text-gray-900">
            Login
                </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
           < LoginForm  setCookies ={setCookies} router={router} />
           </div>
          </div>
      </div>
    </>
  )
}
  export default Login;
