import React, { useContext } from 'react'
import AppContext from '../utils/AppContext';
import Theme from '../utils/Theme';
import { CaseStudySections } from '../utils/Data';


const SectionTemplate = ({CaseStudy}) =>{
    const context = useContext(AppContext);
    return (
        <section>
        <h2 style={{ color:Theme(context.darkTheme).textColor}}>{CaseStudy.title} :</h2>
        <div style={{marginLeft:30}}>
            {CaseStudy.sections.length > 0 && CaseStudy.sections.map(section=>(
                <div>
                    <h3 style={{ color:Theme(context.darkTheme).textColor}}>{section.title}</h3>
                    {section.hasArray ? (
                        <ul>
                            {section.description.length > 0 && section.description.map(description => (
                            <li style={{ color:Theme(context.darkTheme).textColor}}>{description}</li>
                        ))}
                        </ul>
                       
                    ) : (
                        <p style={{ color:Theme(context.darkTheme).textColor}}>{section.description}</p>
                    )}
                </div>
            ))}
            
        </div>
        </section>
    )
}
export default function CaseStudy(props) {
    const context = useContext(AppContext);
  return (
    <div style={{height:'100%', backgroundColor:Theme(context.darkTheme).backgroundColor}}>
        {CaseStudySections.map(section=>(
            <SectionTemplate CaseStudy={section} />
        ))}
    </div>
  )
}


