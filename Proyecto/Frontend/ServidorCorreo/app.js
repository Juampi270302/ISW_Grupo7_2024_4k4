import express from "express"
import {enviarMail} from "./scripts/sendEmail.js";
import cors from "cors"
import routerEmail from "./routes/email.router.js";

const app = express()
app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use("/", routerEmail)

app.listen(3000, () => {
    console.log('Server started on port 3000');
})


