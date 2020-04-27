import React from 'react';
import Todos from './components/Todos';

/*
install react-router-dom
import react-router-dom in this file
use Browserrouter, switch and Route to set up 
your navigation
 example
 <BrowserRouter>
    <Switch>
      <Route path="/users" component={usersView} />
    <Switch/>
 </BrowserRouter>
*/

const App = () => { // es6 standard function App(){ }
  return (
    <Todos />
  );
}

export default App;
