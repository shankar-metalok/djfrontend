import React from "react";
import { useState } from "react";
import "../styles/orderdata.css";

const Orderdata = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
  };

  const handleReject = () => {
    setIsRejected(true);
  };

  const getTimeString = () => {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const amOrPm = now.getHours() >= 12 ? 'PM' : 'AM';
    return `${hours}:${minutes} ${amOrPm}`;
  };
  return (
    <div
      className={`order-container ${
        isAccepted ? "accepted" : isRejected ? "rejected" : ""
      }`}
    >
      <h4 className="order-id text-center">Order ID: 1234  </h4>
      <h5 className="order-name text-center">1 x pizza ₹150</h5>
      {isAccepted || isRejected ? (
        <p className="time-text text-center">
          Order {isAccepted ? "Accepted" : "Rejected"} at {getTimeString()}
        </p>
      ) : (
        <>
        <h6 className="text-center">Set food preparation time</h6>
        <input type="text" className="mx-5"  />
         <div className="text-center">
            <button className="accept-btn" onClick={handleAccept}>
                Accept
            </button>
            <button className="reject-btn" onClick={handleReject}>
                Reject
            </button>
         </div>
        </>
      )}

      <div className="m-3 text-center">
        <input type="text" placeholder="send message" />
        <br />
        <button className="btn btn-primary ">send</button>
      </div>
    </div>
  );
};

export default Orderdata;
