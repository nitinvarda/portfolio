
import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import JobSection from '../components/JobSection'
import Data from '../utils/Data';
import Section from '../components/Section';
import AppContext from '../utils/AppContext';
import Theme from '../utils/Theme';

export default function Experience(props) {
    const context = useContext(AppContext);
    const {experience} = Data;
  return (
    <div id="experience" style={{
        position:'relative',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Theme(context.darkTheme).backgroundColor,
        padding:"20px 0px",
    
        }}>
       <Container>

      <Section name="Experience" />
        

       
            {experience.length > 0 && experience.map((item,index)=><JobSection index={index} item={item} />)}
            
      
       </Container>
       
    </div>
  )
}
