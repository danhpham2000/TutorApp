import React from 'react'
import Button from 'react-bootstrap/Button';

function SignUpButton() {
  return (
    <div>
        <br/>
        <Button href="/SignUp" variant="warning" style={{ borderRadius: "100px" }}>
        Sign up to message tutors
      </Button>
      <br/>
    </div>
  )
}

//why do i not have to export this below
export default SignUpButton;