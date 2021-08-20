const express= require('express');
require('dotenv').config();
const nodemailer = require('nodemailer');

var path= require('path');


const app= express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));



app.post('/api/contact', (req, res)=>{
    const {
        email,
        subject,
        message
    }= req.body;

    console.log(req.body)
   
        if (!email||!subject||!message){
            return res.status(400).json({msg:'Fill all fields'})
        }



        const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'abahwisdom@gmail.com',
            pass: process.env.PASSWORD 
        }
        });

        const mailOptions = {
        from: 'Resume Site',
        to: 'abahwisdom@gmail.com',
        subject: subject,
        text: `from ${email} 

${message}`
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json(
                'Email sent'
            )
        }
        });

        
      
})

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'));
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend', 'build', 'index.html'))
    })
}


const PORT= process.env.PORT||5000
app.listen(PORT, ()=>{console.log('server running...')})