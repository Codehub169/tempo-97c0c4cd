// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, subject } = req.body;

    // Basic validation
    if (!name || !email || !message || !subject) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Simulate email sending - In a real application, integrate an email service here.
    // For example, using Nodemailer as initially planned.
    console.log('Received contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Respond to the client
    // In a real scenario, you would await the email sending promise.
    try {
      // Placeholder for email sending logic
      // await sendEmail({ name, email, subject, message }); // This function would use Nodemailer
      
      // For now, we'll just return a success message as SMTP is not configured.
      console.log('Contact form processed (simulation - no email sent).');
      res.status(200).json({ message: 'Thank you for your message! We will get back to you soon.' });

    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ message: 'Sorry, something went wrong. Please try again later.' });
    }

  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
