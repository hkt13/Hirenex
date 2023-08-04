import '../style/CandidateProfile.css'
const Profile=({ profile })=>{
    const {name, job_description, added, skills, job_specific, salary, experience, work_mode, education, location} = profile;
return(
    <article className="profile-container">
        <div className="candidate-profile">
            <div className="candidate-info">
                <span>
                    {name}
                </span>
                <p>{job_description}</p>
            </div>
            <button className="open-btn">
            <i className="fa-regular fa-eye"></i>
               <span> Open</span></button>
        </div>
        <div className="candidate-otherinfo">
      <div className="box">
        <div className="box-title">
        <i className="fa-regular fa-calendar"></i>
        <span>Added</span>
        </div>
        <span>{added}</span>
      </div>
      <div className="box">
        <div className="box-title">
        <i className="fa-solid fa-briefcase"></i>
        <span>Work Experience</span>
        </div>
        <span>{experience}</span>
      </div>
      <div className="box">
        <div className="box-title">
        <i className="fa-solid fa-indian-rupee-sign"></i>
        <span>Salary</span>
        </div>
        <span>
           {salary} </span>
      </div>
        </div>
        <div className="candidate-skills">
            <span>Skills</span>
            <div className="skill-box">    
            {skills.map((skill, index)=>{
                return(
                    <div className="skill-name" key={index}>
                        {skill}
                    </div>
                )
            })}
            </div>
        
        </div>
        <div className="footer-info">
            <div className="location-info">
                <span>Location</span>
                <div className="skill-name">
                    <div className="skill-name-icon"> <i className="fa-solid fa-location-dot"></i></div>
               
                <span>{location}</span>
                </div>
            </div>
            <div className="workstatus"> 
            <div className="status-icon">
                <i className="fa-solid fa-pager"></i>
                </div>
             <div className="workstatus-info">{work_mode}</div>
             </div>

<div className="education-info">
<div className="status-icon education-title"><i className="fa-solid fa-user-graduate"></i> <span>Education</span></div>
<div className="skill-name">
                {education}
                </div>
</div>

        </div>
    </article>
    
)
}

export default Profile;