import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import ContactForm from './contactform';
import axios from 'axios';



class Contact extends Component {
    state = {
      renderedResponse:''
    }

  
  getResponse = async() => {
    const response = await fetch('/send');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  componentDidMount() {
    this.getResponse()
      .then(res => {
        const someData = res;
        this.setState({ renderedResponse:someData });
      })
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
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
}

resetForm(){
    document.getElementById('contact-form').reset();
}

  render() {

    const { renderedResponse } = this.state;

    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <p>{renderedResponse}</p>

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

            <div className="col-sm-4 offset-sm-4">
                <form  onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
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
                        <input type="text" className="form-control" id="message" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
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
