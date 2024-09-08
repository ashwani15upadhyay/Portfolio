import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <>
      <section id="resume" className="resume section-title">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <h2>Resume</h2>

              <div className="resume-section">
                <h3>Ashwani Upadhyay</h3>
                <p>Mathura, Uttar Pradesh</p>
                <p>
                  <a href="mailto:ashwani15upadhyay@gmail.com">ashwani15upadhyay@gmail.com</a> · 
                  7078214707
                </p>
                <p>
                  <a href="https://www.linkedin.com/">LinkedIn</a> · 
                  <a href="https://leetcode.com/ashwani_upadhyay15/"> Leetcode</a> · 
                  <a href="https://github.com/ashwani15upadhyay?tab=repositories"> Github</a>
                </p>
              </div>

              <div className="resume-section">
                <h3>Summary</h3>
                <p>
                  Opportunity to work in a competitive environment with maximum potential, expanding my knowledge and enhancing my professional skills for career growth while contributing effectively to the company. I am a dedicated and enthusiastic individual, always open to learning and embracing new challenges.
                </p>
              </div>

              <div className="resume-section">
                <h3>Education</h3>
                <ul>
                  <li><strong>B.Tech (2020-2024):</strong> Dronacharya Group of Institute, Bachelor’s in Computer Science and Engineering (SGPA: 7.6)</li>
                  <li><strong>12th (2019-2020):</strong> Gurukul Public School (Percentage: 77%)</li>
                  <li><strong>10th (2017-2018):</strong> Gurukul Public School (Percentage: 73%)</li>
                </ul>
              </div>

              <div className="resume-section">
                <h3>Experience</h3>
                <p><strong>Crazibrain Solutions Pvt. Ltd.</strong> - Android Developer (April’24-Present)</p>
              </div>

              <div className="resume-section">
                <h3>Skills</h3>
                <ul>
                  <li><strong>Programming Languages:</strong> Java, Kotlin, XML, JavaScript</li>
                  <li><strong>Technologies:</strong> Android SDK, RESTful APIs, UI/UX design, Git, Firebase, HTML, CSS, Express.js</li>
                  <li><strong>Databases:</strong> SQL, SQLite, RoomDatabase</li>
                  <li><strong>Tools:</strong> VS Code, Android Studio</li>
                  <li><strong>CS Fundamentals:</strong> Data Structures, Algorithms, Operating Systems, DBMS</li>
                </ul>
              </div>

              <div className="resume-section">
                <h3>Projects</h3>
                <ul>
                  <li><strong>Weather Application:</strong> Web-based app using Core Java, XML, and Android Studio. Utilized weather API for real-time data.</li>
                  <li><strong>Chat Application:</strong> Real-time chat using HTML, CSS, Node.js, Express.js, Socket.IO.</li>
                </ul>
              </div>

              <div className="resume-section">
                <h3>Declaration</h3>
                <p>
                  I hereby declare that the above information is correct to the best of my knowledge and bear responsibility for its correctness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
