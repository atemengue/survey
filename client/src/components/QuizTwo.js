/** @format */

import React from 'react';

function QuizTwo(props) {
  return (
    <div>
      <h1>QUI TWO</h1>
      <form>
        <button onClick={props.nextStep} type='submit' class='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default QuizTwo;
