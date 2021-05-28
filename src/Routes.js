import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loginkoh from './Pages/ohyeonkwon/Login/Login';
import Mainkoh from './Pages/ohyeonkwon/Main/Main';

import Loginldy from './Pages/doyunlee/Login/Login';
import Mainldy from './Pages/doyunlee/Main/Main';

import Loginlkw from './Pages/kiwanlee/Login/Login';
import Mainlkw from './Pages/kiwanlee/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/LoginH" component={Loginkoh} />
          <Route exact path="/MainH" component={Mainkoh} />

          <Route exact path="/LoginY" component={Loginldy} />
          <Route exact path="/MainY" component={Mainldy} />

          <Route exact path="/LoginW" component={Loginlkw} />
          <Route exact path="/MainW" component={Mainlkw} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
