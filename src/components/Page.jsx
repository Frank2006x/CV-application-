import "bootstrap/dist/css/bootstrap.min.css";
import '../css/page.css'
import { useState } from "react";
import { createPortal } from "react-dom";

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
function Education({ id, schoolName, titleStudy, year, eduList, setEduList }) {
    const [showEdit, setShowEdit] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [editedSchoolName, setEditedSchoolName] = useState(schoolName);
    const [editedTitleStudy, setEditedTitleStudy] = useState(titleStudy);
    const [editedYear, setEditedYear] = useState(year);
    function handleDelete(){
        
        const updatedList=eduList.filter((edu)=>edu.id !== id);
        console.log("updted list",updatedList)
        setEduList(updatedList);
        setShowPopUp(false);

    }
    function handleEdit() {
      setShowPopUp(true);
      console.log(eduList)
    }
  
    function handleSaveEdit() {
      const updatedList = eduList.map((edu) =>
        edu.id === id
          ? {
              ...edu,
              schoolName: editedSchoolName,
              titleStudy: editedTitleStudy,
              year: editedYear,
            }
          : edu
      );
      setEduList(updatedList);
      setShowPopUp(false);
    }
  
    return (
      <div
        className="education"
        onMouseEnter={() => setShowEdit(true)}
        onMouseLeave={() => setShowEdit(false)}
      >
        <p className="school-name">School Name : {schoolName}</p>
        <p className="title-study">Title of study : {titleStudy}</p>
        <p className="year-completion m-1">Year of completion : {year}</p>
  
        {showEdit && (
          <button className="edit-btn" onClick={handleEdit}>
            <img src="src/assets/edit.svg" width="20" />
          </button>
        )}
  
        {showPopUp &&
          createPortal(
            <div className="pop">
              <button className="close-btn" onClick={() => setShowPopUp(false)}>
                <img src="src/assets/close.svg" alt="close" />
              </button>
  
              <label>
                School Name:
                <input
                  type="text"
                  placeholder="School name"
                  value={editedSchoolName}
                  onChange={(e) => setEditedSchoolName(e.target.value)}
                />
              </label>
  
              <label>
                Title of Study:
                <input
                  type="text"
                  placeholder="Title of study"
                  value={editedTitleStudy}
                  onChange={(e) => setEditedTitleStudy(e.target.value)}
                />
              </label>
  
              <label>
                Year of Completion:
                <input
                  type="number"
                  placeholder="Year"
                  value={editedYear}
                  onChange={(e) => setEditedYear(e.target.value)}
                />
              </label>
  
              <button className="save-btn" onClick={()=>{handleSaveEdit()}}>
                Save
              </button>
              <button className="delete-btn" onClick={()=>{handleDelete()}}>
                Delete
              </button>
            </div>,
            document.querySelector("body")
          )}
      </div>
    );
  }

function Experience({id,companyName,positionTitle,year,expList,setExpList}){
    const [showEdit,setShowEdit]=useState(false);
    const [showPopUp,setShowPopUp]=useState(false)
    const [editedCompanyName,setEditedCompanyName]=useState(companyName)
    const [editedPositionTitle,setEditedPositionTitle]=useState(positionTitle)
    const [editedYear,setEditedYear]=useState(year)
    function handleDelete(){
        const updatedList=expList.filter((exp)=>exp.id!==id);
        setExpList(updatedList);
        setShowPopUp(false);

    }
    function handleEdit(){
        setShowPopUp(true)
        
    }
    function handleSaveEdit(){
        const updatedList = expList.map((exp) =>
            exp.id === id
              ? {
                  ...exp,
                  companyName: editedCompanyName,
                  positionTitle: editedPositionTitle,
                  year: editedYear,
                }
              : exp
          );
          setExpList(updatedList);
          setShowPopUp(false);

    }

    return (
        <div className="experience" onMouseEnter={() => setShowEdit(true)} onMouseLeave={()=>setShowEdit(false)}>
            <p className="company-name">Company : {companyName}</p>
            <p className="position-title">Position title : {positionTitle}</p>
            <p className="year-experience m-1">Year of experience : {year}</p>
            
            {showEdit && <button className="edit-btn" onClick={()=>handleEdit()}>
                <img src="src/assets/edit.svg" width="20"></img>
            </button>
            }
            {showPopUp && createPortal(
                <div className="pop">
                <button className="close-btn" onClick={() => setShowPopUp(false)}>
                  <img src="src/assets/close.svg" alt="close" />
                </button>
          
                <label>
                Company :
                  <input type="text" placeholder="Company-name" value={editedCompanyName}  
                  onChange={(e)=>{setEditedCompanyName(e.target.value)}}/>
                </label>
          
                <label>
                Position title :
                  <input type="text" placeholder="Position-title" value={editedPositionTitle} 
                  onChange={(e)=>{setEditedPositionTitle(e.target.value)}}/>
                </label>
          
                <label>
                Year of experience :
                  <input type="number" placeholder="Year-of-experience" value={editedYear} 
                  onChange={(e)=>{setEditedYear(e.target.value)}}/>
                </label>
          
                <button className="save-btn" onClick={()=>{handleSaveEdit()}}>Save</button>
                <button className="delete-btn" onClick={handleDelete}>Delete</button>
              </div>,
              document.querySelector("body")
            )}
            
        </div>
    )
}

function Page({name,email,phoneNo,eduList,expList,setEduList,setExpList}) {
    
    
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
                { eduList.map((item,index)=>(
                        <Education key={index} id={item.id} schoolName={item.schoolName} titleStudy={item.titleStudy}
                         year={item.year} eduList={eduList} setEduList={setEduList}/>
                    ))}
                    
                </div>
                <hr/>
            </div>
            <div className="page-experience">
                <h2>Work Experience</h2>
                <div className="experience-wrapper row g-5 mt-1 d-flex justify-content-evenly">
                    {expList.map((item,index)=>(
                        <Experience key={index} id={item.id} companyName={item.companyName} positionTitle={item.positionTitle}
                         year={item.year} expList={expList} setExpList={setExpList}/>
                    ))}
                    

                </div>
            </div>


        </div>
    );
}

export default Page;
