import Particles from '@tsparticles/react'
import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import JobSection from '../components/JobSection'
import Data from '../utils/Data';
import Section from '../components/Section';
import AppContext from '../utils/AppContext';
import Theme from '../utils/Theme';

export default function Experience(props) {
    const context = useContext(AppContext);
  return (
    <div style={{
        position:'relative',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Theme(context.darkTheme).backgroundColor,
        padding:"20px 0px"
        }}>
       <Container>

      <Section name="Experience" />
        

        <Row>
            {Data.length > 0 && Data.map((item,index)=><JobSection index={index} item={item} />)}
            
        </Row>
       </Container>
    </div>
  )
}
