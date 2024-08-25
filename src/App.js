import React, { useState } from 'react';

import ProfileScreen from './screens/ProfileScreen'
import Experience from './screens/Experience';
import AppContext from './utils/AppContext';
import Skills from './screens/Skills';
import Projects from './screens/Projects';
import { BrowserRouter,Routes, Route, Outlet } from "react-router-dom";
import Theme from './utils/Theme';
import { Container, Row } from 'react-bootstrap';
import RoutesTemplate from './components/RoutesTemplate';
import {AllRoutes} from "./utils/Data"


function App() {


  const [onWorkExperience,setOnWorkExperience] = useState(false);
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  const [darkTheme,setDarkTheme] = useState(darkThemeMq.matches)
 

  window.addEventListener('scroll',(e)=>{

    if(window.scrollY > 800){
      setOnWorkExperience(true)
    }
    else{
      setOnWorkExperience(false);
    }
   
});

const changeTheme = () =>{
  if(darkTheme) {
    setDarkTheme(false);
  }
  else{
    setDarkTheme(true)
  }
}


  return (
    <AppContext.Provider value={{darkTheme,changeTheme}} >
    <div >
      
      <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Layout darkTheme={darkTheme} changeTheme={changeTheme} />} >

          <Route index element={<ProfileScreen />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Experience" element={<Experience sticky={onWorkExperience} />} />
  
        </Route>
  
  

        
      
      </Routes>
      </BrowserRouter>
        {/* <Footer /> */}
   

      
 
     
     
     

  
     



    </div>
    <div style={{
      position:'fixed',
      top:'9vh',
      right:0,
      width:'60px',
      height:'60px',
      backgroundColor:Theme(darkTheme).textColor,
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderTopLeftRadius:50,
      borderBottomLeftRadius:50,
      padding:5
    }}>
     
     <i onClick={()=>changeTheme()} class={`bi ${darkTheme ? "bi-brightness-high-fill" : "bi-moon-fill" }`} style={{
      color:Theme(darkTheme).backgroundColor,
      fontSize:35,
      }}></i>
     
    {/* <p style={{
            color:Theme(darkTheme).backgroundColor,
          }} onClick={()=>changeTheme()} >{darkTheme ? 'Light Theme' : 'Dark Theme' }</p> */}
    </div>
    </AppContext.Provider>
  );
}



const Layout = ({darkTheme}) =>{



  return(
    <div>


    <div style={{
      backgroundColor:Theme(darkTheme).backgroundColor,
      position:'fixed',
      top:0,
      left:0,
      right:0,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      height:'8vh',
      width:'100%',
      borderBottom:`1px solid ${Theme(darkTheme).textColor}`,
      zIndex:1000
      }}>

  
      {/* <NavBar /> */}
      <Container  style={{
        //  display:'flex',
         flexDirection:'row',
         justifyContent:'space-between',
         alignItems:'center',
         width:'100%',
         
        
      }}>

        <Row >
          {AllRoutes.map(route=>(
            <RoutesTemplate route={route.route} name={route.name} />
          ))}

        
                  
  
        </Row>
      </Container>
      </div>
      <Outlet />
    </div>
  )
}

export default App;
