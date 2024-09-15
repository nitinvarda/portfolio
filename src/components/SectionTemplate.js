import React, { useContext } from 'react'
import Theme from '../utils/Theme'
import AppContext from '../utils/AppContext'
import ScrollToTop from './ScrollToTop'
import { useLocation } from 'react-router-dom'

export default function SectionTemplate(props) {
    const context = useContext(AppContext)
    const location = useLocation()
   console.log(location.pathname)
  return (
  
    <div style={{
      ...(location.pathname == "/open-source/case-study" ? {minHeight:'100vh'} : {height:'86vh'}),
        backgroundColor:Theme(context.darkTheme).backgroundColor,
        // paddingTop:'8vh'
        }}>
        {props.children}
    </div>
  
  )
}
