import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import axios from 'axios';
import Jump from 'react-reveal/Jump';

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
        this.resetForm();
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
          <Jump>
            <h2>Alejandro Haro</h2>
              <img
                src={process.env.PUBLIC_URL + '/images/logos/me.jpg'}
                alt="avatar"
                style={{height: '250px'}}
                />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', fontSize:'20px', fontFamily:'Oxygen'}}>Let's talk. Shoot me a message</p>
             </Jump>

          </Cell>
          <Cell col={6}>
            <Jump>
            <h2>Contact Me </h2>
            
            <div >
                <form  id='contact-form' onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div>
                        <label for="name" style={{fontSize: '20px', fontFamily: 'Oxygen'}}>Name</label>
                        <hr style={{ width: '10%', margin: 'auto', paddingBottom: '0.3em'}}/>
                        <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="form-group" paddingTop='12px'>
                        <label for="name" style={{fontSize: '20px', fontFamily: 'Oxygen'}}>Company</label>
                        <hr style={{ width: '13%', margin: 'auto', paddingBottom: '0.3em'}}/>
                        <input type="text" className="form-control" id="company" />
                    </div>
                    <div className="form-group">
                        <label for="name" style={{fontSize: '20px', fontFamily: 'Oxygen'}}>Phone</label>
                        <hr style={{ width: '10%', margin: 'auto', paddingBottom: '0.3em'}}/>
                        <input type="text" className="form-control" id="phone" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1" style={{fontSize: '20px', fontFamily: 'Oxygen'}}>Email address</label>
                        <hr style={{ width: '22%', margin: 'auto', paddingBottom: '0.3em'}}/>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label for="name" style={{fontSize: '20px', fontFamily: 'Oxygen'}}>Message</label>
                        <hr style={{ width: '15%', margin: 'auto', paddingBottom: '0.3em'}}/>
                        <textarea type="text" rows='5' className="form-control" id="message" />
                    </div>
                    <button type="submit" className='button1' >Submit</button>
                    <p>{this.state.successMsg} </p>
                </form>
            </div>
            </Jump>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
