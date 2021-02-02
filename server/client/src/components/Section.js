/** @format */

import React from 'react';

function Section({ number, title, questions, ...props }) {
  return (
    <div className='section container'>
      <h4>
        SECTION {number}: {title}
      </h4>
      {props.children}
    </div>
  );
}

export default Section;
