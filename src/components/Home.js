import React from 'react'
import LandingPageSection from "./LandingPageSection"
import TutorCard from './TutorCard'

export default function Home() {
  const cardTitles1 = ["Math Tutor", "Computer Science Tutor", "Physics Tutor"];
  const cardTitles2 = ["Chemistry Tutor", "English Tutor", "History Tutor"];
  const cardTitles3 = ["Accounting Tutor", "Engineering Tutor", "Biology Tutor"];
  return (
    <div>
        <LandingPageSection/>
        <TutorCard titles={cardTitles1}/>
        <TutorCard titles={cardTitles2}/>
        <TutorCard titles={cardTitles3}/>
        <br/>
        
    </div>
  )
}
