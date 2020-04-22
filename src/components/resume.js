import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn0.iconfinder.com/data/icons/teamwork-8/64/x-23-512.png"
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>

            <h2 style={{paddingTop: '1em'}}>Alejandro Haro</h2>
            <h4 style={{color: 'grey'}}>Mechatronics Engineering student</h4>
            <hr style={{borderTop: '3px solid #0639a7', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #0639a7', width: '50%'}}/>
            <h5>Phone</h5>
            <p>(226)-8687100</p>
            <h5>Email</h5>
            <p>asharomu@uwaterloo.ca</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #0639a7', width: '50%'}}/>
            <h5>Relevant Courses</h5>
            <div role="list" class="ui list">
              <div style={{paddingTop: '1em'}} role="listitem" class="item">Digital Computation</div>
              <div style={{paddingTop: '1em'}} role="listitem" class="item">Data Structures and Algorithms</div>
              <div style={{paddingTop: '1em'}} role="listitem" class="item">Real Time Operating Systems</div>
              <div style={{paddingTop: '1em'}} role="listitem" class="item">Microprocessors and Digital Logic</div>
              <div style={{paddingTop: '1em'}} role="listitem" class="item">Numerical Methods</div>
              <div style={{paddingTop: '1em'}} role="listitem" class="item">Sensors and Instrumentation</div>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              universityLogo={process.env.PUBLIC_URL + '/images/logos/UW.png'}
              logoHeight = "120px"
              startYear={2017}
              endYear={2022}
              schoolName="University of Waterloo"
              schoolDescription="Bachelor of Applied Science, Mechatronics Engineering"
               />

              <h2>Experience</h2>

            <Experience
              companyLogo={process.env.PUBLIC_URL + '/images/logos/Vemba.png'}
              logoHeight = "180px"
              startYear={"January"}
              endYear={"April, 2018"}
              jobName="Vemba Corporation"
              jobTitle={"Quality Engineer"}
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                companyLogo={process.env.PUBLIC_URL + '/images/logos/GEOTAB.png'}
                logoHeight = "60px"
                startYear={"September"}
                endYear={"December, 2018"}
                jobName="GEOTAB"
                jobTitle={"QA Analyst"}
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />

              <Experience
              companyLogo={process.env.PUBLIC_URL + '/images/logos/Vemba.png'}
              logoHeight = "180px"
              startYear={"May"}
              endYear={"August, 2019"}
              jobName="Vemba Corporation"
              jobTitle={"Software Developer"}
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
              companyLogo = {"https://cdn0.iconfinder.com/data/icons/car-brands/550/Ford_logo-512.png"}
              logoHeight = "170px"
              startYear={"January"}
              endYear={"April, 2020"}
              jobName="Ford Motor Company"
              jobTitle={"Product Development"}
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
                
              <hr style={{borderTop: '3px solid #0639a7'}} />
              <h2>Skills</h2>
              <Skills
                logoHeight = "100px"
                skill= {"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png"}
                progress={90}
                />
              <Skills
                logoHeight = "100px"
                skill= {"https://cdn1.iconfinder.com/data/icons/hawcons/32/698682-icon-91-document-file-cpp-512.png"}
                progress={80}
                />
              <Skills
                logoHeight = "100px"
                skill= {"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"}
                progress={65}
                />
              <Skills
                logoHeight = "100px"
                skill= {"https://cdn1.iconfinder.com/data/icons/system-black-circles/512/java-512.png"}
                progress={65}
                />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
