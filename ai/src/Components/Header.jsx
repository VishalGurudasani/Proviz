import React, { useState} from 'react';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa'; 


function Header({ setIsAdminLoggedIn }) {
  const [isAdminMode, setIsAdminMode] = useState(false); 
  const [isAdminLoggedInState, setIsAdminLoggedInState] = useState(false); 
  const [email, setEmail] = useState(''); 
  const [submissions, setSubmissions] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

  // Handle toggle change
  const handleToggle = () => {
    setIsAdminMode(!isAdminMode); 
  };

  // Handle login 
  const handleLogin = (e) => {
    e.preventDefault();

    // Check for the correct admin email
    if (email === 'admin@proviz.com') {
      setIsAdminLoggedInState(true); 
      setIsAdminLoggedIn(true); 
      setEmail('');
      fetchSubmissions(); // Fetch submissions when admin logs in
    } else {
      alert('Invalid email');
    }
  };

  // Fetch submissions from API
  const fetchSubmissions = async () => {
    setLoading(true);
    setError(null);
    try {
      
      const response = await fetch('http://localhost:5000/api/admin/user');
      if (!response.ok) {
        throw new Error('Failed to fetch submissions');
      }
      const data = await response.json();
      setSubmissions(data); 
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Proviz School of AI</h1>
      </div>
      <div className="toggle-container">
        <p>{isAdminMode ? 'Admin Mode' : 'User Mode'}</p>
        <button className="toggle-switch" onClick={handleToggle}>
          {isAdminMode ? <FaToggleOn size={30} color="green" /> : <FaToggleOff size={30} color="gray" />}
        </button>
      </div>

      {/* Admin login modal */}
      {isAdminMode && !isAdminLoggedInState && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Admin Login</h3>
            <form onSubmit={handleLogin}>
              <label>
                Email:
                <input
                  type="email"
                  placeholder="Enter admin email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}

      {/* Admin submissions */}
      {isAdminLoggedInState && (
        <div className="admin-submission">
          <h3>Submitted Applications</h3>
          {loading && <p>Loading submissions...</p>}
          {error && <p className="error">{error}</p>}
          <div className="submission-list">
            {submissions.length === 0 ? (
              <p>No submissions available.</p>
            ) : (
              submissions.map((submission, index) => (
                <div key={index} className="submission-item">
                  <h4>{submission.name}</h4>
                  <p>Email: {submission.email}</p>
                  <p>Phone: {submission.phone}</p>
                  <p>Statement: {submission.statement}</p>
                  <p>Submitted At: {new Date(submission.submittedAt).toLocaleString()}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
      <div className={`content ${isAdminLoggedInState ? 'blurred' : ''}`} />
    </header>
  );
}

export default Header;
