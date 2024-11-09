import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import CourseHighlights from './Components/CourseHighlights';
import Testimonials from './Components/Testimonials';
import ApplicationForm from './Components/ApllicationForm';
import Footer from './Components/Footer';

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // State for admin login

  return (
    <div className={`app ${isAdminLoggedIn ? 'admin-mode' : ''}`}>
      {/* Render Header */}
      <Header setIsAdminLoggedIn={setIsAdminLoggedIn} />

      {/* Render only if Admin is NOT logged in (User Mode) */}
      {!isAdminLoggedIn && (
        <>
          <Introduction />
          <CourseHighlights />
          <Testimonials />
          <ApplicationForm />
        </>
      )}

      <div>
      {isAdminLoggedIn && (
        <div className="admin-submission">
          
        </div>
      )}</div>

      {/* Render Footer */}
      <Footer />
    </div>
  );
}

export default App;
