import robothroneImage from '/src/assets/Robothrone.jpg';
import robothroneLogo from '/src/assets/Robothrone Logo.png';
import './RobothroneSection.css';

function RobothroneSection() {
  return (
    <>
      <section className="robothrone" id='robothrone'>
        <div className="container">
          <div className="robothroneLogo">
                <img
                src={robothroneLogo}
                alt="Students participating in Robothrone robotics competition"
               />
              </div>
          <h1 className="mainHeading"><span className="NationalHeading">National</span> Robotic Innovation Fest</h1>

          <div className="event-banner">
            <div className="event-text">
              
              <br></br>
              
             
              <p>
                Where innovation meets competition. Join hundreds of students
                showcasing their robotics prowess, competing for glory, and
                shaping the future of technology.
              </p><br>
              </br>

              <div className="event-details-grid">
                <div className="detail">
                  <h4>Annual Competition</h4>
                  <p>
                    Held every year with increasing participation from schools
                    across India.
                  </p>
                </div>
                <div className="detail">
                  <h4>Multiple Categories</h4>
                  <p>
                    Line following, maze solving, sumo bots, and more. From
                    beginners to advanced levels.
                  </p>
                </div>
                <div className="detail">
                  <h4>Prizes & Recognition</h4>
                  <p>
                    Winners receive scholarships, certificates, and recognition
                    from industry leaders.
                  </p>
                </div>
              </div>

              <div className="cta-box">
                <h3 >Ready to Join the Competition?</h3>
                <p>
                  Register your school or team for Robothrone and be part of
                  India's most exciting robotics competition.
                </p>
                <div className="register-btn"> 
                  <a href="https://www.techyguide.in/robothrone/register.html" className="btn btn-primary" target="_blank"  rel="noopener noreferrer">
                 
                  Register for Robothrone
                </a>
                </div>
                
               
              </div>
            </div>
            <div className="imageContainer">
              <div className="event-image">
               <img
                src={robothroneImage}
                alt="Students participating in Robothrone robotics competition"
               />
              </div>
             <div className="event-stats">
                
                <div className="e-stat">
                  <strong>1000+</strong>
                  <span>Participants</span>
                </div>
                <div className="e-stat">
                  <strong>100+</strong>
                  <span>Schools</span>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
    </>
  );
}

export default RobothroneSection;
