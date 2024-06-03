import React, { useContext } from 'react'
import Col from 'react-bootstrap/Col'
import Row  from 'react-bootstrap/Row'
import ButtonGroup  from 'react-bootstrap/ButtonGroup'
import Button  from 'react-bootstrap/Button'
import AppContext from '../utils/AppContext';
import Theme from '../utils/Theme';

export default function ProjectTile(props) {
  const context = useContext(AppContext);
   
  return (
    <Row>

   
        <Col xs={12}  >
            <Row >
              <Col lg={6} md={12} xs={12}>
                <p style={{
                  color:Theme(context.darkTheme).textColor,
                  fontSize:`clamp(2.3rem ,  -0.875rem + 1.333vw, 2.5rem)`,

                  }}> {props.name}</p>
                {/* <img src={context.darkTheme ? props.img_d : props.img} style={{width:'100%',height:60}} /> */}
              </Col>
              <Col lg={6} md={12} xs={12} >
            
                    <ButtonGroup>
                      
                      <Button variant={context.darkTheme ? "outline-light" :'outline-secondary'} href={props.react} target='_blank'  >Github</Button>
                      <Button variant={context.darkTheme ?  "outline-light":'outline-secondary' }href={props.reactNative} target='_blank'  >React Native Github</Button>
                    
                    </ButtonGroup>
              

               
              </Col>
            </Row>
        </Col>
        <Col lg={12}>
          <p style={{color:Theme(context.darkTheme).textColor,marginTop:10}}>{props.description}</p>
         
        </Col>
      </Row>
  
   
  )
}
