import React from 'react';
import Styles from '../Styles/DetailSection.module.css';
import LinkedIn from '../assets/Linkedin.svg';
import Github from '../assets/github.webp';
import Twitter from '../assets/Twitter.svg';

const DetailSection = () => {
    return (
      <section id="about" className={Styles.heroSection}>
        
        {/* <div> */}
         
          <video  width="300" height="400"
          className={Styles.myGif} autoPlay muted loop playsInline>
              <source src={require('../assets/myGif.mp4')} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        {/* </div> */}

        <h1>Hello, <br></br>I'm Aiman Usmani</h1>

        

        <p>I'm a web developer passionate about building beautiful and functional websites.</p>
        <div>
        <div className={Styles.resumeDownload}>
          <a href="./assets/AIMAN USMANI RESUME.pdf" download="AIMAN_USMANI_RESUME.pdf">
            <button className={Styles.downloadBtn}>Download Resume</button>
          </a>
        </div>
       
        </div>

        <div className={Styles.socialLinks}>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/aiman-usmani/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" className={Styles.socialIcon} />
          </a>

          {/* Twitter */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Twitter" className={Styles.socialIcon} />
          </a>

          {/* GitHub */}
          <a href="https://github.com/aimanusmani17" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" className={Styles.socialIcon} />
          </a>
          </div>
      </section>
    );
}

export default DetailSection;
