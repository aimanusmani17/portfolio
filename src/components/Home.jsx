import React from 'react';
//  import './App.css';
// import HomeStyles from "./Styles/Home.module.css"
import Styles from '../Styles/Home.module.css';
import Navbar from '../components/Navbar';
import DetailSection from '../components/DetailSection';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Education from '../components/Education';


const Home = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.content}>
      <Navbar />
      <DetailSection />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      </div>
      <div>
      <footer className={Styles.footer}>
        Copyright &#169; 2024 Aiman Usmani. All right received.
    </footer>
      </div>
    </div>
  );
}

export default Home;


