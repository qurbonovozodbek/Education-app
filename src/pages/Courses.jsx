import React from 'react';
import reactimg from '../assets/rc.png';
import js from '../assets/js.webp';
import ts from '../assets/ts.png';
import php from '../assets/php.png';
import photoshop from '../assets/Ps.png';
import css from '../assets/css1.png';
import html from '../assets/html5.png';
import python from '../assets/pyton.png';
import cpp from '../assets/C++.png';
import '../assets/Courses.css'
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: 'React for Beginners', description: 'Learn the basics of React.', image: reactimg },
  { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript.', image: js },
  { id: 3, title: 'TypeScript Essentials', description: 'Master TypeScript for scalable applications.', image: ts },
  { id: 4, title: 'PHP Development', description: 'Get started with PHP and server-side scripting.', image: php },
  { id: 5, title: 'Photoshop for Designers', description: 'Learn image editing with Photoshop.', image: photoshop },
  { id: 6, title: 'CSS Mastery', description: 'Advanced styling techniques with CSS.', image: css },
  { id: 7, title: 'HTML Fundamentals', description: 'Build the foundation with HTML.', image: html },
  { id: 8, title: 'Python Programming', description: 'Start coding with Python.', image: python },
  { id: 9, title: 'C++ Development', description: 'Learn C++ for systems and application development.', image: cpp },
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h2>Our Courses</h2>
      <div className="courses-grid">
        {courses.map(course => (
          <Link to={`/courses/${course.id}`} className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <div className="cours-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
