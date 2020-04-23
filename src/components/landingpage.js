import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Jello from 'react-reveal/Jello';
import Bounce from 'react-reveal/Bounce';
import Typing from 'react-typing-animation';
import ParticleAnimation from 'react-particle-animation';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
       <ParticleAnimation
        numParticles={150}
        interactive={true}
        color={{r: 66, g: 158, b: 245, a:1000}}
        lineWidth={1.0}
        particleRadius={1.5}
        particleSpeed={3.0}
        
        style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        
      }}
      />
        <Grid>
          <Cell col={12}>
    
            <Bounce left>
                  <div className="banner-text">
                    <Typing>
                      <h1 style={{textAlign:"center"}}>Alejo Haro</h1>
                    </Typing>
                  <hr/>
                <Typing speed={0.1}>
                  <p>Mechatronics Engineering student </p>
                </Typing>

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
