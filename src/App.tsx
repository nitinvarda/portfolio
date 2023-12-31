import React from 'react';
import NavBar from './components/Navbar';
import ProfileScreen from './screens/ProfileScreen'
import AboutScreen from './screens/AboutScreen'
import ProjectScreen from './screens/ProjectScreen'
import Footer from './components/Footer'
import ParticleComponent from './components/Particle';



function App() {
  return (

    <div style={{ marginTop: 55, }}>
      {/* <ParticleComponent /> */}
      <NavBar />
      <ProfileScreen />
      <AboutScreen />
      <ProjectScreen />
      <Footer />
     



    </div>
  );
}

export default App;
