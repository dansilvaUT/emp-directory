import React from 'react';
import EmployeeList from '../data/employees';

const Employees = (props) => {
    console.log(props.title);
  let employees = EmployeeList.map((employee) => {
    return (
      <li className="teacher" key={employee.id} >
        <img className="teacher-img" src={employee.img_src} alt="teacher" />
        <h3>{employee.name}</h3>
        <p>{employee.bio}</p>
      </li>
    );
  }); 
  
  return (

    <div className="main-content">
      <h2>Employees</h2>
      <ul className="group">
        {employees}
      </ul>
    </div>
  );
}

export default Employees;