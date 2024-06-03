import React, { useContext } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Section from '../components/Section'
import Theme from '../utils/Theme'
import AppContext from '../utils/AppContext'
import Data from '../utils/Data'
import ProjectTile from '../components/ProjectTile'

function ProjectScreen() {
    const context = useContext(AppContext);
    const {personalProjects} = Data;
    return (
        <div style={{backgroundColor:Theme(context.darkTheme).backgroundColor,paddingBottom:20}}>
            
            <div style={{backgroundColor:Theme(context.darkTheme).backgroundColor,position:'relative',height:80}}>
            <Container>
            <Section name="Personal Projects" />
            </Container>
            </div>
            <div style={{backgroundColor:Theme(context.darkTheme).backgroundColor}}>

            <Container>
              <Row>
                {personalProjects.length > 0 && personalProjects.map((project,key)=>(
                    <Col md={6}  xs={12}  data-aos='fade-down-right'  >
                        
                        <ProjectTile 
                            index={key}
                            description={project.description} 
                            name={project.name}
                            img={project.img}
                            img_d={project.img_d}
                            react={project.github_react}
                            reactNative={project.github_reactNative} 
                            />
                     </Col>
    
    
                ))}
                </Row>
               
               
            </Container>
            </div>
        </div>
    )
}


export default ProjectScreen
