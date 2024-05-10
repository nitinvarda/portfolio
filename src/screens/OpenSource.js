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
                    <p>he href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md</p>
                </Col>

            </Row>
        </Container>
    </div>
  )
}
