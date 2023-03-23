import React from 'react';
import emailjs from "emailjs-com"

//this form is just an example of a mailer and had parts implemented into app.js

const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_wxk7fxi', 
            'template_7dijwtb', 
            e.target,
            'meUuVWBcqHqD9aVvQ'
            ).then(res=>{
                console.log(res);
            }).catch(err=> console.log(err));
    }
return (
        <div>
                <h1>Contact Form</h1>
                <form className="row" style={{ margin: "25px 85px 75px 100px "}} 
                onSubmit={sendEmail}
                >
                    <label>name</label>
                    <input type="text" name="name" className="form-control" />

                    <label>Email</label>
                    <input type="email" name="user_email" className="form-control" />

                    <label>Message</label>
                    <textarea name="message" rows="4" />
                    <input type="submit" value="Send" className="form-control" />
                </form>
        </div>
    );
}

export default ContactComponent;