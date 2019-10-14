import React, {Component} from 'react';
import './form.scss'

class Form extends Component {
  state = {
    name:'',
    email:'',
    message:''
  };

  onChange = (event) => {
    const {target: {name, value}} = event
    this.setState({[name]: value})
  }
  render() {
    return (
      <div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            name="name"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label>email</label>
          <input
            type="email"
            className="form-control"
            placeholder="email"
            name="email"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label>message</label>
          <textarea
            className="form-control"
            placeholder="message"
            name="message"
            onChange={this.onChange}
          />
        </div>
        <button type="button" className="btn btn-primary">Message me</button>
      </div>
    );
  }
}

export default Form;
