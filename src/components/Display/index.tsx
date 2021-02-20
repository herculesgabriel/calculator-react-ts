interface Props {
  currentMath: string;
  historyList: string[];
}

const Display: React.FC<Props> = ({ currentMath, historyList }) => (
  <main className="display">
    <h1>{currentMath}</h1>

    <ul className="history">
      {
        historyList.map((entry, i) => (
          <li key={i + entry}>{entry}</li>
        ))
      }
    </ul>
  </main>
);

export default Display;
