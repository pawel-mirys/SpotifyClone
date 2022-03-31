import React from 'react';

import './App.scss';
import { Category } from './app/components/Category/Category';
import heart from '../src/app/assets/icons/like3.svg';
import note from '../src/app/assets/icons/music2.svg';
import friends from '../src/app/assets/icons/friends2.svg';

function App() {
  return (
    <div className="App">
      <Category src={heart} iconName="Heart Icon" text="Liked Songs" variant="liked" />
      <Category src={note} iconName="Note Icon" text="Recently Played" variant="recently" />
      <Category src={friends} iconName="People Icon" text="Friends Played" variant="friends" />
    </div>
  );
}

export default App;
