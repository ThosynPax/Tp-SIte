import React from 'react';
import '../App.css';
import quickinbox_video from '../assets/works/quickinbox_video.mp4';
import phillioo_video from '../assets/works/phillioo_video.mp4';
import tecpay_video from '../assets/works/tecpay_video.mp4';
import philip_video from '../assets/works/Philip_video.webm';


const Works = () => {
  return (
    <main className="site-body">
      <style>
        {`
       .project-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: left; 
        }

       .project-tags span.tag {
          padding: 5px 15px;
          background-color: #1a1a1a;
          border-radius: 10px;
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          transition: background-color 0.3s ease;
          text-align: left;
        }

        .project-tags span.tag:hover {
          background-color: #ffe666;
        }
        
        @media only screen and (max-width: 768px) {
        .main-grid {
          display: block;
          padding: 10px;
        }

        .main-content, .image-content {
          width: 100%;
          margin-bottom: 20px;
        }

        .intro-title {
          font-size: 24px;
        }

        video {
          width: 100%;
          height: auto;
        }

        p {
          font-size: 14px;
        }

        .project-tags {
          justify-content: center;
        }

        .tag {
          font-size: 12px;
          padding: 4px 10px;
        }
          .project-tags {
          gap: 5px; 
        }

        .project-tags span.tag {
          font-size: 12px;
          padding: 4px 10px;
          flex: 1 1 auto; 
        }
}

        `}
      </style>

      <br />
      <br />
      <br />
      <div className="wrapper"> <h1 className="intro-title" style={{ lineHeight: '0.8' }}>Works</h1>
        <div className="main-grid">
          
            {/* MonieClips Section */}
            <div className="brief-content">
              <h1 className='intro-title' style={{ fontSize: 30 }}>Quickinbox</h1>
              <p>
              As a Software Engineer and UI/UX Engineer for Quickinbox, 
              a bulk email platform, my focus was on creating an efficient 
              system for sending and managing large volumes of emails. 
              I worked on optimizing the platform for businesses requiring 
              seamless communication with vast audiences.
               Key contributions included:
              </p>
              <p>
                <span className='inner-brief-content'>Scalability:</span> Led the development team to 
                ensure the platform could handle millions of emails daily without downtime, enhancing 
                database performance for speed and reliability.
              </p>
              <p>
                <span className='inner-brief-content'>Feature Development:</span> Spearheaded the development of advanced filtering,
                 automated list management, and personalized bulk email features to improve user engagement.
              </p>
              <p>
                <span className='inner-brief-content'>User Testing and Feedback:</span> Conducted user interviews and A/B testing to
                 refine the platform’s user interface, ensuring a smooth and intuitive experience.
              </p>
              <p>
                <span className='inner-brief-content'>Outcome:</span> Quickinbox became a preferred tool for businesses needing fast 
                and reliable bulk email delivery, with a 20% boost in customer retention.
              </p>
            </div>
        

          <div className="image-content">
            <video
              src={quickinbox_video}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: 'auto' }}
            >
              Your browser does not support the video tag.
            </video>
            <div className="project-tags">
              <span className="tag">PHP</span>
              <span className="tag">React</span>
              <span className="tag">MySQL</span>
            </div>
          </div>


                 {/* Philip Ikeazor Website */}
                <div className="main-content"><hr />
                  <div className="brief-content">
                    <h1 className='intro-title' style={{ fontSize: 30 }}>Philip Ikeazor Website</h1>
                    <p>
                      I had the privilege of designing and developing the official website for Philip Ikeazor, a prominent leader in financial system stability and inclusion across Africa. The website was created with the goal of reflecting his innovative leadership, philanthropic efforts, and commitment to empowering economies through stability. Key features of the project include:
                    </p>
                    <p>
                      <span className='inner-brief-content'>User-Centric Design:</span> The website's design prioritizes a clean, modern aesthetic while ensuring ease of navigation and accessibility for users across different devices and platforms.
                    </p>
                    <p>
                      <span className='inner-brief-content'>Responsive & Mobile-First:</span> The website was built with a mobile-first approach, ensuring that it delivers a seamless experience for users, whether on desktop, tablet, or smartphone.
                    </p>
                    <p>
                      <span className='inner-brief-content'>Content Strategy:</span> I helped structure the site’s content to clearly highlight his vision, achievements, and key areas of focus, making it easy for visitors to explore his work in financial stability, innovation, and inclusion.
                    </p>
                  </div>
              </div>

              <div className="image-content">
            <video
                  src={ philip_video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: 'auto' }}
                >
              Your browser does not support the video tag.
            </video>
            <div className="project-tags">
              <span className="tag">Figma</span>
              <span className="tag">Photoshop</span>
              <span className="tag">Elementor</span>
              <span className="tag">WordPress</span>
            </div>
          </div>
          {/* TecPay Section */}
          <div className="main-content"><hr />
            <div className="brief-content">
              <h1 className='intro-title' style={{ fontSize: 30 }}>TecPay</h1>
              <p>
              As a Software Engineer and UI/UX Engineer for TecPay, a mobile banking app,
               I was instrumental in managing the app's end-to-end development,
                ensuring seamless integration with financial systems while
                 prioritizing security. Key responsibilities included:
              </p>
              <p>
                <span className='inner-brief-content'>API Management:</span> Led the integration of various payment methods,
                 such as bank transfers and mobile wallets, to accommodate a wide range of user needs.
              </p>
              <p>
                <span className='inner-brief-content'>Development:</span> Collaborated with cross-functional teams to ensure TecPay's 
                features were effectively integrated and aligned with user needs, enhancing overall functionality and performance.
              </p>
              <p>
                <span className='inner-brief-content'>User Experience:</span> Collaborated with the design team to deliver a user-friendly interface,
                 facilitating easy transaction navigation and real-time account management.
              </p>
            </div>
          </div>
          <div className="image-content">
            <video
                src={tecpay_video}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: 'auto' }}
              >
              Your browser does not support the video tag.
            </video>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">React Native</span>
              <span className="tag">IOS</span>
              <span className="tag">Firebase</span>
              <span className="tag">Android</span>
              <span className="tag">Node js</span>
              <span className="tag">Jira</span>
              <span className="tag">Figma</span>
              <span className="tag">Miro</span>
              <span className="tag">API</span>
            </div>
          </div>


          {/* Quickinbox Section */}
          <div className="main-content"><hr />
            <div className="brief-content">
              <h1 className='intro-title' style={{ fontSize: 30 }}>Phillioo</h1>
              <p>
              As a Software Engineer and UI/UX Engineer for Phillioo, a dating app 
              currently in development, my focus is on delivering a smooth and intuitive
               user experience while building features that foster safe and meaningful connections.
                My contributions include:
              </p>
              <p>
                <span className='inner-brief-content'>Feature Prioritization:</span> Designed and implemented core functionalities
                 such as user matching algorithms, real-time messaging, and profile verification to enhance user engagement.
              </p>
              <p>
                <span className='inner-brief-content'>User-Centered Design:</span>Created wireframes and prototypes to ensure an intuitive interface,
                 focusing on features that facilitate profile discovery and meaningful interactions.
              </p>
              <p>
                <span className='inner-brief-content'>Agile Implementation:</span> Worked closely with cross-functional teams to conduct user testing 
                and gather feedback, iterating on designs to improve usability and meet user needs effectively.
              </p>
              
            </div>
          </div>
          <div className="image-content">
            <video
                    src={phillioo_video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: 'auto' }}
                  >
                Your browser does not support the video tag.
              </video>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">React Native</span>
              <span className="tag">API</span>
              <span className="tag">IOS</span>
              <span className="tag">Vercel</span>
              <span className="tag">Android</span>
              <span className="tag">Figma</span>
              <span className="tag">CI/CD</span>
              <span className="tag">AWS</span>
              <span className="tag">Node js</span>
            </div>
          </div>
          <h2>
           <a style={{ color: "#fff" }} href="/projects" className="project-link">
              View Other Projects</a>
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Works;
