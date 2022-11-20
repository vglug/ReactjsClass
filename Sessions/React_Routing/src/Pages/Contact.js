import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Contact Page!</h1>
      <p
        onClick={() =>
          navigate({
            pathname: "/",
          })
        }
              style={{cursor: "pointer", color: "blue"}}
      >
        Go To Home Page
      </p>
    </div>
  );
}

export default Contact;
