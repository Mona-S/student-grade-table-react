import React from 'react';

function Header(props) {
  return (
    <React.Fragment>
      <h1 className='mb-4'>Student Grade Table</h1>
      <h4>Average Grade<span className="badge badge-secondary">{props.calculatedAverage}%</span></h4>
    </React.Fragment>
  );
}

export default Header;
