import './App.module.scss';

//layout component?

import { Header } from './_components/Header/Header';
import { Main } from './pages/Main/Main';

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
