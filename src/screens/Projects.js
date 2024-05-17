import React, { useContext } from 'react'
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap'
import Section from '../components/Section'
import Theme from '../utils/Theme'
import AppContext from '../utils/AppContext';
import Data from '../utils/Data';

export default function Projects(props) {
    const context = useContext(AppContext);
    const {projects} = Data
  return (
    <div style={{backgroundColor:Theme(context.darkTheme).backgroundColor}}>

    <Container>
        <Section name="Projects" />
       
            {projects.length > 0 && projects.map((item,key)=>{
                console.log(key,key%2==0,key%2==0 ? 2 : 1)
                return(
                    <Row >
                    <Col 
                    lg={{order:item.name=='Riku' ? 1 : 2,span:6}} 
                    style={{display:'flex',justifyContent:'center',alignItems:'center'}}
                    >
                    <Carousel>
                        {item.images?.map(img=>(
                            <Carousel.Item>
                                <Image src={img} thumbnail fluid  style={{height:400,width:item.name=='Riku' ? 500 : 200}}/>
                            </Carousel.Item>

                        ))}
                    </Carousel>
                    </Col>
                    <Col lg={{order:item.name=='Riku' ? 2 : 1,span:6}} >
                        <h5 style={{color:Theme(context.darkTheme).textColor}}>{item.name}</h5>
                        <p style={{color:Theme(context.darkTheme).textColor}}>{item.description}</p>
                    </Col>
                    </Row>
                )
            })}
            
     
    </Container>
    </div>
  )
}
