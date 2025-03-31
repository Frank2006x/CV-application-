import '../css/education.css';


function Education({ isOpen, onToggle }) {

    

    return (
        <div className="edu" >

            <div className='head-wrapper'>
                <h1>Education</h1>
                <button className='drop-down' onClick={()=>{onToggle()}}>
                    <img src="/src/assets/down-arrow.svg" alt="icon" width="40" height="40" />
                </button>
            </div>
            { isOpen && <form >
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