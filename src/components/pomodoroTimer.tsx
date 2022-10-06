import React from 'react';
import { useInterval } from '../hooks/useInterval';
import { secondsToTime } from '../utils/secondsToTime';
import { Button } from './button';
import { Timer } from './timer';

interface PomodoroProps {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: PomodoroProps): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Test" onClick={() => console.log(1)}></Button>
        <Button text="Test" onClick={() => console.log(1)}></Button>
        <Button text="Test" onClick={() => console.log(1)}></Button>
      </div>

      <div className="details">
        <p>
          Testando: jdaisodjasio jaiojdaiosdjaiosj daisojdioas jdiaos jdaiosdj
          iaos
        </p>

        <p>
          Testando: jdaisodjasio jaiojdaiosdjaiosj daisojdioas jdiaos jdaiosdj
          iaos
        </p>

        <p>
          Testando: jdaisodjasio jaiojdaiosdjaiosj daisojdioas jdiaos jdaiosdj
          iaos
        </p>

        <p>
          Testando: jdaisodjasio jaiojdaiosdjaiosj daisojdioas jdiaos jdaiosdj
          iaos
        </p>
      </div>
    </div>
  );
}
