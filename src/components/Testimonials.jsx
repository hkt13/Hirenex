import '../style/Testimonials.css'
import data from '../data/reviews.json'
import { useState, useEffect } from 'react'
const Testimonials=()=>{

    const [people, setpeople] = useState(data)
    const [index, setindex] = useState(0)
    const { name, company, image, description, url } = people[index];
  
    useEffect(()=>{
        const timeout = setInterval(() => {
          if(index===data.length-1){
            setindex(0)
            return;
          }
          setindex(index+1)
        }, 3000);
        return ()=> clearInterval(timeout)
      },[index])
return (
<div className="hero-testimonials">
<section className="testimonials">
    <h1>
    Our users love Hirenex!
    </h1>
    <div className="testimonials-container">
        <button className="arrow-left"  onClick={()=>{
          if(index===0){
            setindex(data.length-1)
            return;
          }
          setindex(index-1)
      }}>
            <img src="/images/left-arrow.svg" alt="" />
        </button>
        <div className="testimonials-info">
            <div className="testi-img">
                <img src={image} alt="" />
            </div>
            <div className="testi-des">
                <div className="testi-header">
                    <h3>{name}</h3>
                    <p>Hiring at {`${company}`}</p>
                    <div className="testi-linkedin">
                       <a href={url}> <img src="/images/linkedin_tes.svg" alt="" /></a>
                    </div>
                </div>
                <div className="testi-desc-info">
                    <p>{description}</p>
                </div>
            </div>
        </div>
        <button className="arrow-right" onClick={()=>{
           if(index===data.length-1){
            setindex(0)
            return;
          }
          setindex(index+1)
      }}>
           <img src="/images/right-arrow.svg" alt="" />
        </button>
    </div>
</section>
</div>

    )
}

export default Testimonials;