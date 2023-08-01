import React from "react";
import "../styles/signup.css";
import { useState } from "react";

const Signup = () => {
  const [signinup, setsigninup] = useState(true);

  const signin = () => {
    setsigninup(true);
  };
  const signup = () => {
    setsigninup(false);
  };

  return (
    <div className="signup-section">
      <div className="d-flex gap-2 justify-content-center">
        <h3 className="btn btn-primary" onClick={signin}>
          sign in
        </h3>
        <h3 className="btn btn-primary" onClick={signup}>
          sign up
        </h3>
      </div>

      {signinup ? (
        <div>
          <h4>Sign In To Your Account</h4>
          <div>
            <input type="text" placeholder="Email" />
            <br />
            <input type="password" placeholder="password" />
          </div>

          <button>login</button>
        </div>
      ) : (
        <div>
          <h4>Sign Up To Your Account</h4>
          <div>
            <input type="text" placeholder="Full Name" />
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <input type="password" placeholder="password" />
          </div>

          <button>Create Account</button>
        </div>
      )}
    </div>
  );
};

export default Signup;
