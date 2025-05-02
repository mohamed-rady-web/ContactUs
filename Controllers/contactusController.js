const messageModel = require('../Models/contactusModel');
const sendEmail= require('../Models/sendEmailModel');

exports.message = async (req, res) => {
    try {
        const { name, email, service, projectDetails} = req.body;
        const newmessage = new messageModel({ name, email, service, projectDetails });
        newmessage.save();
        res.status(200).json({ message: 'Message sent successfully' });
         sendEmail(email, "Contact Us", `Name: ${name}\nEmail: ${email}\nservice: ${service}\nprojectDetails: ${projectDetails}`);
    } catch (error) {
        console.error("Error saving message information:", error);
        res.status(500).json({ message: "Something went wrong" });
    }

}