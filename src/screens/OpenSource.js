import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppContext from '../utils/AppContext'
import Theme from '../utils/Theme'
import Section from '../components/Section'

export default function OpenSource() {
    const context = useContext(AppContext)
  return (
    <div style={{backgroundColor:Theme(context.darkTheme).backgroundColor}}>
        <Container>
            <Section name="Open-Source" />
            <Row>
                <Col>
                    <h4 style={{color:Theme(context.darkTheme).textColor}}><a href='' style={{textDecoration:'none',color:Theme(context.darkTheme).textColor}}>React-Native-Esp-32-idf</a></h4>
                    <h6 style={{color:Theme(context.darkTheme).textColor,lineHeight:1.5}}>
                        I redesigned the react-native-esp-idf library as react-native-esp32-idf, 
                        introducing significant modifications to enable seamless direct Wi-Fi 
                        networking for ESP devices within React Native apps. 
                        This shift revolutionizes the development landscape by 
                        eliminating the previous dependency on Bluetooth for app provisioning, 
                        providing developers with a more streamlined method of connecting ESP32 devices. 
                        Furthermore, I effectively packed these enhancements into a comprehensive 
                        new <b>NPM package</b> , providing developers with unsurpassed convenience and speed 
                        when utilizing ESP32 features in their projects.
                    </h6>
                </Col>

            </Row>
        </Container>
    </div>
  )
}
