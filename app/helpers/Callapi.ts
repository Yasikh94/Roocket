import axios from "axios";
import { error } from "console";
import { config } from "process";
import ValidationError from "../exceptions/validationErrors";

const callApi = () => {

    const axiosInstance = axios.create ({
        baseURL : 'http://localhost:5000/api'
    })

    axiosInstance.interceptors.request.use(

        (config) => {

            return config
        },
        err => Promise.reject(err)
    )

    axiosInstance.interceptors.response.use(
        res => {

            return res ;
        },


        err => {
            const res = err?.response

            if(res){

                if(res.status == 422)
                    throw new ValidationError(res.data.errors)
            }

            Promise.reject(err)

        }
    )
    
    return axiosInstance;
}

export default callApi;