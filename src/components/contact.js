import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import axios from 'axios';

class Contact extends Component {

  state = {
    status:400,
    successMsg:''
  }

  handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const company = document.getElementById('company').value;
    const phone = document.getElementById('phone').value;
    
    axios({
        method: "POST", 
        url:"http://localhost:5000/send", 
        data: {
            name: name,  
            company: company,
            phone: phone, 
            email: email,  
            message: message
        }
    }).then((response)=>{
      
      if (response.status == 200){
        this.setState({
          status: response.status,
          successMsg:'Message sent successfully'
        });
      }

      else {
        this.setState({
          status: response.status,
          successMsg:'Message could not be send to Alejandro'
        });
      }
      
    })
}

resetForm(){
    document.getElementById('contact-form').reset();
}

  render() {

    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>

            <h2>Alejandro Haro</h2>
            <img
              src={process.env.PUBLIC_URL + '/images/logos/me.jpg'}
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Add text to contact</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me </h2>
            <hr/>
            
            <div >
                <form  onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group" paddingTop='12px'>
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group" paddingTop='12px'>
                        <label for="name">Company</label>
                        <input type="text" className="form-control" id="company" />
                    </div>
                    <div className="form-group">
                        <label for="name">Phone</label>
                        <input type="text" className="form-control" id="phone" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label for="name">Message</label>
                        <textarea type="text" rows='8' className="form-control" id="message" />
                    </div>
                    <button type="submit" >Submit</button>
                    <p>{this.state.successMsg} </p>
                </form>
            </div>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (226) 8687100
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    asharomu@uwaterloo.ca
                  </ListItemContent>
                </ListItem>
              </List>
              
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
