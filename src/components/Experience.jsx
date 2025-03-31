import '../css/experience.css';


function Experience({ isOpen, onToggle }) {

    
    return (
        <div className="exp" >

            <div className='head-wrapper'>
                <h1>Experience</h1>
                <button className='drop-down' onClick={()=>{onToggle()}}>
                    <img src="/src/assets/down-arrow.svg" alt="icon" width="40" height="40" />
                </button>
            </div>
            { isOpen && <form>
                <label htmlFor="company-name">Company name: </label>
                <input type="text" id="company-name" placeholder="Company name" className="company-name" required />

                <label htmlFor="position-title">Position title: </label>
                <input type="text" id="position-title" placeholder="Position title" className="position-title" required />

                <label htmlFor="year">Year of experience: </label>
                <input
                    type="number"
                    id="year"
                    placeholder="year of experience"
                    className="year"
                    pattern="[0-9]{2}"
                    required
                />

                <button type='submit' className='submit'>Save</button>
            </form>
            }
            
        </div>
    );
}

export default Experience;