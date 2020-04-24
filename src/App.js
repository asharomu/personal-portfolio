import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme"> Blog</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title='Portfolio'>
            <Navigation>
              <Link to="/" style={{color: 'black'}}>Home</Link>
              <Link to="/resume" style={{color: 'black'}}>Resume</Link>
              <Link to="/aboutme" style={{color: 'black'}}>Blog</Link>
              <Link to="/projects" style={{color: 'black'}}>Projects</Link>
              <Link to="/contact" style={{color: 'black'}}>Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
