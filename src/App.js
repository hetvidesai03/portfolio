import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Button } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout >
        <Header className="header-color"  title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link>} scroll>
            <Navigation>
                <Link style={{textDecoration: 'none', color: 'black'}} to="/resume">Resume</Link>
                {/* <Link style={{textDecoration: 'none', color: 'black'}}to="/aboutme">About Me</Link> */}
                <Link style={{textDecoration: 'none', color: 'black'}} to="/projects">Projects</Link>
                <Link style={{textDecoration: 'none', color: 'black'}} to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link>}>
         
            <Navigation>
              <Link to="/resume">Resume</Link>
              {/* <Link to="/aboutme">About Me</Link> */}
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
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