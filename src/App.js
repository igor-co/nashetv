import './App.module.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Instructions } from './pages/Instructions/Instructions';
import { Main } from './pages/Main/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>

        <Route exact path='/about'>
          <About />
        </Route>

        <Route exact path='/instructions'>
          <Instructions />
        </Route>

        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
