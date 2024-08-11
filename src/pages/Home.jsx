// src/pages/Home.jsx
import React from "react";
import "../assets/Home.css"; // Import the CSS file for Home page styles
import intro from "../assets/intro.png";
import hero from "../assets/hero.jpg";
import features from "../assets/features.jpg";
import testimonials1 from "../assets/test1.png";
import testimonials2 from "../assets/test2.png";
import testimonials3 from "../assets/test3.webp";
import testimonials4 from "../assets/testimonials4.png";
import testimonials5 from "../assets/test5.png";
import testimonials6 from "../assets/test6.png";
import interactiv from '../assets/interaktiv.webp'
import Flexible from '../assets/Flexible.jpg'
import Expert from '../assets/Expert.jpg'
import grad from '../assets/graduation.jpg'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to IT Education</h1>
          <p>Empowering you to succeed in the digital world.</p>
          <button className="cta-button" onClick={() => {navigate('/courses')}}>Get Started</button>
        </div>
        <img src={hero} alt="Hero" className="hero-image" />
      </section>

      {/* Introduction Section */}
      <section className="introduction">
        <h2>Why Choose IT Education?</h2>
        <div className="intro-content">
          <img src={intro} alt="Introduction" className="intro-image" />
          <p>
            At Ibrat Education, we offer a wide range of courses designed by
            industry experts. Whether you're a beginner or looking to advance
            your skills, our platform has something for everyone.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src={interactiv} alt="Interactive Courses" />
            <h3>Interactive Courses</h3>
            <p>Hands-on projects that simulate real-world scenarios.</p>
          </div>
          <div className="feature-card">
            <img src={Expert} alt="Expert Instructors" />
            <h3>Expert Instructors</h3>
            <p>Learn from professionals with real-world experience.</p>
          </div>
          <div className="feature-card">
            <img src={Flexible} alt="Flexible Schedules" />
            <h3>Flexible Learning</h3>
            <p>Study at your own pace, anytime, anywhere.</p>
          </div>
          <div className="feature-card">
            <img src={grad} alt="Certification" />
            <h3>Certification</h3>
            <p>Receive a certificate upon course completion.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
  <h2>What Our Students Say</h2>
  <div className="cards">
    <div className="testimonial-carousel">
      <div className="testimonial-item">
        <img src={testimonials1} alt="Student A" />
        <p>"IT Education has transformed my career!"</p>
        <strong>- Student A</strong>
      </div>
      <div className="testimonial-item">
        <img src={testimonials2} alt="Student B" />
        <p>"The flexible learning schedule was perfect for me!"</p>
        <strong>- Student B</strong>
      </div>
      <div className="testimonial-item">
        <img src={testimonials3} alt="Student C" />
        <p>"The courses are well-structured and easy to follow!"</p>
        <strong>- Student C</strong>
      </div>
      <div className="testimonial-item">
        <img src={testimonials4} alt="Student D" />
        <p>"The hands-on projects helped me apply my knowledge!"</p>
        <strong>- Student D</strong>
      </div>
      <div className="testimonial-item">
        <img src={testimonials5} alt="Student E" />
        <p>"Great instructors who are always ready to help!"</p>
        <strong>- Student E</strong>
      </div>
      <div className="testimonial-item">
        <img src={testimonials6} alt="Student F" />
        <p>"I feel confident in my skills thanks to IT Education!"</p>
        <strong>- Student F</strong>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
