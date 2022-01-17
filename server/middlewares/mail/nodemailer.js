function Verification(){
	// const mailgun = require('mailgun-js');

var API_KEY = '9761f77ebe471c97fdb29e6118324e61-9ad3eb61-70b1bed9';
var DOMAIN = 'sandboxbe752972ae5e4aeaa75b6b8460d0cd34.mailgun.org';
var mailgun = require('mailgun-js')
       ({apiKey: API_KEY, domain: DOMAIN});
 
sendMail = function(sender_email, receiver_email,
         email_subject, email_body){
 
  const data = {
    "from": sender_email,
    "to": receiver_email,
    "subject": email_subject,
    "text": email_body
  };
   
  mailgun.messages().send(data, (error, body) => {
    if(error) console.log(error)
    else console.log(body);
  });
}
 
var sender_email = 'smblg46@gmail.com'
var receiver_email = 'smir.mishra1551@gmail.com'
var email_subject = 'Mailgun Demo'
var email_body = 'This is demo mail sent by Mailgun'
 
// User-defined function to send email
sendMail(sender_email, receiver_email,
            email_subject, email_body)
}
