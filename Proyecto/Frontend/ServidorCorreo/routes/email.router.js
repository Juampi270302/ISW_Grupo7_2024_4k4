import Router from "express";
import {enviarMail} from "../scripts/sendEmail.js";

const routerEmail = Router()

routerEmail.post("/sendEmail",
    async (req, res) => {
        const requestBody = req.body;
        console.log(requestBody);
        await enviarMail(requestBody).then(() => {
                console.log("Mail enviado")
                res.send(true)
            }
        ).catch(error => {
            res.send(false)
            console.log(error)
        })
    })

export default routerEmail