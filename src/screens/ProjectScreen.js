import React, { useContext } from 'react'
import { Card, Button, Col, Container, Row, ButtonGroup } from 'react-bootstrap'
import Particle from './Particle'
import Section from '../components/Section'
import Theme from '../utils/Theme'
import AppContext from '../utils/AppContext'
import Data from '../utils/Data'
import ProjectCard from '../components/ProjectCard'

function ProjectScreen() {
    const context = useContext(AppContext);
    const {personalProjects} = Data;
    return (
        <div style={{backgroundColor:Theme(context.darkTheme).backgroundColor}}>
            
            <div style={{backgroundColor:Theme(context.darkTheme).backgroundColor,position:'relative',height:80}}>
            <Container>

            {/* <Particle  /> */}
            <Section name="Personal Projects" />
            </Container>
            </div>
            <div style={{backgroundColor:Theme(context.darkTheme).backgroundColor}}>

          
            <Container>
                <Row>
                {personalProjects.length > 0 && personalProjects.map((project,key)=>(
                    <Col md={6} lg={4} style={{ padding: 10 }} data-aos='fade-down-right'  >
                        
                        <ProjectCard 
                            description={project.description} 
                            img={project.img}
                            github_react={project.github_react}
                            github_reactNative={project.github_reactNative} 
                            />
                    </Col>
    
    
                ))}
                </Row>
               
            </Container>
            </div>
        </div>
    )
}


const styles = {
    projectHeading: {
        background: 'url(/images/galaxy_comp.gif) no-repeat ',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: 80,
    },
    projectTitle: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 10,
    },
    projectCardButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15
    },
    cardStyle: {
        borderRadius: 15,
        padding: 20,
        boxShadow: '0 2px 20px rgba(0,0,0,0.4)'
    }
}

export default ProjectScreen
