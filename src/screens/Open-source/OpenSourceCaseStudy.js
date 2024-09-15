import React, { useContext } from 'react'
import SectionTemplate from '../../components/SectionTemplate'
import CaseStudy from '../../components/CaseStudy'
import { Col, Container, Row } from 'react-bootstrap'
import AppContext from '../../utils/AppContext';
import Theme from '../../utils/Theme';

export default function OpenSourceCaseStudy(props) {
    const context = useContext(AppContext);
  return (
    <SectionTemplate>
        <Container>
            <Row>
                <Col>
                    <div style={{ backgroundColor:Theme(context.darkTheme).backgroundColor}}>
            
                        <CaseStudy />
                    </div>
                </Col>

            </Row>
        </Container>
    </SectionTemplate>
  )
}
