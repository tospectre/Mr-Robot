import React from 'react';
import ReactDOM from 'react-dom/client';
import Robot from './robot';
import { robots } from './robots';
import './index.css';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Robot
          name={robots[0].name}
          username={robots[0].username}
          email={robots[0].email}
          url={robots[0].url}
          description={robots[0].desc}
      />
      <Robot
          name={robots[1].name}
          username={robots[1].username}
          email={robots[1].email}
          url={robots[1].url}
          description={robots[1].desc}
      />
      <Robot
          name={robots[2].name}
          username={robots[2].username}
          email={robots[2].email}
          url={robots[2].url}
          description={robots[2].desc}
      />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
