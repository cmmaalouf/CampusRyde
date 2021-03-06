const functions = require('firebase-functions');
const admin = require("firebase-admin");
const nodemailer = require('nodemailer');
const cors = require('cors')({
  origin: true
});
admin.initializeApp();


/**
 * Here we're using Gmail to send
 */
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'CampusRyde@gmail.com',
    pass: 'HoyaHacks2020!'
  }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {

    // getting dest email by query string
    const dest = req.query.dest;
      const html = req.query.content;

    const mailOptions = {
      from: 'CampusRyde <CampusRyde@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
      to: dest,
      subject: 'Ride Confirmation', // email subject
      html: html
      //html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
              //  <br />
              //  <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
            //` // email content in HTML
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }

    });
  });
});
