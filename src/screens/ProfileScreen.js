import React, { useContext } from 'react'
import { Container, Image,Row,Col } from 'react-bootstrap'
import Particle from './Particle'
import AppContext from '../utils/AppContext'
import Theme from '../utils/Theme';


function ProfileScreen(props) {
    const context = useContext(AppContext);
    
    console.log(context)
    return (
        <div style={{backgroundColor:Theme(context.darkTheme).backgroundColor, width:'100%',height:'95vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        
        
        
        <Container >
            <Row   style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
                <Col lg={5}  style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
           
                <div  style={{borderRadius:20,flexDirection:'row',justifyContent:'center',alignItems:'center',padding:20}} >
                    {/* <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                        <Image src="./images/nitinvarda.jpeg"  alt='profile' style={{width:220,height:220,objectFit:'cover',borderColor:"#333333",border:"2px solid #333333"}} roundedCircle fluid />
                    </div> */}
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
                                <a href=''><img src={`images/updatedImages/${context.darkTheme ? 'github-d.png': 'github.png'}`} style={{ width: 35, height: 35, borderRadius: '50%', }} /></a>
                                <a href=''><img src={`images/updatedImages/${context.darkTheme ? 'linkedIn-d.png' : 'linkedIn.png'}`} style={{ width: 35, height: 35, borderRadius: '50%', }} /></a>
                                <a href=''><img src={`images/updatedImages/${context.darkTheme ?'stackOverflow-d.png' :'stackOverflow.png'}`} style={{ width: 35, height: 35, borderRadius: '50%', }} /></a>
                                <a href=''><img src={`images/updatedImages/${context.darkTheme ?'npm-d.png' :'npm.png'}`} style={{ width: 35, height: 35, borderRadius: '50%', }} /></a>
                                <a href=''><img src={`images/updatedImages/${context.darkTheme ? 'medium-d.png':'medium.png'}`} style={{ width: 35, height: 35, borderRadius: '50%', }} /></a>
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
                            }}>Hi there ! I am a passionate <br /> <em><b style={{color:'green'}}>Software Developer</b></em> <br /> with two years of hands-on experience in crafting digital solutions. My journey in the world of coding has been a thrilling ride, and I'm excited to learn new skills.</h3>
                    </div>
                </Col>
            </Row>

     
      
          </Container>
          </div>
        
        
    )
}

const styles = {
    socialLinks: {
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems:'center',
        padding: 10,
        width: 'clamp(300px,65%,80%)',
        // margin: 'auto',
        marginTop: 35
    },
    img: {
        background: 'url(/images/galaxy.gif) no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '100vh'
    }
}

export default ProfileScreen
