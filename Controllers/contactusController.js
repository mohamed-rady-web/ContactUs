const messageModel = require('../Models/contactusModel');
const sendEmail= require('../Models/sendEmailModel');

exports.message = async (req, res) => {
    try {
        const { name, email, phonenumber, message} = req.body;
        const newmessage = new messageModel({ name, email, phonenumber, message });
        await newmessage.save();
        await sendEmail(email, "Contact Us", `Name: ${name}\nEmail: ${email}\nPhone Number: ${phonenumber}\nMessage: ${message}`);
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error("Error saving message information:", error);
        res.status(500).json({ message: "Something went wrong" });
    }

}