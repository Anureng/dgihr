const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async (options) => {
  try {
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: options.email,
      subject: options.subject,
      html: options.html,
    };
    
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Email send error:', error);
    throw error;
  }
};

const sendOrderConfirmation = async (email, order) => {
  const html = `
    <h2>Order Confirmation</h2>
    <p>Thank you for your order!</p>
    <p><strong>Order Number:</strong> ${order.orderNumber}</p>
    <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
    <p>Your order is being processed and will be shipped soon.</p>
  `;
  
  await sendEmail({
    email,
    subject: `Order Confirmation - ${order.orderNumber}`,
    html,
  });
};

const sendPasswordReset = async (email, resetToken) => {
  const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;
  const html = `
    <h2>Password Reset Request</h2>
    <p>You have requested to reset your password.</p>
    <p>Click the link below to reset your password:</p>
    <a href="${resetUrl}">Reset Password</a>
    <p>This link will expire in 10 minutes.</p>
    <p>If you didn't request this, please ignore this email.</p>
  `;
  
  await sendEmail({
    email,
    subject: 'Password Reset Request',
    html,
  });
};

module.exports = {
  sendEmail,
  sendOrderConfirmation,
  sendPasswordReset,
};