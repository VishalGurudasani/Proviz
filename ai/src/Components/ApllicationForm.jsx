import React, { useState } from 'react';

function ApplicationForm() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [statement, setStatement] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      phone,
      email,
      statement,
    };

    try {
      const response = await fetch('http://localhost:5000/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Application submitted successfully!');
        setIsSubmitted(true); 
        setShowForm(false); 
        setName('');
        setPhone('');
        setEmail('');
        setStatement('');
      } else {
        alert(data.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit application');
    }
  };

  return (
    <>
      <button className="apply-btn" onClick={toggleForm} disabled={isSubmitted}>
        {isSubmitted ? 'Application Submitted' : 'Apply Now'}
      </button>
      {showForm && (
        <div className="form-overlay" onClick={toggleForm}>
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <h3>Application Form</h3>
            <button className="close-btn" onClick={toggleForm}>
              X
            </button>
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label>Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>Statement of Purpose:</label>
              <textarea
                name="statement"
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ApplicationForm;
