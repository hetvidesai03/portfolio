
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { render } from '@testing-library/react';
import { Col } from 'react-bootstrap';

class Projects extends Component {
  render() {
    return (
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="column-1">
          <Card shadow={5} style={{width:"90%" , margin: '5px'}}>
            <CardTitle style={{ color:'#000',height: '176px', }} >Ensemble</CardTitle>
            <CardText>
            Web application developed using ReactJS, serverless architecture and Firebase
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
       </div>
      

        {/* Project 2 */}
        <div className="column-1" >
          <Card shadow={5} style={{ width:"90%" ,margin: '5px' }}>
          <CardTitle style={{ color: '#000', height: '176px' }} >Web Search Engine</CardTitle>
          <CardText>
           Flask powered query-based text search engine utilizing a Python crawler
            </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
        {/* Project 4*/}

        <div className="column-1" > 
          <Card shadow={5} style={{width:"90%" , margin: '5px' }}>
            <CardTitle style={{ color: '#000', height: '176px' }} >Digital Farmer</CardTitle>
            <CardText>
              Web-based solution built using ReactJS and HTML5 GeoLocation utilizing a crawler and pre-built APIs
              </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        
        <div className="column-1" > 
        {/* Project 5*/}
        <Card shadow={5} style={{width:"90%" ,  margin: '5px' }}>
          <CardTitle style={{ color: '#000', height: '176px' }} >Image Classifier</CardTitle>
          <CardText>
           AWS geared image sorting solution using Laravel framework
            </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
       
        <div className="column-1" >
        <Card shadow={5} style={{width:'90%', margin: '5px' }}>
          <CardTitle style={{ color: '#000', height: '176px', }} >Query Generator</CardTitle>
          <CardText>
            Web Service wrapper around Standford NLP Parser with an aesthetic AngularJS UI/UX 
            </CardText>

          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>


        <div className="column-1">
          <Card shadow={5} style={{ width:'90%', margin: '5px' }}>
            <CardTitle style={{ color: '#000', height: '176px' }} >Roll A Dice Game</CardTitle>
            <CardText>
              Dice ROlling game demostarting server-client architecture using TCP connections over local network
              </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
          {/* <Card shadow={5} style={{ width:'23%',margin: '5px' }}>
          <CardTitle style={{ color: '#000', height: '176px', }} >Query Generator</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>

          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card> */}

      </div>
    )
  }

}
export default Projects;