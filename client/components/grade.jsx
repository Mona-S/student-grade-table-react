import React from 'react';

function Grade(props) {
  return (
    <tbody>
      <tr >
        <td>{props.grade.name}</td>
        <td>{props.grade.course}</td>
        <td>{props.grade.grade}</td>
        <td><button type="button" className="btn btn-danger" value={props.grade.id}
          onClick={() => props.deleteGrade(props.grade.id)}>Delete</button></td>
      </tr>
    </tbody>
  );
}

export default Grade;
