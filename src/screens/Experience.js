
import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import JobSection from '../components/JobSection'
import {experience} from '../utils/Data';
import AppContext from '../utils/AppContext';
import Theme from '../utils/Theme';
import SectionTemplate from '../components/SectionTemplate';
import { Col, Row } from 'react-bootstrap';

export default function Experience(props) {
    const context = useContext(AppContext);

  return (
    <SectionTemplate>

   
    <div id="experience" style={{
        position:'relative',
        display:'flex',
        flexDirection:'row',
        // alignItems:'center',
        backgroundColor:Theme(context.darkTheme).backgroundColor,
        padding:"20px 0px",
        height:'100%'
    
        }}>
       <Container>
        <Row>

          {experience.length > 0 && experience.map((item,index)=>(
            <Col lg={6} >
              <JobSection index={index} item={item} />
            </Col>
          ))
          }
          </Row>
       </Container>
       
    </div>
    </SectionTemplate>
  )
}
