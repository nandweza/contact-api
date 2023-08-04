const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const emailConfig = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
    },
};
  
const mailTransporter = nodemailer.createTransport(emailConfig);

exports.submitMessage = (req, res) => {
    const { name, email, subject, message } = req.body;

    // Compose the email
    const mailOptions = {
        from: email,
        to: 'allannandweza@gmail.com',
        subject: `Contact Form - ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    // Send the email
    mailTransporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: 'Failed to send email' });
        } else {
            console.log('Email sent: ' + info.response);
            // res.json({ message: 'Email sent successfully' });
            res.redirect('https://nandweza.github.io/allan/');
        }
    });
}
