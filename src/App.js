import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Todos from './components/Todos';
import TodoDetails from './components/TodoDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Todos} exact />
        <Route path='/todo/:id' component={TodoDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
