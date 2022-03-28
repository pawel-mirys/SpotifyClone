import React from 'react';

import './App.scss';
import { Category } from './app/components/Category/Category';

function App() {
  return (
    <div className="App">
      <Category variant="liked" text="Liked Songs" />
      <Category variant="recently" text="Recently Played" />
      <Category variant="friends" text="Friends Played" />
    </div>
  );
}

export default App;
