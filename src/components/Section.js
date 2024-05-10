import React, { useContext } from 'react'
import AppContext from '../utils/AppContext';
import Theme from '../utils/Theme';

export default function Section(props) {
    const context = useContext(AppContext);

  return (
    <div>
        <h2 style={{color:Theme(context.darkTheme).textColor}}>{props.name}</h2>
      <div style={{width:'100%',height:1,backgroundColor:Theme(context.darkTheme).textColor,marginBottom:20}} />
    </div>
  )
}
