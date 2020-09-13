import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return (
      <div className="resume-body">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://image.flaticon.com/icons/png/512/1508/1508843.png"
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Hetvi Desai</h2>
            <h4 style={{ color: 'grey' }}>Software Developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Dummy Data</p>
                          
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          
          <Cell className="resume-right-col" col={8}>
            <h3>Education</h3>


            <Education
              startYear={2019}
              endYear={2020}
              schoolName="University of Windsor"
              schoolDescription="Master of Applied Computing"
            />

            <Education
              startYear={2014}
              endYear={2018}
              schoolName="Dharmsinh Desai University"
              schoolDescription="Bachelor of Technology in Information Technology"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h3>Experience</h3>

            <Experience
              startYear={'Sept 2020'}
              endYear={'Ongoing'}
              jobName="Software Developer Intern"
              companyName="Coveo"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            {/* <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={100}
            />
            <Skills
              skill="HTML/CSS"
              progress={80}
            />
            <Skills
              skill="NodeJS"
              progress={50}
            />
            <Skills
              skill="React"
              progress={25}
            /> */}


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;