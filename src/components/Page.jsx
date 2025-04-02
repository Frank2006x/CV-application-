import "bootstrap/dist/css/bootstrap.min.css";
import '../css/page.css'
import { useState } from "react";

function PageHeader({name, email, phoneNo}) {
    
    if (name.trim()!=""){
        localStorage.setItem("name",name.trim());
    }
    if (email.trim()!=""){
        localStorage.setItem("email",email.trim());
    }
    if (phoneNo.trim()!=""){
        localStorage.setItem("phoneNo",phoneNo.trim());
    }
    const storeName=localStorage.getItem("name");
    const storeEmail=localStorage.getItem("email");
    const storePhoneNo=localStorage.getItem("phoneNo");
    

    return(
        <div className="page-header">


            <h2 className="mb-5 mt-3 page-name">{storeName}</h2>
            <div className="d-flex flex-direction-column justify-content-between ">
                <p className="ms-4">Email : {storeEmail}</p>
                <p className="me-4">Phone no : {storePhoneNo}</p>
            </div>
            <hr/>
        </div>
        
    )

}
function Education({schoolName,titleStudy,year}){
    const [showEdit,setShowEdit]=useState(false);
    return (
        <div className="education" onMouseEnter={() => setShowEdit(true)} onMouseLeave={()=>setShowEdit(false)}>
            <p className="school-name">School Name : {schoolName}</p>
            <p className="title-study">Title of study : {titleStudy}</p>
            <p className="year-completion m-1">Year of completion : {year}</p>
            
            {showEdit && <button className="edit-btn">
                <img src="src/assets/edit.svg" width="20"></img>
            </button>
            }
            
        </div>
    )
}
function Experience(){
    const [showEdit,setShowEdit]=useState(false);
    return (
        <div className="experience" onMouseEnter={() => setShowEdit(true)} onMouseLeave={()=>setShowEdit(false)}>
            <p className="company-name">Company : vit chennai</p>
            <p className="position-title">Position title : Teacher</p>
            <p className="year-experience m-1">Year of experience : 4 </p>
            
            {showEdit && <button className="edit-btn">
                <img src="src/assets/edit.svg" width="20"></img>
            </button>
            }
            
        </div>
    )
}

function Page({name,email,phoneNo,eduList}) {
    
    
    return (
        <div className="page">
            <PageHeader 
                name={name}
                email={email}
                phoneNo={phoneNo}
            />    
            <div className="page-education">
                <h2>Education Qualification</h2>

                <div className="education-wrapper row g-5 mt-1 d-flex justify-content-evenly">
                { eduList.map(item=>(
                        <Education schoolName={item.schoolName} titleStudy={item.titleStudy} year={item.year}/>
                    ))}
                    
                </div>
                <hr/>
            </div>
            <div className="page-experience">
                <h2>Work Experience</h2>
                <div className="experience-wrapper row g-5 mt-1 d-flex justify-content-evenly">
                    
                    

                </div>
            </div>


        </div>
    );
}

export default Page;
