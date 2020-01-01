import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  if (props.grades.length === 0) {
    return ('No Grades Recorded');
  } else {
    return (
      <table className="table">
        <thead className='thead-dark'>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        {props.grades.map(data => {
          return <Grade key={data.id} grade={data} deleteGrade={props.deleteFunc}/>;
        }
        )
        }
      </table>
    );
  }
}

export default GradeTable;
