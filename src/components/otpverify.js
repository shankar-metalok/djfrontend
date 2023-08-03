import React, { useState } from "react";
import "../styles/otpverify.css";

const OTPVerification = () => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [message, setMessage] = useState("");

  const handleGenerateOTP = () => {
    // Make API call to the backend to generate and send OTP
    fetch("http://localhost:5000/api/generate-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error generating OTP:", error);
        setMessage("Error generating OTP. Please try again later.");
      });
      console.log("opttttttttttttt", otp, message);

  };


  const handleVerifyOTP = () => {
    // Make API call to the backend to verify the entered OTP
    fetch("http://localhost:5000/api/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        setMessage("Error verifying OTP. Please try again later.");
      });

      console.log("opttttttttttttt", otp, message);

  };


  return (
    <div className="otp-section">
      <div className="otp-parent">
        <h1>OTP Verification</h1>
        <div>
          <label>Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
        </div>
        <div className="two-buttons">
          <button onClick={handleGenerateOTP}>Generate OTP</button>
          <button onClick={handleVerifyOTP}>Verify OTP</button>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default OTPVerification;
