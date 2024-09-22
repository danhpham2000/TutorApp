import React from 'react'
import Form from 'react-bootstrap/Form';

function FilterBar() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="Math">Math</option>
      <option value="CompSci">CompSci</option>
      <option value="Physics">Physics</option>
      <option value="Chemistry">Chemistry</option>
      <option value="English">English</option>
      <option value="History">History</option>
      <option value="Accounting">Accounting</option>
      <option value="Engineering">Engineering</option>
      <option value="Biology">Biology</option>
    </Form.Select>
  );
}

export default FilterBar;