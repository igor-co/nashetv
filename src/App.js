import './App.module.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { About } from 'pages/About';
import { Contact } from 'pages/Contact';
import { Instructions } from 'pages/Instructions';
import { Main } from 'pages/Main';

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
