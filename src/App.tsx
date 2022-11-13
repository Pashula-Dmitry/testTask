import React from 'react';

const App = (): JSX.Element => {

  return (
    <div>
      {process.env.REACT_KEY}
    </div>
  );
};

export default App;
