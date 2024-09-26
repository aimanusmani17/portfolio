import React from 'react';
import Styles from '../Styles/Skills.module.css'; 
import programmingIcon from '../assets/programming-languages.png'; // Ensure correct path
import frontEndIcon from '../assets/ux.png'; // Ensure correct path
import backendIcon from '../assets/backend.png'; // Ensure correct path
import databaseIcon from '../assets/database.png'; // Ensure correct path
import othersIcon from '../assets/repair.png'; // Ensure correct path

const Skills = () => {
    const skills = [
        {
            category: 'Programming Languages',
            skills: ['JavaScript', 'Java', 'TypeScript'],
            image: programmingIcon // Correct usage
        },
        {
            category: 'FrontEnd',
            skills: ['HTML', 'CSS', 'React.js', 'Angular', 'Bootstrap'],
            image: frontEndIcon // Correct usage
        },
        {
            category: 'Backend',
            skills: ['Node.js', 'Express'],
            image: backendIcon // Correct usage
        },
        {
            category: 'Databases',
            skills: ['MongoDB', 'SQL'],
            image: databaseIcon // Correct usage
        },
        {
            category: 'Others',
            skills: ['GitHub', 'Jira', 'Postman', 'Figma', 'Canva'],
            image: othersIcon // Correct usage
        }
    ];

    return (
        <section id="skills" className={Styles.skillsSection}>
            <h2 className={Styles.skillsHeader}>My Skills</h2>
            <div className={Styles.skillsContainer}>
                {skills.map((skillSet, index) => (
                    <div key={index} className={Styles.skillCard}>
                        <img src={skillSet.image} alt={`${skillSet.category} icon`} className={Styles.skillImage} />
                        <h3 className={Styles.category}>{skillSet.category}</h3>
                        <ul className={Styles.skillList}>
                            {skillSet.skills.map((skill, idx) => (
                                <li key={idx} className={Styles.skillItem}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
