const express = require('express');
const bodyParser = require('body-parser');
const { sendEmail } = require('./Server/mailer'); // Import the email sending function

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));
// Contact form route
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
  
    try {
      await sendEmail(
        'hernandezlnathaniel@gmail.com', // Change to your desired recipient
        `Message from ${name}`,
        `From: ${email}\n\n${message}`
      );
      res.status(200);
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  });
  

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
