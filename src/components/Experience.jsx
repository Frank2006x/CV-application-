import '../css/experience.css';
import { useState } from 'react';


function Experience({ isOpen, onToggle ,expList,setExpList}) {
    const [companyName,setCompanyName]=useState("");
    const [positionTitle,setPositionTitle]=useState("");
    const [year,setYear]=useState("");
    function handleSave(){
        const expItem={"companyName":companyName,"positionTitle":positionTitle,"year":year};
        setExpList([...expList,expItem]);
        setCompanyName("");
        setPositionTitle("")
        setYear("");
    }

    return (
        <div className="exp" >

            <div className='head-wrapper'>
                <h1>Experience</h1>
                <button className='drop-down' onClick={()=>{onToggle()}}>
                    <img src="/src/assets/down-arrow.svg" alt="icon" width="40" height="40" />
                </button>
            </div>
            { isOpen && <form onSubmit={
                (e)=>{
                    
                    e.preventDefault()
                    handleSave()
                }
                
            }>
                <label htmlFor="company-name">Company name:</label>
                <input type="text" id="company-name" placeholder="Company name" className="company-name" 
                value={companyName} onChange={(e)=>setCompanyName(e.target.value)} required />

                <label htmlFor="position-title">Position title: </label>
                <input type="text" id="position-title" placeholder="Position title" className="position-title"
                value={positionTitle} onChange={(e)=>{setPositionTitle(e.target.value)}} required />

                <label htmlFor="year">Year of experience: </label>
                <input
                    type="number"
                    id="year"
                    placeholder="year of experience"
                    className="year"
                    pattern="[0-9]{2}"
                    value={year}
                    onChange={(e)=>{setYear(e.target.value)}}
                    required
                />

                <button type='submit' className='submit'>Save</button>
            </form>
            }
            
        </div>
    );
}

export default Experience;