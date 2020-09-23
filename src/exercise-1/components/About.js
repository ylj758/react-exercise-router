import React, {Component} from 'react';
import {Link} from "react-router-dom";


class About extends Component {
  render() {
    return (
      <div>
        <p>Company: ThoughtWorks Local</p>
        <p>Location: Wuhan</p>
        <p>For more information</p>
        <p>View our<Link to="/" className="link">websit</Link></p>
      </div>
    );
  }
}

export default About;