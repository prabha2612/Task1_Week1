import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "fortestingcrud123@gmail.com",
        pass: "meji clit egcq ckuy"
    },
});

export default transporter;