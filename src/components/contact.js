import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Hetvi Desai</h2>
            <img
              src="https://image.flaticon.com/icons/png/512/1508/1508843.png"
              alt="avatar"
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}></p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
               

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    dhetvi@ymail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px' }}>
                    <i className="fa fa-linkedin" aria-hidden="true" />
                    hetvidesai03
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;