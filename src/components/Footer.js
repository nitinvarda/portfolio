import React from 'react'
import Particle from '../screens/Particle'

function Footer() {
    return (
        <div className='d-flex flex-row justify-content-center ' style={{ backgroundColor: '#222',height:'8vh',position:'relative' }}>
            <Particle    />
            <div style={{position:'absolute',top:10,display:'flex',flexDirection:'row',justifyContent:'center',width:'100%',color:'white'}}>

            <a href="mailto:nitinvardha09@gmail.com" style={{ textDecoration: 'none' }}><h6 className='text-white'>nitinvardha09@gmail.com</h6></a>
            </div>
        </div>
    )
}

export default Footer
