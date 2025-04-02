import Experience from './components/Experience'
import General from './components/General'
import Education from './components/Education'
import Page from './components/page'
import { useState } from 'react'
import './App.css'

function App() {
  //General
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phoneNo,setPhoneNo]=useState("");
  const [eduList,setEduList]=useState([]);

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
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phoneNo={phoneNo}
          setPhoneNo={setPhoneNo}
        />
        <Education
          isOpen={openSection === 'Education'}
          onToggle={() => handleSectionToggle('Education')}
          eduList={eduList}
          setEduList={setEduList}
        />
        <Experience
          isOpen={openSection === 'Experience'}
          onToggle={() => handleSectionToggle('Experience')}
        />
      </div>
      <Page 
        name={name}
        email={email}
        phoneNo={phoneNo}
        eduList={eduList}

      />
    </div>
    



    
  )
}

export default App
