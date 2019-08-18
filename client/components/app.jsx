import React from 'react';
import Header from './header';
import GradeTable from './gradetable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => {
        this.setState({ grades: data });
      });
  }

  getAverageGrade() {
    let gradeSum = 0;
    let allGrades = this.state.grades;

    for (let i = 0; i < allGrades.length; i++) {
      gradeSum += allGrades[i].grade;
    }
    let average = (gradeSum / allGrades.length).toFixed(2);
    return average;
  }

  render() {
    return (
      <React.Fragment>
        <Header calculatedAverage={this.getAverageGrade()}></Header>
        <GradeTable grades={this.state.grades}></GradeTable>
      </React.Fragment>
    );
  }
}

export default App;
