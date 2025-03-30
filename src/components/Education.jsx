import '../css/education.css';
import { useState } from 'react';

function Education() {

    const [vis,setVis]=useState(false);
    const [isFadeOut,setIsFadeOut]=useState(false);
    const handleClick=()=>{
        if (vis){
            setIsFadeOut(true);
            setTimeout(()=>{
                setVis(false)
            },500)
        }else{
            setVis(true);
            setIsFadeOut(false);

        }
    }

    return (
        <div className="edu" >

            <div className='head-wrapper'>
                <h1>Education</h1>
                <button className='drop-down' onClick={handleClick}>
                    <img src="/src/assets/down-arrow.svg" alt="icon" width="40" height="40" />
                </button>
            </div>
            { vis && <form className={isFadeOut ? "fade-out" : "fade-in"}>
                <label htmlFor="school-name">School name : </label>
                <input type="text" id="school-name" placeholder="school name" className="school-name" required />

                <label htmlFor="title-study">Title of study : </label>
                <input type="text" id="title-study" placeholder="Title of study" className="email" required />

                <label htmlFor="year">Year of completion : </label>
                <input
                    type="number"
                    id="year"
                    placeholder="year of completion"
                    className="year"
                    pattern="[0-9]{4}"
                    required
                />

                <button type='submit' className='submit'>Save</button>
            </form>
            }
            
        </div>
    );
}

export default Education;