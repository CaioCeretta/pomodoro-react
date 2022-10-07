import React from 'react';

import { PomodoroTimer } from './components/pomodoroTimer';

function App() {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={5}
        shortRestTime={3}
        longRestTime={5}
        cycles={2}
      />
    </div>
  );
}

export default App;
