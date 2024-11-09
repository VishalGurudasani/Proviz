import React from 'react';


import courseImage1 from '../assets/course-image1.jpg'; 
import courseImage2 from '../assets/course-image2.jpg';
import courseImage3 from '../assets/course-image3.jpg';
import courseImage4 from '../assets/course-image4.jpg';
import courseImage5 from '../assets/course-image5.jpg';

function CourseHighlights() {
  const courses = [
    { name: 'Machine Learning Fundamentals', image: courseImage1 },
    { name: 'Deep Learning with Python', image: courseImage2 },
    { name: 'Data Science for AI', image: courseImage3 },
    { name: 'Natural Language Processing', image: courseImage4 },
    { name: 'AI Ethics and Policy', image: courseImage5 }
  ];

  return (
    <section className="course-highlights">
      <h2>Course Highlights</h2>
      <div className="course-slider">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseHighlights;
