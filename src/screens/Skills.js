import React, { useContext } from 'react'
import Theme from '../utils/Theme'
import AppContext from '../utils/AppContext'
import { Col, Container, Row } from 'react-bootstrap'
import Section from '../components/Section'

export default function Skills() {
    const context = useContext(AppContext)
  return (
    <div style={{backgroundColor:Theme(context.darkTheme).backgroundColor}}>
        <Container>

            <Section name="Skills" />

        <Row>
            <Col>
            <h2>Skill</h2>
            </Col>
            <Col>
            <h2>Skill</h2>
            </Col>
            <Col>
            <h2>Skill</h2>
            </Col>
            <Col>
            <h2>Skill</h2>
            </Col>
            <Col>
            <h2>Skill</h2>
            </Col>
            <Col>
            <h2>Skill</h2>
            </Col>
            <Col>
            <h2>Skill</h2>
            </Col>
        </Row>
        </Container>
    </div>
  )
}
