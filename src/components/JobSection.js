import React, { useContext } from 'react'
import Theme from '../utils/Theme'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import AppContext from '../utils/AppContext';

export default function JobSection(props) {
    const context = useContext(AppContext);
    const {item} = props;
    
  return (
   
        <Row style={{margin:"10px 0px"}}>
            <Col lg={4} md={5} >
                <div style={{backgroundColor:'white',padding:"20px 20px",borderRadius:10,border:"1px solid #222222"}}>

                    <img 
                    src={item.companyImage} 
                    style={{width:'100%',height:60}} 
                    alt={item.companyName} />
                </div>
            </Col>
            <Col lg={8} md={7} >
                <Container style={{display:'flex', flexDirection:'column',justifyContent:'flex-end',padding:10}} >
                    <Row style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Col md={8}>
                            <h5 style={{color:Theme(context.darkTheme).textColor}}>{item.role} - {item.companyName}</h5> 
                        </Col>
                        <Col md={4}>
                            <h6 style={{color:Theme(context.darkTheme).textColor}}>{item.timeline}</h6>
                        </Col>

                       

                    </Row>
                    <h6 style={{color:Theme(context.darkTheme).textColor}}>{item.location}</h6>
                    <div>
                        <p></p>
                    </div>
                </Container>
            
            </Col>

        </Row>
  
  )
}
