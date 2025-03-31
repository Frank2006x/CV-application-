import Experience from './components/Experience'
import General from './components/General'
import Education from './components/Education'
import Page from './components/page'
import { useState } from 'react'
import './App.css'

function App() {
  const[openSection,setOpenSection]=useState(null);
  const handleSectionToggle=(section)=>{
    console.log('Currently open section:', openSection);
    setOpenSection((prevSection)=>(prevSection===section)?null:section);
  }


  return (
    <div className='main'>
      <div className="sidebar">
        <General
          isOpen={openSection === 'General'}
          onToggle={() => handleSectionToggle('General')}
        />
        <Education
          isOpen={openSection === 'Education'}
          onToggle={() => handleSectionToggle('Education')}
        />
        <Experience
          isOpen={openSection === 'Experience'}
          onToggle={() => handleSectionToggle('Experience')}
        />
      </div>
      <Page/>
    </div>
    



    
  )
}

export default App
