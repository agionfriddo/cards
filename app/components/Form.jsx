import React from 'react';

import QuestionForm from './QuestionForm';
import GroupForm from './GroupForm';

const Form = () => (
  <div className="container">
    <div className="row">
      <GroupForm />
      <QuestionForm />
    </div>
  </div>
);

export default Form;
