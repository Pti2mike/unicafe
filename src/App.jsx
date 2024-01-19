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

const Statistics = ({ good, neutral, bad, average, total, positiveReturn }) => {
  return (
    <div>
      <Display name="good" value={good} />
      <Display name="neutral" value={neutral} />
      <Display name="bad" value={bad} />
      <Display name="total" value={total} />
      <Display name="average" value={average} />
      <Display name="positive" value={`${positiveReturn} %`} />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positiveReturn, setPositiveReturn] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setAverage((good + 1 - bad) / (total + 1));
    setPositiveReturn((good + 1) / (total + 1));
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
    setAverage((good - bad) / (total + 1));
    setPositiveReturn(good / (total + 1));
  };

  const handleClickBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setAverage((good - bad - 1) / (total + 1));
    setPositiveReturn((good - bad) / (total + 1));
  };

  return (
    <div>
      <Header title="Give Feedback" />
      <Button name="good" handleClick={handleClickGood} />
      <Button name="neutral" handleClick={handleClickNeutral} />
      <Button name="bad" handleClick={handleClickBad} />

      <Header title="Statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positiveReturn={positiveReturn}
      />
    </div>
  );
};

export default App;
