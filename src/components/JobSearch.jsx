import "../style/JobSearch.css";
import { useState, useEffect, useRef } from "react";
import data from  "../data/jobprofile.json"
import Profile from "./CandidateProfile";
const JobSearch = () => {
  const inputRef = useRef(null);
const [featuredProfile, setfeaturedProfile] = useState(data)
const [checkedText, setcheckedText] = useState([])
const [ExYears, setExYears] = useState(null)

function HandleChange(e) {
  setExYears(inputRef.current.value);
}

function HandleCheckChange(e) {
  let target = e.target.nextElementSibling.innerText.toLowerCase();
  if(e.target.checked){
       setcheckedText([...checkedText, target])
  }
  else{
    setcheckedText(checkedText.filter(text=>{
      return text!==target
    }))
  }
}

const applyFilters=()=>{
  let updatedList = data;

  //experience filter
  if(ExYears){
   updatedList = updatedList.filter(profile=>{
    return profile.experience=== `${ExYears} years`
   })
  }

  //workprofile filter
if(checkedText.length!==0){
  updatedList = updatedList.filter(profile=>{
    return checkedText.includes(profile.work_mode)
  })
}

console.log(updatedList)

setfeaturedProfile(updatedList)

}

useEffect(()=>{
    
     applyFilters(); 

},[ExYears, checkedText])

  
  return (
    <div className="job-search" id="job-search">
      <div className="filter-container">
        <div className="all-filters">
          <span className="filter-title">All Filters</span>
        </div>
        <div className="filter">
          <div className="experience filter-common">
            <span className="filter-title">Experience</span>
            <div className="experience-list">
              <input type="range" className="price-range" min="0" max="10" ref={inputRef}
 onChange={HandleChange}/>
              <div className="exp-years">
                <span className="min">{ExYears===null? 0: ExYears} years</span>
                <span className="max">Any</span>
              </div>
            </div>
          </div>

          <div className="work-mode filter-common">
            <span className="filter-title">Work Mode</span>
            <div className="work-mode-list">
              <div className="checkcon">
                <input type="checkbox" name="" id="work-from-home"  onChange={HandleCheckChange}/>
                <label htmlFor="work-from-home">Work from Home</label>
              </div>
              <div className="checkcon">
                
                <input type="checkbox" name="" id="hybrid"  onChange={HandleCheckChange} />
                <label htmlFor="hybrid">Hybrid</label>
              </div>
              <div className="checkcon">
                
                <input type="checkbox" name="" id="remote" onChange={HandleCheckChange}/>
                <label htmlFor="remote">Remote</label>
              </div>
            </div>
          </div>

          {/* <div className="salary filter-common">
            <span className="filter-title">Salary</span>
            <div className="salary-list">
                <div className="checkcon">      <input type="checkbox" name="" id="0-3" />
              <label htmlFor="0-3">0-3 Lakhs</label></div>
                <div className="checkcon">  <input type="checkbox" name="" id="3-6" />
              <label htmlFor="3-6">3-6 Lakhs</label></div>
                <div className="checkcon">    <input type="checkbox" name="" id="6-10" />
              <label htmlFor="6-10">6-10 Lakhs</label></div>
                <div className="checkcon">  <input type="checkbox" name="" id="10-15" />
              <label htmlFor="10-15">10-15 Lakhs</label></div>
            </div>
          </div>
          <div className="role-category filter-common">
            <span className="filter-title">Role category</span>
            <div className="role-category-list">
                <div className="checkcon">    <input type="checkbox" name="" id="Software-Engineer" />
              <label htmlFor="Software Engineer">Software Engineer</label></div>
                <div className="checkcon">   <input type="checkbox" name="" id="Data-Scientist" />
              <label htmlFor="Data-Scientist">Data Scientist</label></div>
                <div className="checkcon">       <input type="checkbox" name="" id="Product-Manager" />
              <label htmlFor="Product-Manager">Product Manager</label></div>
                <div className="checkcon">   <input type="checkbox" name="" id="Graphic-Designer" />
              <label htmlFor="Graphic-Designer">Graphic Designer</label></div>
            </div>
          </div>
          <div className="education filter-common">
            <span className="filter-title">Education</span>
            <div className="education-list">
                <div className="checkcon">      <input type="checkbox" name="" id="pg" />
              <label htmlFor="pg">Post Graduate</label></div>
                <div className="checkcon">   <input type="checkbox" name="" id="graduate" />
              <label htmlFor="graduate">B.Tech/B.E</label></div>
           
            </div>
          </div> */}
        </div>
      </div>
      <div className="job-container">
       {featuredProfile.map((profile,index)=>{
        return(
            <div key={index}>
                 <Profile profile={profile}/>
            </div>
       
        )
       })}

      </div>
    </div>
  );
};

export default JobSearch;
