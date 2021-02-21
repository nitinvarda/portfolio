import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Particle from './Particle'

function AboutScreen() {
    return (
        <div>
            
            <div style={styles.about} id="about" data-aos='slide-up'  >
                <h1>Hey!</h1>
                <br />
                <h3>I'm Nitin Varda from India. An Engineering Graduate. </h3>
                <br />
                <h3>&nbsp;I love programming and learning new skills. </h3>

            </div>
        

            {/* <div style={styles.headingBackground} id="img2">
                <div style={styles.projectTitle} >
                    <h1 id="skills">Skills</h1>
                </div>

            </div> */}
            <div style={{backgroundColor:'#222',position:'relative',height:80}}>

                <Particle height={80} color={'#fff'} />
                <div style={{position:'absolute',top:10,display:'flex',flexDirection:'row',justifyContent:'center',width:'100%',color:'white'}} >
                    <h2 id="skills">Skills</h2>
                </div>
                
            </div>
            <Container >
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
                                <img src="images/jquery.png" width="70px" height="75px" alt='jquery' />
                            </div>
                            <h5 className='text-center py-2'>jQuery</h5>
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
