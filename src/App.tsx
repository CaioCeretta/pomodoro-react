import React from 'react';

import { PomodoroTimer } from './components/pomodoroTimer';
function App() {
  return (
    <div className="App">
      <PomodoroTimer defaultPomodoroTime={500} />
    </div>
  );
}

export default App;
