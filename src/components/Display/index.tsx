interface Props {
  currentMath: string;
}

const Display: React.FC<Props> = ({ currentMath }) => {
  return (
    <main>
      <h1>{currentMath}</h1>
    </main>
  );
};

export default Display;
