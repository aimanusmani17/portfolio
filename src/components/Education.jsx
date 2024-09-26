import React from 'react';
import Styles from '../Styles/Education.module.css';

const Education = () => {
  return (
    <section id="education-experience" className={Styles.educationExperience}>
      <div className={Styles.eduSection}>
        <div className={Styles.sectionTitle}>Education</div>
        <div className={Styles.eduItem}>
          <h3>Masters of Computer Applications (MCA)</h3>
          <p><strong>Jamia Hamdard</strong></p>
          <p>2016 - 2019</p>
        </div>
        <div className={Styles.eduItem}>
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p><strong>Jamia Hamdard</strong></p>
          <p>2013 - 2016</p>
        </div>
      </div>

      <div className={Styles.expSection}>
        <div className={Styles.sectionTitle}>Experience</div>
        <div className={Styles.expItem}>
          <h3>Web Developer Intern</h3>
          <p><strong>SinQlarity</strong></p>
          <p>May 2024 - Present</p>
          <p>
            Developing and maintaining web applications using the MERN stack.
            Collaborating with team members to deliver scalable solutions and enhance user interfaces.
          </p>
        </div>

        <div className={Styles.expItem}>
          <h3>Web Developer</h3>
          <p><strong>National Informatics Centre</strong></p>
          <p>Oct 2021 - 2022</p>
          <p>
            Developing and maintaining web applications using the Angular
            Framework. Collaborating with team members to deliver scalable solutions and enhance user interfaces.
          </p>
        </div>

        <div className={Styles.expItem}>
          <h3>Coding Instructor</h3>
          <p><strong>CampK12</strong></p>
          <p>Aug 2020 - Sep 2021</p>
          <p>
            As a Coding Instructor at CampK12, I teach coding and technology
            skills to students through interactive, hands-on lessons. My role
            involves guiding young minds in programming languages, game
            development, and app creation, fostering creativity, problem-solving, and critical thinking in a dynamic and engaging learning environment.
          </p>
        </div>

        <div className={Styles.expItem}>
          <h3>TGT Computer Science</h3>
          <p><strong>Hamdard Public School</strong></p>
          <p>March 2019 - June 2020</p>
          <p>
            As a TGT in Computer Science, I specialize in teaching foundational and advanced computer science concepts to middle and high school students. I focus on building a strong understanding of programming, algorithms, and technology through interactive lessons and practical projects, helping students develop critical thinking and problem-solving skills in the digital age.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
