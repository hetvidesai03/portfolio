import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p style={{fontSize:'18px'}}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h5 style={{marginTop:'0px',fontSize:'1.5em' }}>{this.props.schoolDescription}</h5>
          <h5><i>{this.props.schoolName}</i></h5>
        </Cell>
      </Grid>
    )
  }
}

export default Education;