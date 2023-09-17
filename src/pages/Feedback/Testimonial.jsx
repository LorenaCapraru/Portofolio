// src/components/TestimonialCard.js

import React from "react";
import "./Testimonial.css";

const TestimonialCard = ({ name, role, text }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">{text}</p>
      <p className="testimonial-name">{name}</p>
      <p className="testimonial-company">{role}</p>
    </div>
  );
};

export default TestimonialCard;
