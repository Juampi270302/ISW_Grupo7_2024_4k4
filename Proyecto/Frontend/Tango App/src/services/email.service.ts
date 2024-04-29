import {httpService} from "@/services/http.service";
import {DatosEmail} from "@/utils/Types";
import axios from "axios";

export const sendEmail = async (dataEmail: DatosEmail) => {
    try{
        const result = await httpService("/sendEmail",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            data:dataEmail
        })
        return result
    } catch (error){
        return error
    }
}