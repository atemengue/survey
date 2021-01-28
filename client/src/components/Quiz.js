/** @format */

import React from 'react';

function Quiz({ section, number, title, questions, degres, onChangeValue }) {
  const onHandlerValue = (target, parent) => {
    onChangeValue(target, parent);
  };

  return (
    <div class='form-group'>
      <label htmlFor='' className='col-form-label'>
        <span>
          S{section}Q0{number} :
        </span>
        {title}
      </label>
      {questions.map((question, index) => {
        return (
          <div key={index} className='square'>
            <div className='row'>
              <div className='col-sm-4 d-flex align-items-center '>
                <label>
                  {++index}. {question.title}
                </label>
                {/* {question.title === 'Autres dimension' ? (
                  <textarea className='form-control'></textarea>
                ) : null} */}
              </div>
              <div className='col-sm-8'>
                {degres.map((degre, index) => {
                  return (
                    <div key={index} className='form-check'>
                      <input
                        required
                        value={degre.value}
                        className='form-check-input'
                        type='radio'
                        name={question.name}
                        id={question.name + question.parent}
                        onChange={(value) =>
                          onHandlerValue(value.target, question.parent)
                        }
                      />
                      <label
                        className='form-check-label'
                        htmlFor={question.name + question.parent}
                      >
                        {degre.title}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Quiz;
