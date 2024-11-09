import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: '"Proviz School of AI changed my life. The courses are top-notch!"',
      name: 'Student A'
    },
    {
      quote: '"An incredible journey in AI education. Highly recommended!"',
      name: 'Student B'
    },
    {
      quote: '"The best AI program I have attended. Learned so much!"',
      name: 'Student C'
    },
    {
      quote: '"Proviz opened doors for me in the AI field. Thank you!"',
      name: 'Student D'
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p>"{testimonial.quote}"</p>
            <p><strong>- {testimonial.name}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

