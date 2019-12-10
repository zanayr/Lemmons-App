import React from 'react';
import { Route } from 'react-router-dom';

import Inspect from './containers/Inspect/Inspect';
import Main from './containers/Main/Main';

function App() {
  return (
    <div>
      <Route path='/inspect/:id' component={Inspect} />
      <Route path='/' exact component={Main} />
    </div>
  );
}

export default App;
