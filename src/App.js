import React from 'react';
import NavBar from './components/Navbar';
import ProfileScreen from './screens/ProfileScreen'
import AboutScreen from './screens/AboutScreen'
import ProjectScreen from './screens/ProjectScreen'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';



function App() {
  return (

    <div style={{ marginTop: 55, }}>
    <Container>

      <NavBar />
      <ProfileScreen />
      <AboutScreen />
      <ProjectScreen />
      <Footer />
    </Container>
     



    </div>
  );
}

export default App;
