import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {

    this.setState({ [event.target.name]: event.target.value });
    this.setState({ [event.target.course]: event.target.value });
    this.setState({ [event.target.grade]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onClick(newGrade);
    this.handleReset();
  }

  handleReset() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <React.Fragment>
        <form className="form" >
          <div className="form-group">
            <i className="fas fa-user"></i>
            <input type="text" className="form-control" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <i className="far fa-list-alt"></i>
            <input type="text" className="form-control" name="course" value={this.state.course} placeholder="Course" onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <i className="fas fa-graduation-cap"></i>
            <input type="text" className="form-control" name="grade" value={this.state.grade} placeholder="Grade" onChange={this.handleChange}/>
          </div>

          <div>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add</button>
            <button type="cancel" className="btn btn-primary" onClick={this.handleReset}>Cancel</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default GradeForm;
