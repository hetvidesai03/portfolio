import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skill extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p style={{fontSize:'18px'}}>{this.props.main}</p>
        </Cell>
        <Cell col={8}>
          
          <h5 style={{marginTop:'0px'}}>{this.props.skill}</h5>
        </Cell>
      </Grid>
    )
  }
}

export default Skill;