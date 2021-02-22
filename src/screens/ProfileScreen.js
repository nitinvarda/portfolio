import React from 'react'
import { Image } from 'react-bootstrap'
import './ProfileScreen.css'
import Particle from './Particle'


function ProfileScreen() {
    return (
        <div  id="home">
          <div style={{backgroundColor:'#222'}}>

            <Particle  height={'100vh'} color={"#fff"} shapeColor={'#000'}/>
          </div>
            <div style={{ paddingTop: '20vh',position:'absolute',top:0,width:'100%' }}>


                <div className="d-flex flex-row justify-content-center  ">

                    <Image src="./images/nitin1.jpg" width='170px' height='170px' alt='profile' roundedCircle fluid />

                </div>
                <h3 className='text-center my-4 text-white'>NITIN VARDA</h3>
                <div style={styles.socialLinks}>

                    <a href="https://github.com/nitinvarda" target="blank"><img src="images/github.png"
                        width="50px" height="50px" alt='github' /></a>
                    <a href="https://www.linkedin.com/in/nitin-varda-23b853196/" target="blank"><img src="images/linked-in.jpg"
                        style={{ width: 55, height: 55, borderRadius: '50%' }} alt='linked' /></a>
                    <a href="https://www.facebook.com/nitinvarda" target="blank"><img src="images/facebook.png"
                        style={{ width: 50, height: 50 }} alt='facebook' /></a>
                    <a href="https://twitter.com/nitinvarda" target="blank" id="about"><img
                        src="images/twitter-icon-circle-logo (2).png" style={{ width: 50, height: 50 }} alt='twitter' /></a>

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
        padding: 10,
        width: '70%',
        margin: 'auto',
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
