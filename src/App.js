import React, { useState } from 'react';
import NavBar from './components/Navbar';
import ProfileScreen from './screens/ProfileScreen'
import AboutScreen from './screens/AboutScreen'
import ProjectScreen from './screens/ProjectScreen'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';
import Experience from './screens/Experience';
import AppContext from './utils/AppContext';
import Skills from './screens/Skills';
import OpenSource from './screens/OpenSource';
import Projects from './screens/Projects';



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
    <div style={{ marginTop: 55, }}>
      <NavBar />

      
      <ProfileScreen />
      <Experience sticky={onWorkExperience} />
      <OpenSource />
      <Projects />
      {/* <Skills /> */}
      <ProjectScreen />

      <Footer />
     



    </div>
    </AppContext.Provider>
  );
}

export default App;
