import { Form, FormikProps, withFormik } from "formik";
import Input from "../store/components/shared/forms/input";
import * as yup from "yup"
import { RegisterFormValuesInterface } from "../contract/auth";
import InnerRegisterForm from "../components/shared/forms/auth/innerRegisterForm";
import callApi from "../helpers/Callapi";
import { Router } from "next/router";






interface registerFormProps {

    name ?:  string

}

const registerFormValueSchema = yup.object().shape({
 
    name : yup.string().required().min(4)  ,
    email : yup.string().required().email()   ,
    password : yup.string().required().min(8)  ,
});


const RegisterForm = withFormik<registerFormProps,RegisterFormValuesInterface> ({

    mapPropsToValues : props =>
        {

        return {
            name :props.name ?? '',
            email :'',
            password :''
        }
    },
    validationSchema : registerFormValueSchema,
    handleSubmit :async(values) => {

        const res = await callApi().post('/auth/register', values);
        if(res.status == 201)
        {

            Router.push('/auth/login')

        }
        
    }
    
})(InnerRegisterForm)

export default RegisterForm;