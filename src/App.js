import React from 'react';
import NavBar from './components/Navbar';
import ProfileScreen from './screens/ProfileScreen'
import AboutScreen from './screens/AboutScreen'
import ProjectScreen from './screens/ProjectScreen'
import Footer from './components/Footer'
import Particle from './screens/Particle'


function App() {
  return (

    <div style={{ marginTop: 55, }}>
      <NavBar />
      <ProfileScreen />
      <AboutScreen />
      <ProjectScreen />
      <Footer />
      {/* <Particle /> */}



    </div>
  );
}

export default App;
