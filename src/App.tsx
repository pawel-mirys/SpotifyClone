import React from 'react';

import './App.scss';
import { Category } from 'app/components/Category/Category';

function App() {
  return (
    <div className="App">
      <Category text="Liked Songs" name="heart" />
      <Category text="Recently Played" name="note" />
      <Category text="Friends Played" name="friends" />
    </div>
  );
}

export default App;
