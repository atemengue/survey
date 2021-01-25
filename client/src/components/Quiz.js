/** @format */

import React from 'react';

function Quiz({ section, number, title, questions }) {
  return (
    <div class='form-group'>
      <label for='inputPassword' class='col-form-label'>
        <span>
          S{section}Q0{number} :
        </span>
        {title}
      </label>
      {questions.map((question, index) => {
        return (
          <div className='square'>
            <div className='row'>
              <div className='col-sm-4 d-flex align-items-center '>
                <label>
                  {++index}. {question.title}
                </label>
                {title === 'Autres dimension' ? (
                  <input
                    type='password'
                    class='form-control'
                    id='inputPassword'
                    placeholder='Nom de votre commune'
                  />
                ) : null}
              </div>
              <div className='col-sm-8'>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='radio'
                    name='exampleRadios'
                    id='exampleRadios1'
                    value='option1'
                    checked
                  />
                  <label class='form-check-label' for='exampleRadios1'>
                    Peu important
                  </label>
                </div>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='radio'
                    name='exampleRadios'
                    id='exampleRadios2'
                    value='option2'
                  />
                  <label class='form-check-label' for='exampleRadios2'>
                    Moins important
                  </label>
                </div>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='radio'
                    name='exampleRadios'
                    id='exampleRadios2'
                    value='option2'
                  />
                  <label class='form-check-label' for='exampleRadios2'>
                    Neutre
                  </label>
                </div>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='radio'
                    name='exampleRadios'
                    id='exampleRadios2'
                    value='option2'
                  />
                  <label class='form-check-label' for='exampleRadios2'>
                    Important
                  </label>
                </div>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='radio'
                    name='exampleRadios'
                    id='exampleRadios2'
                    value='option2'
                  />
                  <label class='form-check-label' for='exampleRadios2'>
                    Assez important
                  </label>
                </div>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='radio'
                    name='exampleRadios'
                    id='exampleRadios2'
                    value='option2'
                  />
                  <label class='form-check-label' for='exampleRadios2'>
                    Tres important
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Quiz;
