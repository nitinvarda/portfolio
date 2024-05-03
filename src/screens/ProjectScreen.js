import React from 'react'
import { Card, Button, Col, Container, Row, ButtonGroup } from 'react-bootstrap'
import Particle from './Particle'

function ProjectScreen() {
    return (
        <div>
            {/* <div style={styles.projectHeading} id="img2" >
                <div style={styles.projectTitle}>
                    <h1 id="project">PROJECTS</h1>
                </div>

            </div> */}
            <div style={{backgroundColor:'#222',position:'relative'}}>

            {/* <Particle height={80} color={'#fff'}  shapeColor={'#000'} /> */}
            <div style={{position:'absolute',top:10,display:'flex',flexDirection:'row',justifyContent:'center',width:'100%',color:'white'}}>
                <h2>Projects</h2>

            </div>
            </div>
            <Container>
                <Row>
                    <Col md={6} lg={5} style={{ padding: 20 }} data-aos='fade-down-right'  >
                        <Card style={styles.cardStyle} >
                            <Card.Img className="p-5" variant="top" src="images/RISTORANTE.png" />
                            <Card.Body>

                                <Card.Text>
                                    This is Restaurant website where you can reserve table on selected date and
                                    can add items to favorites . User should authenticate first to do any actions on
                                    site. It is made with MERN stack along with redux for state management.
                        </Card.Text>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <ButtonGroup aria-label="Basic example">
                                    {/* <Button variant="dark" href="https://ristorante-conf.herokuapp.com" target='blan   k' >Site Link</Button> */}
                                    <Button variant="secondary" href="https://github.com/nitinvarda/Confusion-fullstack" target='blank'>Github Link</Button>
                                    <Button variant="dark" href="https://github.com/nitinvarda/reactnative-confusion" target="blank">React Native Github Link</Button>
                                </ButtonGroup>
                            </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={{ span: 5, offset: 2 }} style={{ padding: 20 }} data-aos='fade-up-right' >
                        <Card style={styles.cardStyle}  >
                            <Card.Img className="p-5" variant="top" src="images/PROSHOP.png" />
                            <Card.Body>

                                <Card.Text>
                                    This is an E-commerce Site built with MERN Stack (MongoDB, Express Js,
                                    React JS, and Node Js). With Redux and PayPal Sandbox for mock payments
                        </Card.Text>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <ButtonGroup aria-label="Basic example">
                                    {/* <Button variant="dark" href="https://proshop1.herokuapp.com" target='blank'>Site Link</Button> */}
                                    <Button variant="secondary" href="https://github.com/nitinvarda/proshop" target='blank'>Github Link</Button>
                                    <Button variant="dark" href="https://github.com/nitinvarda/Proshop_ReactNative" target="blank">React Native Github Link</Button>
                                </ButtonGroup>
                            </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={5} style={{ padding: 20 }} data-aos='fade-up-right' >
                        <Card style={styles.cardStyle}>
                            <Card.Img className="p-5" variant="top" src="images/TRENDINIT.png" />
                            <Card.Body>

                                <Card.Text>
                                    This is a News Article Blog which is built with MERN Stack (MongoDB,
                                    Express Js, React JS, and Node Js). Only Admin can add, edit, or delete posts
                        </Card.Text>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                <ButtonGroup aria-label="Basic example">
                                    {/* <Button variant="dark" href="https://trendinit.herokuapp.com" target='blank'>Site Link</Button> */}
                                    <Button variant="secondary" href="https://github.com/nitinvarda/trendinit-react-redux-" target='blank'>Github Link</Button>
                                    <Button variant="dark" href="https://github.com/nitinvarda/Trendinit_ReactNative" target="blank">React Native Github Link</Button>
                                </ButtonGroup>
                            </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={{ span: 5, offset: 2 }} style={{ padding: 20 }} data-aos='fade-down-right'>
                        <Card style={styles.cardStyle}>
                            <Card.Img className="p-5" variant="top" src="images/COVID-19.png" style={{ objectFit: 'cover' }} />

                            <Card.Body>

                                <Card.Text>
                                    This is an E-commerce Site built with MERN Stack (MongoDB, Express Js,
                                    React JS, and Node Js). With Redux and PayPal Sandbox for mock payments
                                </Card.Text>
                                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant="dark" href="https://covid19indian-state.netlify.app" target="blank">Site Link</Button>
                                        <Button variant="secondary" href="https://github.com/nitinvarda/covid19site" target="blank">Github Link</Button>

                                    </ButtonGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


const styles = {
    projectHeading: {
        background: 'url(/images/galaxy_comp.gif) no-repeat ',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: 80,
    },
    projectTitle: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 10,
    },
    projectCardButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15
    },
    cardStyle: {
        borderRadius: 15,
        padding: 20,
        boxShadow: '0 2px 20px rgba(0,0,0,0.4)'
    }
}

export default ProjectScreen
