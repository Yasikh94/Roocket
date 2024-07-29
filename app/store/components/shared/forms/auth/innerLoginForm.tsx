import { Form, FormikProps } from "formik"
import Input from "../input"
import { LoginFormValuesInterface } from "../../../../../contract/auth"

const InnerLoginForm = (props:FormikProps<LoginFormValuesInterface>) => {

    return (

        <Form  className="space-y-6 bg-pink-100">
            <div>
                <Input name='email' type='email' label="Email Address"/>
            </div>

            <div>
                <Input name='password' type='password' label="Password"/>
            </div>
          
            <div className=" mt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
            
          </Form>
    )

}