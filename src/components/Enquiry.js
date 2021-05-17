import React from 'react'
import emailjs from 'emailjs-com';


function Enquiry ()  {


    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_esblf9l', 'template_60dbg9a', e.target, 'user_PVvyhxe2IJW8P47dQQtLV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
        <div className="keeper-enquiry-container">
            <div className="enquiry-container">
            <label for="name">Name:</label>
                <input type="text" name="name" id="name" placeholder="Enter your name"/>
            </div>
            <div className="enquiry-container">
            <label for="mobile">Mobile Number:</label>
                <input type="tel" name="mobile" id="mobile" placeholder="Enter your Mobile"/>
            </div>
            <div className="enquiry-container">
            <label for="email">E-Mail:</label>
                <input type="email" name="email" id="email" placeholder="Enter your E-mail"/>
            </div>
            <input type="submit" value="submit" id="submit"/>
        
        </div>
        </form>
    )
}

export default Enquiry;
