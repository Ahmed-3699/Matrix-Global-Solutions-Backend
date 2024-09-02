const ClientsSchema = require("../Model/Clients.schema");
const nodemailer = require('nodemailer')

const SendForm = async (req, res) => {
    console.log(req.body);
    
    var response = await ClientsSchema.create(req.body)

    if (response) {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Outlook SMTP server
            port: 587, // Outlook SMTP port
            secure: false, // false for TLS - as a boolean not string - if you don't have a certificate
            auth: {
                user: 'matrixglobal7860@gmail.com',
                pass: 'hgrm eanx czxs bbqu'
            }
        });

        var html = `
        <div style="height: max-content; width: max-content">
        
            <div>
                <div style='height: max-content; width: max-content'>
                    <p><span>${req.body.firstname}</span> <span>${req.body.lastname}</span/></p>
                    <p><span>${req.body.email}</span></p>
                    <p><span>${req.body.message}</span></p>
                </div>
                <div>
                </div>
            </div>
    </div>`

        try {
            await transporter.sendMail({
                from: req.body.email,
                to: "matrixglobal7860@gmail.com",
                subject: "Clients Information",
                html: html
            });
            res.status(200).send('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Failed to send email');
        }

    }
}

const ClientsInformation = async (req, res)=>{
    const response = await ClientsSchema.find(req.body);
        console.log(response, "response");
        res.send(response);
}

module.exports = { SendForm, ClientsInformation }