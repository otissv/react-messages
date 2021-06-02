import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Base } from './Base';
import { PoseGroup } from 'react-pose';

import './styles.css';

function App() {
  const [messagges, addMessage] = useState([]);

  const animate = {
    enter: {
      y: 0,
      opacity: 1,
      delay: 300,
      transition: {
        y: { type: 'spring', stiffness: 1000, damping: 100 },
        default: { duration: 300 },
      },
    },
    exit: {
      y: -500,
      opacity: 0,
      transition: { duration: 300 },
    },
  };

  function handleClick(e) {
    e.preventDefault();

    addMessage([
      ...messagges,
      {
        id: messagges.length,
        message: `Item ${messagges.length}`,
      },
    ]);
  }

  const items = messagges
    .map(({ id, message }) => {
      return (
        <Base
          key={id}
          css={`
            background: grey;
            width: 300px;
            height: 50px;
            margin-top: 5px;
            zindex: 1001;
          `}
          animate={animate}
        >
          {message}
        </Base>
      );
    })
    .reverse();

  return (
    <div>
      <button onClick={handleClick}>Addd Item</button>

      <PoseGroup>{items}</PoseGroup>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
