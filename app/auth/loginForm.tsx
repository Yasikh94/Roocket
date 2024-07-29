import { Form, FormikProps, withFormik } from "formik";
import Input from "../store/components/shared/forms/input";
import { LoginFormValuesInterface } from "../contract/auth";
import * as yup from "yup"
import InnerLoginForm from "../components/shared/forms/auth/innerLoginForm";
import callApi from "../helpers/Callapi";
import ValidationError from "../exceptions/validationErrors";


/*interface LoginFormValues {

    email : string ,
    password : string
  
  }*/



interface loginFormProps {

    setCookies : any
    
}

const LoginFormValueSchema = yup.object().shape({
 
   
    email : yup.string().required().email()   ,
    password : yup.string().required().min(8)  ,
});


const LoginForm = withFormik<loginFormProps,LoginFormValuesInterface> ({

    mapPropsToValues : props =>
        {

        return {
           
            email :'',
            password :''
        }
    },
    validationSchema : LoginFormValueSchema,
    handleSubmit : async(values , {props,setFieldError}) => {

        try {
        const res = await callApi().post('/auth/login',values)

        
        if (res.status == 200) {

            console.log(res.data.token);
            props.setCookies('target-token',res.data.token , {
            'maxAge': 3600*24*30 ,
            'domain': 'localhost' ,
            'path' : '/' ,
            'sameSite' :'lax'
            })
        }
    } catch (error){

        if(error instanceof ValidationError){
            console.log(error.message)
            setFieldError('email','wrong');
        }
    }
    }
    
})(InnerLoginForm)

export default LoginForm;