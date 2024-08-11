import React from 'react';
import { useParams } from 'react-router-dom';
import '../assets/CourseDetail.css';
import reactimg from '../assets/rc.png';
import js from '../assets/js.webp';
import ts from '../assets/ts.png';
import php from '../assets/php.png';
import photoshop from '../assets/Ps.png';
import css from '../assets/css1.png';
import html from '../assets/html5.png';
import python from '../assets/pyton.png';
import cpp from '../assets/C++.png';

const courses = [
    { 
      id: 1, 
      title: 'React for Beginners', 
      description: 'Learn the basics of React.', 
      content: 'This course will cover the fundamentals of React, including JSX, components, state, and props. By the end of this course, you’ll be able to create basic React applications and understand key concepts such as the component lifecycle and hooks.', 
      image: reactimg 
    },
    { 
      id: 2, 
      title: 'Advanced JavaScript', 
      description: 'Deep dive into JavaScript.', 
      content: 'Explore advanced JavaScript concepts like closures, prototypes, and asynchronous programming. This course will help you understand how JavaScript works behind the scenes and how to write more efficient and maintainable code.', 
      image: js 
    },
    { 
      id: 3, 
      title: 'TypeScript Essentials', 
      description: 'Master TypeScript for scalable applications.', 
      content: 'TypeScript is a powerful tool for writing scalable and maintainable JavaScript applications. In this course, you’ll learn the essentials of TypeScript, including type annotations, interfaces, generics, and advanced types. You’ll also explore how TypeScript integrates with existing JavaScript code.', 
      image: ts 
    },
    { 
      id: 4, 
      title: 'PHP Development', 
      description: 'Get started with PHP and server-side scripting.', 
      content: 'PHP is a popular server-side scripting language that powers many of the world’s websites. In this course, you’ll learn the basics of PHP, including syntax, variables, loops, and functions. You’ll also explore how to work with databases using PHP and how to build dynamic web pages.', 
      image: php 
    },
    { 
      id: 5, 
      title: 'Photoshop for Designers', 
      description: 'Learn image editing with Photoshop.', 
      content: 'Photoshop is the industry standard for image editing and graphic design. In this course, you’ll learn the basics of Photoshop, including how to work with layers, masks, and filters. You’ll also explore advanced techniques for retouching photos, creating digital illustrations, and designing layouts.', 
      image: photoshop
    },
    { 
      id: 6, 
      title: 'CSS Mastery', 
      description: 'Advanced styling techniques with CSS.', 
      content: 'CSS is a powerful tool for styling web pages, but it can be challenging to master. In this course, you’ll learn advanced CSS techniques, including Flexbox, Grid, animations, and responsive design. You’ll also explore best practices for writing clean and maintainable CSS code.', 
      image: css
    },
    { 
      id: 7, 
      title: 'HTML Fundamentals', 
      description: 'Build the foundation with HTML.', 
      content: 'HTML is the foundation of the web, and understanding it is essential for any web developer. In this course, you’ll learn the basics of HTML, including elements, attributes, and structure. You’ll also explore how to create forms, embed media, and use semantic elements to improve accessibility and SEO.', 
      image: html 
    },
    { 
      id: 8, 
      title: 'Python Programming', 
      description: 'Start coding with Python.', 
      content: 'Python is a versatile and beginner-friendly programming language that is used in many fields, including web development, data science, and automation. In this course, you’ll learn the basics of Python, including syntax, data structures, and functions. You’ll also explore how to work with libraries and frameworks to build real-world applications.', 
      image: python 
    },
    { 
      id: 9, 
      title: 'C++ Development', 
      description: 'Learn C++ for systems and application development.', 
      content: 'C++ is a powerful programming language that is widely used in systems programming, game development, and high-performance applications. In this course, you’ll learn the basics of C++, including syntax, memory management, and object-oriented programming. You’ll also explore advanced topics like templates, multithreading, and optimization techniques.', 
      image: cpp
    },
  ];
  

  const CourseDetail = () => {
    const { id } = useParams();
    const course = courses.find(course => course.id === parseInt(id));
  
    if (!course) {
      return <div>Course not found</div>;
    }
  
    return (
      <div className="course-detail">
        <div className="course-header">
          <img src={course.image} alt={course.title} className="course-image" />
          <h1 className="course-title">{course.title}</h1>
        </div>
        <div className="course-content">
          <h2>About this course</h2>
          <p>{course.description}</p>
          <p>{course.content}</p>
        </div>
        <div className="course-video">
          <h2>Course Overview</h2>
          <video controls className="video-player">
            <source src="/path-to-video/course-overview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  };
  

export default CourseDetail;
