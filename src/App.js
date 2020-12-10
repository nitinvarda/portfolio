import React from 'react';
import NavBar from './components/Navbar';
import ProfileScreen from './screens/ProfileScreen'
import AboutScreen from './screens/AboutScreen'
import ProjectScreen from './screens/ProjectScreen'
import Footer from './components/Footer'


function App() {
  return (

    <div style={{ marginTop: 55 }}>
      <NavBar />
      <ProfileScreen />
      <AboutScreen />
      <ProjectScreen />
      <Footer />



    </div>
  );
}

export default App;
