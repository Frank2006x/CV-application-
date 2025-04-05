import Experience from './components/Experience'
import General from './components/General'
import Education from './components/Education'
import Page from './components/page'
import Header from './components/Header'
import { useState } from 'react'
import './App.css'

function App() {
  //General
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phoneNo,setPhoneNo]=useState("");
  const [expId,setExpId]=useState(0);
  const [eduId,setEduId]=useState(0);

  const [eduList,setEduList]=useState([]);
  const [expList,setExpList]=useState([]);
  

  const[openSection,setOpenSection]=useState(null);
  const handleSectionToggle=(section)=>{
    console.log('Currently open section:', openSection);
    setOpenSection((prevSection)=>(prevSection===section)?null:section);
  }


  return (
    <div className='full'>
    <Header/>
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
          eduId={eduId}
          setEduId={setEduId}
          />
        <Experience
          isOpen={openSection === 'Experience'}
          onToggle={() => handleSectionToggle('Experience')}
          expList={expList}
          setExpList={setExpList}
          expId={expId}
          setExpId={setExpId}
          
          
          />
      </div>
      <Page 
        name={name}
        email={email}
        phoneNo={phoneNo}
        eduList={eduList}
        expList={expList}
        setEduList={setEduList}
        setExpList={setExpList}
        
        
        />
    </div>
    </div>
    



    
  )
}

export default App
