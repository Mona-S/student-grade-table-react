import React from 'react';
import Header from './header';
import GradeTable from './gradetable';
import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.addGrade = this.addGrade.bind(this);
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
    let average = 0;
    let allGrades = this.state.grades;

    for (let i = 0; i < allGrades.length; i++) {
      gradeSum += parseInt(allGrades[i].grade);
    }
    average = (gradeSum / allGrades.length).toFixed(2);
    return average;
  }

  addGrade(newGrade) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGrade)
    };

    fetch('/api/grades', req)
      .then(response => response.json())
      .then(data => {
        const allData = this.state.grades.concat(data);
        this.setState({ grades: allData });
      });
  }

  render() {
    return (
      <React.Fragment>
        <Header calculatedAverage={this.getAverageGrade()}></Header>
        <GradeTable grades={this.state.grades}></GradeTable>
        <GradeForm onClick={this.addGrade}></GradeForm>
      </React.Fragment>
    );
  }
}

export default App;
