import React from 'react'
import { Image,Container } from 'react-bootstrap'
import Particle from '../components/Particle'
import {primaryColor,secondaryColor} from '../constants'

interface Styles{
    socialLinks: React.CSSProperties,
    img:React.CSSProperties
    
}


function ProfileScreen() {
    
    return (
        <Container >

       
        <div  id="home"  >
         
        <div style={{ width:'100%',height:'95vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', }}>
            <div style={{backgroundColor:'#222',position:'absolute',width:'100%',height:'95vh',zIndex:-1}}>

            <Particle id={'ProfileParticles'} />
        
            {/* height={'100%'} color={"#f2f2f2"} shapeColor={'#000'} */}
            </div>

            <div>

                <Image src="./images/nitinvarda.jpeg"  alt='profile' style={{width:220,height:220,objectFit:'cover'}} roundedCircle fluid />

            </div>
            <h1 className='text-center my-4 ' style={{color:secondaryColor,fontFamily:'Sacramento',fontSize:`clamp(3.3rem ,  -0.875rem + 9.333vw, 4.5rem)`,margin:0,fontWeight:'bold'}}>Nitin Varda</h1>
            <div style={styles.socialLinks}>

                <a href="https://github.com/nitinvarda" target="blank">
                    <img src="images/profile/github.svg"
                    width="50px" height="50px" alt='github' /></a>
                <a href="https://www.linkedin.com/in/nitin-varda-23b853196/" target="blank">
                    <img src="images/profile/linkedin.svg"
                    style={{ width: 55, height: 55, borderRadius: '50%' }} alt='linked' />
                </a>
                <a href="https://stackoverflow.com/users/9790809/nitin-varda" target="blank" id="about">
                    <img src="images/profile/stackoverflow.svg" style={{ width: 50, height: 50,borderRadius:'50%' }} alt='twitter' />
                    </a>
                <a href="https://www.npmjs.com/~nitinvarda" target="blank" id="about"><img
                    src="images/profile/npm.svg" style={{ width: 50, height: 50,borderRadius:'35%',objectFit:'contain' }} alt='medium' /></a>
                <a href="https://nitinvarda.medium.com/" target="blank" id="about"><img
                    src="images/profile/medium.svg" style={{ width: 50, height: 50,borderRadius:'50%' }} alt='npm' /></a>

            </div>
        </div>
          </div>
          </Container>
        
    )
}

const styles : Styles = {
    socialLinks: {
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: secondaryColor,
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
