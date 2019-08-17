import React from 'react';

function Grade(props) {
  return (
    <tbody>
      <tr>
        <td>{props.grade.name}</td>
        <td>{props.grade.course}</td>
        <td>{props.grade.grade}</td>
      </tr>
    </tbody>
  );
}

export default Grade;
