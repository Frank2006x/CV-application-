import '../css/general.css';


function General({ isOpen, onToggle }) {

    

    return (
        <div className="general" >

            <div className='head-wrapper'>
                <h1>General</h1>
                <button className='drop-down' onClick={()=>{onToggle()}}>
                    <img src="/src/assets/down-arrow.svg" alt="icon" width="40" height="40"  />
                </button>
            </div>
            { isOpen  && <form >
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