import React from 'react'
import Particle from '../screens/Particle'

function Footer() {
    return (
        <div className='d-flex flex-row justify-content-center  ' style={{ backgroundColor: '#222',height:'15vh',position:'relative',borderTop:'1px solid #f2f2f2',alignItems:'center'}}>
            {/* <Particle    /> */}
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',width:'100%',color:'white',alignItems:'center'}}>

            <a href="mailto:nitinvardha09@gmail.com" style={{ textDecoration: 'none' }}><h6 className='text-white'>nitinvardha09@gmail.com</h6></a>
            </div>
        </div>
    )
}

export default Footer
