import React, { useContext } from 'react'
import { Col } from 'react-bootstrap'
import Theme from '../utils/Theme'
import AppContext from '../utils/AppContext'
import { Link, useLocation } from 'react-router-dom'

export default function RoutesTemplate(props) {
  const context = useContext(AppContext)
  const location = useLocation()
  return (
    <Col xs={3}  style={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      backgroundColor:location.pathname==props.route ? Theme(context.darkTheme).textColor : 'transparent',
      borderRadius:50,
      padding:10
      

      }}>
        <Link to={props.route} style={{
            color:location.pathname==props.route ? Theme(context.darkTheme).backgroundColor : Theme(context.darkTheme).textColor,
            fontWeight:'bold'
        }}>
            {props.name}
        </Link>
      </Col>
  )
}

