import React, { useContext } from 'react'
import Theme from '../utils/Theme'
import AppContext from '../utils/AppContext'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Section from '../components/Section'

export default function Skills() {
    const context = useContext(AppContext)
  return (
    <div  id="skills" style={{backgroundColor:Theme(context.darkTheme).backgroundColor}}>
        <Container>

            <Section name="Skills" />

            <Row>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-up-right'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <i className='fab fa-html5 fa-5x' style={{color:Theme(context.darkTheme).textColor}}></i>
                            </div>
                            <h5 className='text-center py-2'  style={{color:Theme(context.darkTheme).textColor}}>HTML 5</h5>
                        </div>
                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-down' >
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <i className='fab fa-css3-alt fa-5x'  style={{color:Theme(context.darkTheme).textColor}}></i>
                            </div>
                            <h5 className='text-center py-2'  style={{color:Theme(context.darkTheme).textColor}}>CSS 3</h5 >
                        </div>
                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-up'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <i className='fab fa-js-square fa-5x'  style={{color:Theme(context.darkTheme).textColor}}></i>
                            </div>
                            <h5 className='text-center py-2'  style={{color:Theme(context.darkTheme).textColor}}>JavaScript</h5>
                        </div>
                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-up-right'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <i className='fab fa-react fa-5x'  style={{color:Theme(context.darkTheme).textColor}}></i>
                            </div>
                            <h5 className='text-center py-2'  style={{color:Theme(context.darkTheme).textColor}}>React Js</h5>
                        </div>
                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-down'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>

                                <img src={`images/updatedImages/redux${context.darkTheme ? '-d' : ''}.png`} width="80px" height="75px" alt='redux'  />
                            </div>
                            <h5 className='text-center py-2'  style={{color:Theme(context.darkTheme).textColor}}>Redux</h5>
                        </div>
                    </Col>

                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-up'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <i className='fab fa-node-js fa-5x'  style={{color:Theme(context.darkTheme).textColor}}></i>
                            </div>
                            <h5 className='text-center py-2 '  style={{color:Theme(context.darkTheme).textColor}} >Node Js</h5>
                        </div>
                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-down'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <i className='fab fa-react fa-5x'  style={{color:Theme(context.darkTheme).textColor}}></i>
                            </div>
                            <h5 className='text-center py-2'  style={{color:Theme(context.darkTheme).textColor}}>React Native</h5>
                        </div>
                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-up'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <img src={`images/updatedImages/express${context.darkTheme ? '-d' : ''}.png`} width="70px" height="50px" alt='express js' />
                            </div>
                            <h5 className='text-center'  style={{color:Theme(context.darkTheme).textColor,paddingTop:25}}>Express Js</h5>
                        </div>


                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-up'>
                        <div style={styles.skillContainer} >
                            <div style={styles.imageCenter}>
                                <img src={`images/updatedImages/firebase${context.darkTheme ? '-d' : ''}.png`} width="55px" height="75px" alt='jquery' />
                            </div>
                            <h5 className='text-center py-2'  style={{color:Theme(context.darkTheme).textColor}}>Firebase</h5>
                        </div>


                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-down-right'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <img src={`images/updatedImages/${context.darkTheme ? 'bootstrap-d' : 'bootstrap'}.png`} width="65px" height="75px" alt='bootstrap' />
                            </div>
                            <h5 className='text-center py-2'  style={{color:Theme(context.darkTheme).textColor}}>Bootstrap</h5>
                        </div>


                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-down'>
                        <div style={styles.skillContainer}>
                            <div style={styles.imageCenter}>
                                <img src={`images/updatedImages/MongoDb${context.darkTheme ? '-d' : ''}.png`} width="35px" height="75px" alt='mongodb'  />
                            </div>
                            <h5 className='text-center py-2'  style={{color:Theme(context.darkTheme).textColor}}>MongoDB</h5>
                        </div>


                    </Col>
                    <Col style={styles.skillCol} xs={6} sm={4} md={3} lg={2} data-aos='fade-up'>
                        <div style={styles.skillContainer} >
                            <div style={styles.imageCenter}>
                                <img src={`images/updatedImages/materialUi${context.darkTheme ? '-d' : ''}.png`} width="55px" height="75px" alt='material Ui' style={{objectFit:'contain'}}/>
                            </div>
                            <h5 className='text-center py-2'  style={{color:Theme(context.darkTheme).textColor}}>Material UI</h5>
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
