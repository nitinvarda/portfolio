import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function ScrollToTop(props) {
    const location = useLocation()
    useEffect(()=>{
        

        // if (location.pathname !== prevProps.location.pathname) {
        //   window.scrollTo(0, 0);
        // }
    },[])
    console.log({location})
  return props.children
}
