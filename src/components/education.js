import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4} style={{margin:'0'}}>
          <p style={{fontSize:'18px',margin:'0'}}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h5 style={{marginTop:'0',fontSize:'1.5em', marginBottom:'10px' }}>{this.props.schoolDescription}</h5>
          <h5 style={{marginTop:'0', marginBottom:'10px' }}><i>{this.props.schoolName}</i></h5>
        </Cell>
      </Grid>
    )
  }
}

export default Education;