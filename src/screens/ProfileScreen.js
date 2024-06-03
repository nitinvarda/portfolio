import React, { useContext } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import AppContext from '../utils/AppContext'
import Theme from '../utils/Theme';


function ProfileScreen(props) {
    const context = useContext(AppContext);
    
   
    return (
       
        <div style={{position:'relative',backgroundColor:Theme(context.darkTheme).backgroundColor, width:'100%',height:'95vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      
      {/* <Particle id="profileScreen-particles" /> */}
        
        <Container >
            <Row   style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
                <Col lg={5}  style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
           
                <div  style={{borderRadius:20,flexDirection:'row',justifyContent:'center',alignItems:'center',padding:20}} >
                    
                    <h1 className='text-center ' style={{
                        fontFamily:'Sacramento',
                        fontSize:`clamp(3.3rem ,  -0.875rem + 9.333vw, 4.5rem)`,
                        margin:0,
                        fontWeight:'bold',
                        color:Theme(context.darkTheme).textColor
                        }}>Nitin Varda</h1>
                    <div style={{
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'center',
                        margin:"20px 0 20px 0",
                        justifyContent:'space-between',
                        backgroundColor:Theme(context.darkTheme).textColor,
                        padding:15,
                        borderRadius:50,
                        }}>
                                <a  href='https://github.com/nitinvarda'><img alt="github" src={`images/updatedImages/${context.darkTheme ? 'github-d.png': 'github.png'}`} style={{ width: 35, height: 35, borderRadius: '50%', }} /></a>
                                <a  href='https://www.linkedin.com/in/nitin-varda-23b853196/'><img alt="linkedin" src={`images/updatedImages/${context.darkTheme ? 'linkedIn-d.png' : 'linkedIn.png'}`} style={{ width: 35, height: 35, borderRadius: '50%', }} /></a>
                                <a href='https://stackoverflow.com/users/9790809/nitin-varda'><img  alt="stackoverflow" src={`images/updatedImages/${context.darkTheme ?'stackOverflow-d.png' :'stackOverflow.png'}`} style={{ width: 35, height: 35, borderRadius: '50%', }} /></a>
                                <a  href='https://www.npmjs.com/~nitinvarda'><img alt="npm" src={`images/updatedImages/${context.darkTheme ?'npm-d.png' :'npm.png'}`} style={{ width: 35, height: 35, borderRadius: '50%', }} /></a>
                                <a  href='https://nitinvarda.medium.com/'><img alt="medium" src={`images/updatedImages/${context.darkTheme ? 'medium-d.png':'medium.png'}`} style={{ width: 35, height: 35, borderRadius: '50%', }} /></a>
                        </div>
                </div>


                </Col>
                <Col  lg={7} >
                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center',
                        
                        }}>

                        
                         <h3 className='text-center' 
                         style={{
                            fontStyle:'italic',
                            fontSize:`clamp(1.4rem ,  -0.875rem + 6.333vw, 2.2rem)`,
                            color:Theme(context.darkTheme).textColor
                            }}>Hi there ! I am a passionate <br /> <em><b style={{color:'green'}}>Software Engineer</b></em> <br /> with four years of hands-on experience in crafting digital solutions. My journey in the world of coding has been a thrilling ride, and I'm excited to learn new skills.</h3>
                    </div>
                </Col>
            </Row>

     
      
          </Container>
          </div>
          
        
        
    )
}



export default ProfileScreen
