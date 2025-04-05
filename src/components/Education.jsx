import { useState } from 'react';
import '../css/education.css';


function Education({ isOpen, onToggle ,eduList,setEduList,eduId,setEduId}) {
    // let schoolName,titleStudy,year;
    const [schoolName,setSchoolName]=useState("");
    const [titleStudy,setTitleStudy]=useState("");
    const [year,setYear]=useState("");
    
    function handleSave(){
        const eduItem={"id":eduId,"schoolName":schoolName,"titleStudy":titleStudy,"year":year};
        setEduList([...eduList,eduItem])
        
        setSchoolName("");
        setTitleStudy("");
        setYear("");
        setEduId(eduId+1);
        
    
    }
    return (
        <div className="edu" >

            <div className='head-wrapper'>
                <h1>Education</h1>
                <button className='drop-down' onClick={()=>{onToggle()}}>
                    <img src="/icons/down-arrow.svg" alt="icon" width="40" height="40" />
                </button>
            </div>
            { isOpen && <form onSubmit={(e)=>{
                e.preventDefault();
                handleSave()
                }} >
                <label htmlFor="school-name">School name : </label>
                <input type="text" id="school-name" placeholder="school name" value={schoolName} className="school-name" required onChange={(e)=>{setSchoolName(e.target.value)}} />

                <label htmlFor="title-study">Title of study : </label>
                <input type="text" id="title-study" placeholder="Title of study" className="email" value={titleStudy}  onChange={(e)=>{setTitleStudy(e.target.value)}} required />

                <label htmlFor="year">Year of completion : </label>
                <input
                    type="number"
                    id="year"
                    placeholder="year of completion"
                    className="year"
                    pattern="[0-9]{4}"
                    onChange={(e)=>{setYear(e.target.value)}}
                    value={year}
                    required
                />

                <button type='submit' className='submit'>Save</button>
            </form>
            }
            
        </div>
    );
}

export default Education;