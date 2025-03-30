import Experience from './components/Experience'
import General from './components/General'
import Education from './components/Education'
import Page from './components/page'
import './App.css'

function App() {
  

  return (
    <div className='main'>
      <div className='sidebar'>
        <General/>
        <Education/>
        <Experience/>
      </div>
      <Page/>
    </div>




    
  )
}

export default App
