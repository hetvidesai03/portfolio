import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p style={{fontSize:'18px',margin:'0'}}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={4}>
          <h5 style={{marginTop:'0',fontSize:'1.5em', marginBottom:'10px' }}>{this.props.jobName}</h5>
          <h5 style={{marginTop:'0', marginBottom:'10px' }}><i>{this.props.companyName}</i></h5>
          <p>{this.props.jobDescription}</p>
        </Cell>
        <Cell col={4}>
          <h6 style={{marginTop:'0', marginBottom:'10px' }}>Technology Stack: {this.props.stack}</h6>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;