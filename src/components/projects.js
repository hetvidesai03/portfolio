
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { render } from '@testing-library/react';
import { Col } from 'react-bootstrap';

class Projects extends Component {
  render() {
    return (
      <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto', height:'400px',marginTop:'10px' }}>
          <CardTitle style={{ color: '#000', height: '200px' }} >Ensemble</CardTitle>
          <CardText style={{height:'100px'}}>
            Web application developed using ReactJS, serverless architecture and Firebase
            </CardText>
          {/* <CardActions  style={{height:'100px'}} border >
            <Button colored>GitHub</Button>
          </CardActions> */}
          {/* <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu> */}
        </Card>
        
        {/* Project 2 */}

        <Card shadow={5} style={{ minWidth: '450', margin: 'auto',height:'400px',marginTop:'10px'   }}>
          <CardTitle style={{ color: '#000', height: '200px' }} >Web Search Engine</CardTitle>
          <CardText>
            Flask powered query-based text search engine utilizing a Python crawler
            </CardText>
          <CardActions style={{height:'100px'}} border>
            <Button colored>GitHub</Button>
          </CardActions>
          {/* <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu> */}
        </Card>

        {/* Project 4*/}

        <Card shadow={5} style={{ minWidth: '450', margin: 'auto',height:'400px',marginTop:'10px'  }}>
          <CardTitle style={{ color: '#000', height: '200px' }} >Digital Farmer</CardTitle>
          <CardText>
            Web-based solution built using ReactJS and HTML5 GeoLocation utilizing a crawler and pre-built APIs
              </CardText>
          <CardActions  style={{height:'100px'}} border>
            <Button colored>GitHub</Button>
          </CardActions>
          {/* <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu> */}
        </Card>


        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' ,height:'400px',marginTop:'10px' }}>
          <CardTitle style={{ color: '#000', height: '200px' }} >Image Classifier</CardTitle>
          <CardText>
            AWS geared image sorting solution using Laravel framework
            </CardText>
          <CardActions  style={{height:'100px'}} border>
            <Button colored>GitHub</Button>
          </CardActions>
          {/* <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu> */}
        </Card>

        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' ,height:'400px',marginTop:'10px' }}>
          <CardTitle style={{ color: '#000', height: '200px', }} >Query Generator</CardTitle>
          <CardText>
            Web Service wrapper around Standford NLP Parser with an aesthetic AngularJS UI/UX
            </CardText>
          {/* <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu> */}
        </Card>
        
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' , height:'400px',marginTop:'10px' }}>
         
            <CardTitle style={{ color: '#000', height: '200px' }} >Roll A Dice Game</CardTitle>
            <CardText>
              Dice ROlling game demostarting server-client architecture using TCP connections over local network
              </CardText>
            <CardActions  style={{height:'100px'}} border>
              <Button colored>GitHub</Button>
            </CardActions>
            {/* <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu> */}
          </Card>
          
          {/* <Card shadow={5} style={{ width:'23%',margin: '5px' }}>
          <CardTitle style={{ color: '#000', height: '200px', }} >Query Generator</CardTitle>
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