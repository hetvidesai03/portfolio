
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { render } from '@testing-library/react';

class Projects extends Component {
  render() {
    return (
      <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{ width:'23%',margin: '5px'}}>
          <CardTitle style={{ color: '#000', height: '176px', }} >Ensemble</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}

        {/* Project 3 */}
        <Card shadow={5} style={{ width:'23%', margin: '5px' }}>
          <CardTitle style={{ color: '#000', height: '176px' }} >Image Classifier</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 4*/}
        <Card shadow={5} style={{width:'23%', margin: '5px' }}>
          <CardTitle style={{ color: '#000', height: '176px' }} >Digital Farmer</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 5*/}
        <Card shadow={5} style={{ width:'23%', margin: '5px' }}>
          <CardTitle style={{ color: '#000', height: '176px' }} >Digital Farmer</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
       
        <Card shadow={5} style={{width:'23%', margin: '5px' }}>
          <CardTitle style={{ color: '#000', height: '176px', }} >Query Generator</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>

          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        
        <Card shadow={5} style={{ width:'23%', margin: '5px' }}>
          <CardTitle style={{ color: '#000', height: '176px' }} >Digital Farmer</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        
          <Card shadow={5} style={{ width:'23%',margin: '5px' }}>
          <CardTitle style={{ color: '#000', height: '176px', }} >Query Generator</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>

          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

      </div>
    )
  }

}
export default Projects;