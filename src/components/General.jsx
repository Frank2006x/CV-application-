import '../css/general.css';
import { useState } from 'react';

function General() {

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
        <div className="general" >

            <div className='head-wrapper'>
                <h1>General</h1>
                <button className='drop-down' onClick={handleClick}>
                    <img src="/src/assets/down-arrow.svg" alt="icon" width="40" height="40" />
                </button>
            </div>
            { vis && <form className={isFadeOut ? "fade-out" : "fade-in"}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" placeholder="name" className="name" required />

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" placeholder="email" className="email" required />

                <label htmlFor="phone">Phone Number: </label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="phone"
                    className="phone"
                    pattern="[0-9]{10}"
                    required
                />

                <button type='submit' className='submit'>Save</button>
            </form>
            }
            
        </div>
    );
}

export default General;