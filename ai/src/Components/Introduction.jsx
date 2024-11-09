import React from 'react';

import aiImage from '../assets/ai-Image.webp'; 

function Introduction() {
  return (
    <section className="introduction">
      <div className="intro-content">
        <div className="text-content">
          <h2>Introduction</h2>
          <p>
            Proviz School of AI is dedicated to providing high-quality education in artificial intelligence. Our mission is to empower students with the knowledge and skills they need to excel in the rapidly evolving world of AI.
          </p>
          <p>
            We offer a range of courses covering machine learning, deep learning, natural language processing, and more, with hands-on projects designed to give real-world experience. Join us to stay ahead of the curve in the AI industry and become part of a community committed to innovation and growth.
          </p>
        </div>
        <div className="image-content">
          <img src={aiImage} alt="AI concept illustration" />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
