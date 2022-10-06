import React from 'react';
import { useInterval } from '../hooks/useInterval';
import { secondsToTime } from '../utils/secondsToTime';

interface PomodoroProps {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: PomodoroProps): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <div>Hello World {secondsToTime(mainTime)}</div>;
}
