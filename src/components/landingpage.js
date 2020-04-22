import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Jello from 'react-reveal/Jello';
import Bounce from 'react-reveal/Bounce';



class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
       
        <Grid className="landing-grid">
            <Cell col={12}>
            <Jello>
              <img
                margin="auto"
                src="https://cdn0.iconfinder.com/data/icons/transportation-vehicles-5/24/transportation_transport_vehicles_mustang_car-512.png"
                alt="avatar"
                className="avatar-img"
                />
            </Jello>
        <Bounce left>
              <div className="banner-text">
                <h1>Alejandro's Portfolio</h1>
              <hr/>

            <p>Python | C/C++ | Java | React  | NodeJS | Java | ROS</p>

          <div className="social-links">

            {/* LinkedIn */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* Github */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>

            {/* Freecodecamp */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-free-code-camp" aria-hidden="true" />
            </a>

            {/* Youtube */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-youtube-square" aria-hidden="true" />
            </a>

          </div>
              </div>
          </Bounce>
            </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
