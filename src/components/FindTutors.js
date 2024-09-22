import React from 'react'
import SignUpButton from './SignUpButton'
import FilterBar from './FilterBar'

export default function FindTutors() {
  return (
    <div>
        <h1>FindTutors</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <p style={{width: "700px", height: "50px", textAlign: "center", display: "flex", }}>
                    100% of tutors on our platform degrees from top universities in the US, Canada, and the UK. 
                    We are continually impressed by these tutors, and we think you will be too!
                </p>
            </div>
        <SignUpButton/>
        <br/>
        <h4>Filter by Major:</h4>
        <FilterBar/>
    </div>
  )
}
