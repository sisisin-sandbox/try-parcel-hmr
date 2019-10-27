import React from 'react';

export const App = (props: { x: number; inc: () => void }) => {
  return (
    <div>
      <div>dddd:{props.x}</div>
      <button onClick={props.inc}>add</button>
    </div>
  );
};
