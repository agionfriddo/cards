import React from 'react';
import { Link } from 'react-router';

import QuestionForm from './QuestionForm';
import GroupForm from './GroupForm';

const Form = () => (
  <div className="container">
    <Link to="/home"><h4>Return To Topics</h4></Link>
    <div className="row">
      <GroupForm />
      <QuestionForm />
    </div>
  </div>
);

export default Form;
