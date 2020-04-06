import React from 'react';

const Featured = ({match}) => {
    let name = match.params.name;
    let department = match.params.department;
  return (
    <div className="main-content">
      <h2>{name}: </h2>
      <p>Introducing <strong>{name}</strong>, an employee who loves <strong>{department}</strong>!</p>
    </div>
  );
}

export default Featured;