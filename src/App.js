import './App.module.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Main } from './pages/Main/Main';
import { Instructions } from './pages/Instructions/Instructions';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/instructions'>
          <Instructions />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
