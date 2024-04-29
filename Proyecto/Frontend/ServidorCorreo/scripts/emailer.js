import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "tangoappisw4k4@gmail.com",
        pass: "m t m d w w o z c y h v h x k n",
    },
});