import { useState } from "react";

const Header = (props) => <h1>{props.title}</h1>;

const Button = (props) => (
  <button name={props.name} onClick={props.handleClick}>
    {props.name}
  </button>
);

const Display = (props) => (
  <div>
    {props.name} {props.value}
  </div>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };
  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleClickBad = () => {
    setBad(bad + 1);
  };
  return (
    <div>
      <Header title="Give Feedback" />
      <Button name="good" handleClick={handleClickGood} />
      <Button name="neutral" handleClick={handleClickNeutral} />
      <Button name="bad" handleClick={handleClickBad} />

      <Header title="Statistics" />
      <Display name="good" value={good} />
      <Display name="neutral" value={neutral} />
      <Display name="bad" value={bad} />
    </div>
  );
};

export default App;
