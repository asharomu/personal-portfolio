import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn4.iconfinder.com/data/icons/robots-4/600/robot_automation_technology-512.png) center / cover'}} ></CardTitle>
            <CardText>
              Line following robot
            </CardText>
            <CardActions border>
                <a style={{color: '#04649c'}} href="https://www.google.com" color='black'>GitHub</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn0.iconfinder.com/data/icons/sports-and-games-3-1/65/110-512.png) center / cover'}} ></CardTitle>
            <CardText>
            Bubble shooter game
            </CardText>
            <CardActions border>
                <a style={{color: '#04649c'}} href="https://github.com/asharomu/bubble-shooter-RTOS" target='_blank' color='black'>GitHub</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn0.iconfinder.com/data/icons/ecology-environment-icons/202/Eco_Car-512.png) center / cover'}} ></CardTitle>
            <CardText>
              UWAFT - Connected Software
            </CardText>
            <CardActions border>
                <a style={{color: '#04649c'}} href="https://uwaft.ca" target='_blank' color='black'>About UWAFT</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn1.iconfinder.com/data/icons/education-3-1/256/Clock-512.png) center / cover'}} ></CardTitle>
            <CardText>
              Real Time Clock System
            </CardText>
            <CardActions border>
                <a style={{color: '#04649c'}} href="https://github.com/asharomu/real-time-clock" target='_blank' color='black'>GitHub</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>School</Tab>
          <Tab>Extracurricular</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
