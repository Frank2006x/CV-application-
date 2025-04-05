import '../css/general.css';


function General({ isOpen, onToggle,name,email,phoneNo,setName,setEmail,setPhoneNo }) {
    
    return (
        <div className="general" >

            <div className='head-wrapper'>
                <h1>General</h1>
                <button className='drop-down' onClick={()=>{onToggle()}}>
                <img src="/icons/down-arrow.svg" alt="icon" width="40" height="40" />
                </button>
            </div>
            { isOpen  && <form onSubmit={(e)=>{
                e.preventDefault();
                setName("");
                setEmail("");
                setPhoneNo("");
            }}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" placeholder="name" className="name"  value={name}  onChange={(e)=>{setName(e.target.value)}} required />

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" placeholder="email" className="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />

                <label htmlFor="phone">Phone Number: </label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="phone"
                    className="phone"
                    pattern="[0-9]{10}"
                    value={phoneNo}
                    onChange={(e)=>{setPhoneNo(e.target.value)}}
                    required
                />

                <button type='submit' className='submit' >Save</button>
            </form>
            }
            
        </div>
    );
}

export default General;