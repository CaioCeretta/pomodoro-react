import React, { useEffect } from 'react';
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
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);

  useEffect(() => {
    if (working) document.body.classList.add('working');
  }, [working]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWorking = () => {
    setTimeCounting(true);
    setWorking(true);
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Work" onClick={() => configureWorking()}></Button>
        <Button text="Test" onClick={() => console.log(1)}></Button>
        <Button
          text={timeCounting ? 'Pause' : 'Play'}
          onClick={() => setTimeCounting(!timeCounting)}
        ></Button>
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
