import React from 'react';

import './App.scss';
import { Category } from 'app/components/Category/Category';

function App() {
  return (
    <div className="App">
      <Category text="Liked Songs" name="heart" iconStyle="pink" />
      <Category text="Recently Played" name="note" iconStyle="purple" />
      <Category text="Friends Played" name="friends" iconStyle="blue" />
    </div>
  );
}

export default App;
