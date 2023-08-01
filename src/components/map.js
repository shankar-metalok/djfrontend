import React, { useState } from 'react';
import axios from 'axios';

const SendOTP = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSendOTP = () => {
    // Validate the phone number format before sending OTP (Optional)
    const phoneNumberRegex = /^\+[1-9]\d{1,14}$/;
    if (!phoneNumber.match(phoneNumberRegex)) {
      setError('Invalid phone number format. Please use the format: +CountryCodePhoneNumber');
      return;
    }

    // Send the OTP using Twilio API
    axios
      .post('/api/send-otp', { phoneNumber: phoneNumber })
      .then((response) => {
        setOtpSent(true);
        setError('');
      })
      .catch((error) => {
        setError('Failed to send OTP. Please try again later.');
        console.error('Error sending OTP:', error);
      });
  };

  return (
    <div>
      <h2>Send OTP</h2>
      <input
        type="text"
        placeholder="Enter phone number (+CountryCodePhoneNumber)"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <button onClick={handleSendOTP}>Send OTP</button>
      {otpSent && <p>OTP sent to {phoneNumber}. Please check your phone for the OTP.</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default SendOTP;
