import React, { useContext } from 'react'
import Theme from '../utils/Theme'
import AppContext from '../utils/AppContext'

export default function SectionTemplate(props) {
    const context = useContext(AppContext)
    console.log(props)
  return (
    <div style={{
        height:'100vh',
        backgroundColor:Theme(context.darkTheme).backgroundColor,
        paddingTop:'8vh'
        }}>
        {props.children}
    </div>
  )
}
