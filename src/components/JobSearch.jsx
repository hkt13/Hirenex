import "../style/JobSearch.css";
import { useState, useEffect, useRef } from "react";
import data from  "../data/jobprofile.json"
import Profile from "./CandidateProfile";
const JobSearch = () => {
const [newprofiles, setnewprofiles] = useState([])
const [expprofile, setexpprofile] = useState([])
const [featuredProfile, setfeaturedProfile] = useState(data)
const [age, setage] = useState(0)
const [flag, setflag] = useState(false)
const [exp, setexp] = useState(15)
const [mode, setmode] = useState([])
// const [isChecked, setisChecked] = useState(false);
const workRef = useRef(null);
const hybridRef = useRef(null);
const remoteRef = useRef(null);

function getRandomElementsFromArray(arr, numElements) {
  if (numElements >= arr.length) {
    // Return a copy of the original array if numElements is greater than or equal to the array length
    return arr.slice();
  }

  const shuffledArray = arr.slice(); // Create a copy of the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Shuffle the array using Fisher-Yates algorithm
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray.slice(0, numElements); // Return the first numElements from the shuffled array
}


function newProfiles(val, modifiedArray) {
    console.log(modifiedArray)
    console.log(mode)
    setexp(val)
    let newdata = data.filter(profile=>{
        return profile.experience===`${val} years`;
    })
    console.log(newdata, mode)
    if(mode.length!==0 && modifiedArray.length!==0){
      console.log('entered')
      newdata = newdata.filter(profile=>{
        return mode.some((m) => profile.work_mode === m.toLowerCase());
    })
    setnewprofiles(newdata)
    }
    console.log(newdata)
    setage(val)
    // setnewprofiles([...newprofiles,...newdata])
    setfeaturedProfile(newdata)
}

function HandleChange(e) {
    console.log(e.target.value)
    newProfiles(e.target.value, ["testing"])

}

const handleCheckChange = (e) => {
   if(e.target.checked){
    if(workRef.current.checked||hybridRef.current.checked||remoteRef.current.checked){
      const target = e.target.nextElementSibling.innerText;
      setmode([...mode, target])
        let newdata= data.filter(profile=>{
            return profile.work_mode===target.toLowerCase();
        })
        console.log(newdata)
        if(exp!=15){
          newdata = newdata.filter(profile=>{
            return profile.experience===`${exp} years`;
          })
        }
        console.log(newdata)
        console.log([...newprofiles,...newdata])
        setnewprofiles([...newprofiles,...newdata])
        setfeaturedProfile([...newprofiles,...newdata])
    }
}
    else{
      console.log(mode)
        let target = e.target.nextElementSibling.innerText;
        const modifiedArray = mode.filter((element) => element !== target);
        console.log(modifiedArray,mode)
        setmode(modifiedArray);
        let newdata = featuredProfile.filter(profile=>{
            return profile.work_mode!==target.toLowerCase();
        })
        console.log(newdata)
        if(newdata.length===0){
          if(exp!==15){
          newProfiles(exp,modifiedArray)
        }
        else{
          const randomArray = getRandomElementsFromArray(data, 5);
      setfeaturedProfile(randomArray)
        }
      }
        else{
        setnewprofiles(newdata)
        setfeaturedProfile(newdata)
    }
}
  };

useEffect(()=>{
      const originalArray = data;
      const randomArray = getRandomElementsFromArray(originalArray, 5);
      setfeaturedProfile(randomArray)
      

},[])

  
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
              <input type="range" className="price-range" min="0" max="10" onChange={HandleChange}/>
              <div className="exp-years">
                <span className="min">{`${age} Yrs`}</span>
                <span className="max">Any</span>
              </div>
            </div>
          </div>

          <div className="work-mode filter-common">
            <span className="filter-title">Work Mode</span>
            <div className="work-mode-list">
              <div className="checkcon">
                <input type="checkbox" name="" id="from-home"  ref={workRef}  onChange={handleCheckChange}/>
                <label htmlFor="from-home">Work from Home</label>
              </div>
              <div className="checkcon">
                
                <input type="checkbox" name="" id="hybrid" ref={remoteRef}  onChange={handleCheckChange} />
                <label htmlFor="hybrid">Hybrid</label>
              </div>
              <div className="checkcon">
                
                <input type="checkbox" name="" id="remote" ref={hybridRef}  onChange={handleCheckChange}/>
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
