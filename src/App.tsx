import './App.scss';
import { Card } from 'app/components/Card/Card';

function App() {
  return (
    <div className="App">
      <Card
        cardType="personal"
        title="Daily Mix 1"
        coverName="dailyMix1"
        description="Your weekly mixtape of fresh music. Enjoy new..."
      />
      <Card cardType="system" title="My Playlist" coverName="dailyMix2" />
    </div>
  );
}

export default App;
