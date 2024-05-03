import React from 'react'
import { Image } from 'react-bootstrap'
import Particle from './Particle'


function ProfileScreen(props) {
    
    return (
        <div  id="home"  >
         
        <div style={{ width:'100%',height:'95vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', }}>
            <div style={{backgroundColor:'#222',position:'absolute',width:'100%',height:'95vh',zIndex:-1}}>

            <Particle id={'profileScreen-particles'} height={'100%'} width={'100%'} />
            </div>

            <div  >

                <Image src="./images/nitinvarda.jpeg"  alt='profile' style={{width:220,height:220,objectFit:'cover'}} roundedCircle fluid />

            </div>
            <h1 className='text-center my-4 text-white' style={{fontFamily:'Sacramento',fontSize:`clamp(3.3rem ,  -0.875rem + 9.333vw, 4.5rem)`,margin:0,fontWeight:'bold'}}>Nitin Varda</h1>
            <div style={styles.socialLinks}>

                <a href="https://github.com/nitinvarda" target="blank"><img src="images/github.png"
                    width="50px" height="50px" alt='github' /></a>
                <a href="https://www.linkedin.com/in/nitin-varda-23b853196/" target="blank"><img src="images/linked-in.jpg"
                    style={{ width: 55, height: 55, borderRadius: '50%' }} alt='linked' /></a>
                <a href="https://stackoverflow.com/users/9790809/nitin-varda" target="blank" id="about"><img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC94ZonX3gJoKrvOmZynNWQhq6Wask4tujtuUc04plT8-UTEKJDZ4163Hz-3vltLonV9U&usqp=CAU" style={{ width: 50, height: 50,borderRadius:'50%' }} alt='twitter' /></a>
                <a href="https://www.npmjs.com/~nitinvarda" target="blank" id="about"><img
                    src="https://icons.veryicon.com/png/o/miscellaneous/eva-fill/npm-3.png" style={{ width: 50, height: 50,borderRadius:'50%' }} alt='twitter' /></a>
                <a href="https://nitinvarda.medium.com/" target="blank" id="about"><img
                    src="https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png" style={{ width: 50, height: 50,borderRadius:'50%' }} alt='twitter' /></a>

            </div>
        </div>
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
