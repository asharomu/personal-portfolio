import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Zoom from 'react-reveal/Zoom';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <Zoom>
              <div style={{textAlign: 'center'}}>
                <img
                  src={process.env.PUBLIC_URL + '/images/logos/my_logo.png'}
                  alt="avatar"
                  style={{height: '300px'}}
                  />
              </div>
              <h4 style={{color: 'grey'}}>Mechatronics Engineering student</h4>
              <hr style={{borderTop: '3px solid #8aa0cf', width: '80%'}}/>
              <p>Pursuing Mechatronics Engineering with interests and relevant experience in the automotive industry. Highly effective combination of quick-learning and problem-solving skills
               and ability to grasp new concepts quickly and efficiently.
              </p>
              <hr style={{borderTop: '3px solid #8aa0cf', width: '80%'}}/>
              <h5>Phone</h5>
              <p>(226)-8687100</p>
              <h5>Email</h5>
              <p>asharomu@uwaterloo.ca</p>
              <h5>Web</h5>
              <p>mywebsite.com</p>
              <hr style={{borderTop: '3px solid #8aa0cf', width: '80%'}}/>
              <h5>Relevant Courses</h5>
              <div role="list" class="ui list">
                <div style={{paddingTop: '2em'}} role="listitem" class="item">•	Digital Computation</div>
                <div style={{paddingTop: '2em'}} role="listitem" class="item">•	Data Structures and Algorithms</div>
                <div style={{paddingTop: '2em'}} role="listitem" class="item">•	Real Time Operating Systems</div>
                <div style={{paddingTop: '2em'}} role="listitem" class="item">•	Microprocessors and Digital Logic</div>
                <div style={{paddingTop: '2em'}} role="listitem" class="item">•	Numerical Methods</div>
                <div style={{paddingTop: '2em'}} role="listitem" class="item">•	Sensors and Instrumentation</div>
              </div>
              <hr style={{borderTop: '3px solid #8aa0cf', width: '80%'}}/>
              <h5>Extracurriculars and Projects</h5>
              <div style={{paddingTop: '2em'}} role="listitem" class="item">Line-following robot</div>
                <p  style={{paddingTop: '1em'}}>
                  Built and programmed a line following robot from the ground up able to stop when a magnet is detected
                </p>
                <div style={{paddingTop: '2em'}} role="listitem" class="item">Bubble shooter game</div>
                <div style={{paddingTop: '2em'}} role="listitem" class="item">UWAFT</div>
            </Zoom>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Zoom>
            <Education
              universityLogo={process.env.PUBLIC_URL + '/images/logos/UW.png'}
              logoHeight = "120px"
              startYear={2017}
              endYear={2022}
              schoolName="University of Waterloo"
              schoolDescription="Bachelor of Applied Science, Mechatronics Engineering"
               />     
            <hr style={{borderTop: '3px solid #8aa0cf'}} />    
            <h2>Experience</h2>
            <Experience
              companyLogo={process.env.PUBLIC_URL + '/images/logos/Vemba.png'}
              logoHeight = "180px"
              startYear={"January"}
              endYear={"April, 2018"}
              jobName="Vemba Corporation"
              jobTitle={"Quality Engineer"}
              jobDescription="Created a maintainable Java automation suite from the ground up to perform Selenium tests on an extensive variety of browsers,
              operating systems, and mobile devices through BrowserStack, increasing test coverage"
              />
            
            <hr style={{borderTop: '3px solid #8aa0cf'}} />
              <Experience
                companyLogo={process.env.PUBLIC_URL + '/images/logos/GEOTAB.png'}
                logoHeight = "60px"
                startYear={"September"}
                endYear={"December, 2018"}
                jobName="GEOTAB"
                jobTitle={"QA Analyst"}
                jobDescription="Developed automated scripts for an Event Completion Monitor responsible to check end of trip and end of charge messages based on smart Electric Vehicle (EV) data. In addition,developed scripts to ensure EV drivers earn rewards for charging their vehicles off-peak periods as part of the “Smart Charge Rewards New York” program"
                />
            <hr style={{borderTop: '3px solid #8aa0cf'}} />
              <Experience
              companyLogo={process.env.PUBLIC_URL + '/images/logos/Vemba.png'}
              logoHeight = "180px"
              startYear={"May"}
              endYear={"August, 2019"}
              jobName="Vemba Corporation"
              jobTitle={"Software Developer"}
              jobDescription="Contributed to the development of a robust CMC application written in React, which led to the successful exit for the start-up. Developed client-side code  to build React components of an OTT application for (CMC) and Video Distribution"
              />
            <hr style={{borderTop: '3px solid #8aa0cf'}} />
              <Experience
              companyLogo = {"https://cdn0.iconfinder.com/data/icons/car-brands/550/Ford_logo-512.png"}
              logoHeight = "170px"
              startYear={"January"}
              endYear={"April, 2020"}
              jobName="Ford Motor Company"
              jobTitle={"Product Development"}
              jobDescription="Worked on the connectivity team for the new version of Ford SYNC 4 (Infotainment System) developing Python scripts for the Projection feature,which encompasses the use of Apple Carplay and Android Auto. Used image recognition (OpenCV) and text recognition (Tesseract) to develop APIs, 
              including a projection logger API able to parse CAN signals to determine audio and microphone focus given to the HMI"
              />
                
              <hr style={{borderTop: '3px solid #8aa0cf'}} />
              <h2>Skills</h2>
              
                <Skills
                  logoHeight = "50px"
                  skill= {"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png"}
                  progress={90}
                  />
              
                <Skills
                  logoHeight = "50px"
                  skill= {"https://cdn1.iconfinder.com/data/icons/hawcons/32/698682-icon-91-document-file-cpp-512.png"}
                  progress={80}
                  />
                <Skills
                  logoHeight = "50px"
                  skill= {"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"}
                  progress={65}
                  />
                <Skills
                  logoHeight = "50px"
                  skill= {"https://cdn1.iconfinder.com/data/icons/system-black-circles/512/java-512.png"}
                  progress={65}
                  /> 
                </Zoom>
          
            </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
