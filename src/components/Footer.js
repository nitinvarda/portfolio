import React, { useContext } from 'react'
import AppContext from '../utils/AppContext';
import Theme from '../utils/Theme';

function Footer() {
    const context = useContext(AppContext);
    return (
        <div className='d-flex flex-row justify-content-center' style={{ backgroundColor: '#222',height:'15vh',position:'relative',borderTop:`1px solid ${Theme(context.darkTheme).textColor}`,alignItems:'center'}}>
        
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',width:'100%',color:'white',alignItems:'center',zIndex:1}}>

            <a href="mailto:nitinvardha09@gmail.com" style={{ textDecoration: 'none' }}><h6 className='text-white'>nitinvardha09@gmail.com</h6></a>
            </div>
        </div>
    )
}

export default Footer
