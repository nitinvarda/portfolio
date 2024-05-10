import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Particle from './Particle'
import './AboutScreen.css'

function AboutScreen() {
    return (
       
        <div >
            <div style={{backgroundColor:'#222',position:'relative',height:80}}>
            <Container>
            <Particle id={'aboutScreen-particles'} />
                
                <div style={{position:'absolute',top:15,alignItems:'center',display:'flex',flexDirection:'row',color:'white'}} >
                    <h2 id="skills">Work experience</h2>
                </div>
                
            </Container>
            </div>
            <Container>

          
            
                <Row>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-up-right'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <i className='fab fa-html5 fa-5x'></i>
                            </div>
                            <h5 className='text-center py-2'>HTML 5</h5>
                        </div>
                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-down' >
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <i className='fab fa-css3-alt fa-5x'></i>
                            </div>
                            <h5 className='text-center py-2'>CSS 3</h5 >
                        </div>
                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-up'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <i className='fab fa-js-square fa-5x'></i>
                            </div>
                            <h5 className='text-center py-2'>JavaScript</h5>
                        </div>
                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-up-right'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <i className='fab fa-react fa-5x'></i>
                            </div>
                            <h5 className='text-center py-2'>React Js</h5>
                        </div>
                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-down'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>

                                <img src="images/redux.png" width="80px" height="75px" alt='redux ' />
                            </div>
                            <h5 className='text-center py-2'>Redux</h5>
                        </div>
                    </Col>

                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-up'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <i className='fab fa-node-js fa-5x'></i>
                            </div>
                            <h5 className='text-center py-2 ' >Node Js</h5>
                        </div>
                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-down'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <i className='fab fa-react fa-5x'></i>
                            </div>
                            <h5 className='text-center py-2'>React Native</h5>
                        </div>
                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-up'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <img src="images/express.png" width="70px" height="75px" alt='express js' />
                            </div>
                            <h5 className='text-center py-2'>Express Js</h5>
                        </div>


                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-up'>
                        <div style={styles.skillContainer} >
                            <div style={styles.imageCenter}>
                                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/firebase-512.png" width="70px" height="75px" alt='jquery' />
                            </div>
                            <h5 className='text-center py-2'>Firebase</h5>
                        </div>


                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-down-right'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <img src="images/bootstrap.png" width="65px" height="75px" alt='bootstrap' />
                            </div>
                            <h5 className='text-center py-2'>Bootstrap</h5>
                        </div>


                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-down'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <img src="images/mongodb.png" width="60px" height="75px" alt='mongodb' />
                            </div>
                            <h5 className='text-center py-2'>MongoDB</h5>
                        </div>


                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-up'>
                        <div style={styles.skillContainer} >
                            <div style={styles.imageCenter}>
                                <img src="data:image/png;base64,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" width="70px" height="75px" alt='jquery' />
                            </div>
                            <h5 className='text-center py-2'>Material UI</h5>
                        </div>


                    </Col>
                  


                </Row>
                </Container>
         
        </div>
    )
}


const styles = {
    about: {
        textAlign: 'center',
        overflow: 'hidden',
        fontSize: 25,
        paddingBottom: 30,
        margin:'20px 0',
    },
    headingBackground: {
        background: 'url(/images/galaxy_comp.gif) no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: 80,
    },
    projectTitle: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 10,
    },
    skillCol: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20
    },
    imageCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    skillContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
}


export default AboutScreen
