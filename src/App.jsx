import { useState } from "react";

const Header = (props) => <h1>{props.title}</h1>;

const Button = (props) => (
  <button name={props.name} onClick={props.handleClick}>
    {props.name}
  </button>
);

const StatisticLine = (props) => (
  <tr>
    <td>
      {props.name} {props.value}
    </td>
  </tr>
);

const Statistics = ({ good, neutral, bad, average, total, positiveReturn }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine name="good" value={good} />
        <StatisticLine name="neutral" value={neutral} />
        <StatisticLine name="bad" value={bad} />
        <StatisticLine name="total" value={total} />
        <StatisticLine name="average" value={average} />
        <StatisticLine name="positive" value={`${positiveReturn} %`} />
      </tbody>
    </table>
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
    setPositiveReturn(((good + 1) / (total + 1)) * 100);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
    setAverage((good - bad) / (total + 1));
    setPositiveReturn((good / (total + 1)) * 100);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setAverage((good - bad - 1) / (total + 1));
    setPositiveReturn(((good - bad) / (total + 1)) * 100);
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
