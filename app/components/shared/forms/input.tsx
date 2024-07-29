import { ErrorMessage, Field } from "formik";
import { FC } from "react";

interface inputClassname {

    name:string,
    type ?:string,
    label:string,
    errorMessage ?:string,
    labelClassName ?: string,
    inputClassName ?:string


}


const Input : FC <inputClassname> = ({

name ,
type = "text" ,
labelClassName,
label,
inputClassName ,
errorMessage


}) => {


    return (

        <>
         <label htmlFor= {name} className={`block text-sm font-medium text-gray-700 ${labelClassName ?? ''}`}>
                {label}
              </label>
                <Field
                  id={name}
                  name={name}
                  type= {type}
                  required
                  className={`mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${ inputClassName ?? ''}`}
                />

        <ErrorMessage name={name}  className= {`text-red-950 text-sm ${errorMessage ?? ''}`} component="div"/>
        
        </>


    )


}

export default Input;