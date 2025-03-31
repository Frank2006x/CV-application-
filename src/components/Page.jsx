import "bootstrap/dist/css/bootstrap.min.css";
import '../css/page.css'
import { useState } from "react";

function PageHeader(){
    return(
        <div className="page-header">


            <h2 className="mb-5 mt-3 page-name">Frank Xavio</h2>
            <div className="d-flex flex-direction-column justify-content-between ">
                <p className="ms-4">Email: frank2006@gmail.com</p>
                <p className="me-4">Phone no: 3205932590</p>
            </div>
            <hr/>
        </div>
        
    )

}
function Education(){
    const [showEdit,setShowEdit]=useState(false);
    return (
        <div className="education" onMouseEnter={() => setShowEdit(true)} onMouseLeave={()=>setShowEdit(false)}>
            <p className="school-name">School Name : vit chennai</p>
            <p className="title-study">Title of study : B.Tech</p>
            <p className="year-completion m-1">Year of completion : 2024 </p>
            
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

function Page() {
    
    return (
        <div className="page">
            <PageHeader/>    
            <div className="page-education">
                <h2>Education Qualification</h2>

                <div className="education-wrapper row g-5 mt-1 d-flex justify-content-evenly">
                    <Education />
                    
                </div>
                <hr/>
            </div>
            <div className="page-experience">
                <h2>Work Experience</h2>
                <div className="experience-wrapper row g-5 mt-1 d-flex justify-content-evenly">
                    <Experience/>
                    <Experience/>
                    <Experience/>

                </div>
            </div>


        </div>
    );
}

export default Page;
