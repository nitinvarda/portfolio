import React, { useContext } from 'react'
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap'
import Section from '../components/Section'
import Theme from '../utils/Theme'
import AppContext from '../utils/AppContext';
import Data from '../utils/Data';

export default function Projects(props) {
    const context = useContext(AppContext);
    const {projects} = Data
    console.log(projects)
  return (
    <div style={{backgroundColor:Theme(context.darkTheme).backgroundColor}}>

    <Container>
        <Section name="Projects" />
       
            {projects.length > 0 && projects.map((item,key)=>{
             
                return(
                    <Row >
                    <Col 
                    lg={{order:item.name=='Riku' ? 1 : 2,span:6}} 
                    style={{display:'flex',justifyContent:'center',alignItems:'center'}}
                    >
                    <Carousel indicators={false} controls={false} fade >
                        {item.images?.map((img,key)=>(
                            <Carousel.Item style={{
                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'space-around',
                                width:'100%',
                                height:'50vh',
                                marginBottom:10
                                }}>
                                    

                              
                                 
                                    <Image src={img.img}  style={{height:'100%',width:item.name=='Riku' ? '100%':'40%',borderRadius:5}}/>
                                    
                               
                                

                                
                            </Carousel.Item>

                        ))}
                    </Carousel>
                    </Col>
                    
                    <Col lg={{order:item.name=='Riku' ? 2 : 1,span:6}} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        {item.url ? (
                            <a href={item.url} target='_blank'><h4 >{item.name}</h4></a>
                        ) : (

                            <h4 style={{color:Theme(context.darkTheme).textColor}}>{item.name}</h4>
                        )}
                        <p style={{color:Theme(context.darkTheme).textColor,fontSize:18}}>{item.description}</p>
                    </Col>
                    </Row>
                )
            })}
            
     
    </Container>
    </div>
  )
}
