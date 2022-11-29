import Statistics from 'components/Statistics/Statistics';
import Title from 'components/Title/Title';

export const App = () => {
  return (
    <>
      <Title />
      <Statistics initialValue={0} />
    </>
  );
};
