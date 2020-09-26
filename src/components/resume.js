import React, { Component } from 'react';
import { Grid, Cell, List, ListItem } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skills';
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
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
            <p>
              <List>
                <ListItem>Over a year of experience in Python Development in an Agile environment paired with client- focused
                Infrastructure and Network Support</ListItem>
                <ListItem>Acquired hand-on experience in software and web development using Python, Java, C/C++, and
            JavaScript through various personal projects</ListItem>
                <ListItem>Adequate knowledge of OOP, Data Structures, Algorithms, SQL and Networking concepts acquired
            through projects and online training</ListItem>
                <ListItem>Skilled in scripting, automating software workflows and deployment pipelines</ListItem>
                <ListItem>Passionate to build and deploy efficient Web-Services on Linux Servers</ListItem>
                <ListItem>
                  Proficient in collaborating and communicating with various teams and international clients</ListItem>
                <ListItem>Developed analytical and problem-solving skills by resolving critical technical issues</ListItem>
              </List>
            </p>

            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
            <h5>Address</h5>
            <p>Ontario, Canada </p>
            
            <h5>Email</h5>
            <p>dhetvi@ymail.com</p>
           
            <h5>Web</h5>
            <p>mywebsite.com</p>
            
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h3>Education</h3>


            <Education
              startYear={'Sept 2019'}
              endYear={'Dec 2020'}
              schoolName="University of Windsor"
              schoolDescription="Master of Applied Computing"
            />

            <Education
              startYear={'Aug 2014'}
              endYear={'May 2018'}
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
              jobDescription=""
                          />

            <Experience
              startYear={'July 2018'}
              endYear={'July 2019'}
              jobName="System Engineer"
              companyName="Infosys Limited"
              jobDescription=""
            />
            <Experience
              startYear={'Feb 2018'}
              endYear={'May 2018'}
              jobName="System Engineer Intern"
              companyName="Infosys Limited"
              
              jobDescription=""
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            
            <h3>Skills</h3>
            
            <Skill main="Programming Languages" skill="Python, Java, C#, C/C++, JavaScript, Shell Script/PowerShell"/>
            <Skill main="Frameworks/Libraries" skill=" Django, NodeJS, TypeScript, AngularJS, ReactJS, Pandas, Junit, Hibernate"/>
            <Skill main="Database" skill="MySQL, Oracle DB, MongoDB, MS Access"/>
            <Skill main="OS Familiarity" skill="Linux, Windows, Android, iOS"/>
            <Skill main="Cloud Services" skill="Azure SQL, Compute, AWS Lambda, Azure Devops, Firebase"/>
            <Skill main= "Miscellaneous" skill=" Git, MS Office Suite, ServiceNow, BigPanda, Wireshark, CI/CD, Docker, Ansible"/>


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;