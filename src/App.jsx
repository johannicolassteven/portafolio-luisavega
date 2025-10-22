import './App.css'
import Navbar from './assets/Navbar'
import Footer from './assets/Footer'
import ProjectsSection from './components/ProjectsSection'

function App() {

  return (
    <>
      <Navbar/>
      <h1>Vite + React</h1>
     <ProjectsSection/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer/>
    </>
  )
}

export default App
