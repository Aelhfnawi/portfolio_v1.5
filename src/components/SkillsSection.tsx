import React from 'react';
import styles from './SkillsSection.module.css';

const SkillsSection: React.FC = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.mainHeading}>My Skills & Tools</h2>
      
      <div className={styles.skillsGrid}>
        {/* Column 1: Programming & ML */}
        <div className={styles.skillColumn}>
          <div className={styles.skillCard}>
            <h3 className={styles.columnHeading}>Programming Languages</h3>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🐍</span>
                <span>Python</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>⚡</span>
                <span>C++</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>☕</span>
                <span>Java</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🔷</span>
                <span>C#</span>
              </li>
            </ul>
          </div>

          <div className={styles.skillCard}>
            <h3 className={styles.columnHeading}>Machine Learning & AI</h3>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>📊</span>
                <span>Supervised Learning</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🔍</span>
                <span>Unsupervised Learning</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🧠</span>
                <span>Deep Learning</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🛠️</span>
                <span>ML Tools/Frameworks</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 2: Data & Analytics */}
        <div className={styles.skillColumn}>
          <div className={styles.skillCard}>
            <h3 className={styles.columnHeading}>Data Analysis & Visualization</h3>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🐼</span>
                <span>Pandas</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🔢</span>
                <span>NumPy</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>📈</span>
                <span>Matplotlib</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🔧</span>
                <span>Data Preprocessing</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>⚙️</span>
                <span>Feature Engineering</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>📊</span>
                <span>Statistical Analysis</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>📝</span>
                <span>Text Analytics</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: Project & Soft Skills */}
        <div className={styles.skillColumn}>
          <div className={styles.skillCard}>
            <h3 className={styles.columnHeading}>Project & Business Skills</h3>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🎯</span>
                <span>Product Vision</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>📋</span>
                <span>Requirements Analysis</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>📅</span>
                <span>Project Planning</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>👥</span>
                <span>Project Mentoring</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>⚙️</span>
                <span>Operation Management</span>
              </li>
            </ul>
          </div>

          <div className={styles.skillCard}>
            <h3 className={styles.columnHeading}>Soft Skills</h3>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>💭</span>
                <span>Critical Thinking</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🎯</span>
                <span>Decision Making</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>💬</span>
                <span>Communication</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🤝</span>
                <span>Teamwork</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>👑</span>
                <span>Leadership</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🎤</span>
                <span>Presentation</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🔧</span>
                <span>Problem Solving</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🔍</span>
                <span>Research</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>⏰</span>
                <span>Time Management</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>❤️</span>
                <span>Emotional Intelligence</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

