import React from "react";

function About() {
  return (
    <>
      <section id="about" class="about section-title">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <h2>About</h2>
              <p>
                Hello, I'm Ashwani Upadhyay from Mathura. I hold a Bachelor's degree in Technology (B.Tech) 
                and am passionate about [IT industry]. 
                With a strong foundation in [Core Java, JavaScript, Node Express, SQL], I am eager to apply my knowledge 
                and contribute effectively to  
                {/* [mention your goals or the field you want to work in].  */}
                I am a dedicated and enthusiastic individual, always open to learning and embracing new challenges. 
                Looking forward to 
                {/* [mention what you are looking forward to, whether it's career opportunities, 
                further education, etc.]. */}
              </p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-4">
              <img
                src="/assets/img/profile-img1.jpg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3> Backend Developer.</h3>
              <p class="fst-italic">
              Hi, I'm Ashwani Upadhyay, a backend developer with expertise in Core Java, JavaScript and Node.js. 
              I hold a B.Tech degree and have a proven track record in designing and implementing scalable server-side architectures. 
              Passionate about optimizing performance and ensuring data security, I thrive on delivering high-quality backend solutions. 
              Excited about contributing to innovative projects and staying abreast of the latest technologies.
              </p>

              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>15 Nov 2003</span>
                    </li>
                    {/* <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> */}
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>+91 7078214707</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong> <span>Khair , Aligarh</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>20</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong> <span>Bachelor of Technology</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>ashwani15upadhyay@gmail.com</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="facts" class="facts">
        <div className="container">
          <div className="section-title">
            <h2>Facts</h2>
            <p>
  Throughout my career, I've actively contributed to significant projects, 
  such as Weather Forecasting, Bill Generator App. My skills extend to React.js, HTML, CSS, 
  and I am always eager to stay updated on the latest technologies and industry best practices.
  Beyond my professional life, I find joy in IT Industry, 
  allowing me to strike a balance between work and personal pursuits. 
  {/* Known for my [mention a positive trait, e.g., attention to detail] and commitment to 
  [mention another positive trait, e.g., continuous learning],  */}
  I approach challenges with enthusiasm and a solutions-oriented mindset.
            </p>
          </div>

          <div className="row no-gutters">
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
            >
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Happy Clients</strong> consequuntur quae
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Projects</strong> adipisci atque cum quia aut
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="count-box">
                <i className="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1453"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Hours Of Support</strong> aut commodi quaerat
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="count-box">
                <i className="bi bi-people"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="32"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Hard Workers</strong> rerum asperiores dolor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Facts Section --> */}

      {/* <!-- ======= Skills Section ======= --> */}

      <section id="skills" class="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              <div>

            Professionally, I possess a solid foundation in Core Java, 
            having honed my skills through practical applications and projects. 
            This includes a deep understanding of object-oriented programming principles and 
            proficiency in utilizing Java for various backend functionalities.
        

           Additionally, my expertise extends to JavaScript, 
           where I have demonstrated a proficiency in both client and server-side scripting. 
           I am well-versed in leveraging Node.js and Express to build scalable and efficient server-side 
           applications. Through hands-on experience, I have successfully implemented RESTful APIs, 
           showcasing my ability to design and develop robust backend solutions.

          On the frontend, I am adept at crafting responsive and visually appealing user interfaces using HTML and CSS. 
          This includes a keen eye for design principles and an understanding of how to create seamless, user-friendly 
          experiences.

         In summary, my skill set encompasses a strong command of Core Java, proficiency in JavaScript, Node.js, and
          Express for backend development, as well as expertise in building dynamic and engaging frontend
           interfaces using HTML and CSS. My practical experience in designing and implementing RESTful APIs further
            adds to my capabilities in creating comprehensive and efficient web solutions.
            </div>
            </p>
          </div>

          <div className="row skills-content section-title">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  HTML <i class="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{
                      width: 240
                    }}
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  CSS <i class="val">40%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{
                        width: 160
                      }}
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  JavaScript <i class="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{
                        width: 240
                      }}
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  Core Java <i class="val">70%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{
                        width: 280
                      }}
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="progress">
                <span className="skill">
                  Node Express <i class="val">70%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                        width: 280
                      }}
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Data Structure in Java <i class="val">75%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{
                        width: 300
                      }}
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default About;
