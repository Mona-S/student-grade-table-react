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
      .then(data => this.setState({ grades: data }));
  }

  render() {
    return (
      <div>
        <Header></Header>
        <GradeTable grades={this.state.grades}></GradeTable>
      </div>
    );
  }
}

export default App;
