import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Loginkoh from "./pages/ohyeonkwon/Login/Login";
import Mainkoh from "./pages/ohyeonkwon/Main/Main";

import Loginldy from "./pages/doyunlee/Login/Login";
import Mainldy from "./pages/doyunlee/Main/Main";

import Loginlkw from "./pages/kiwanlee/Login/Login";
import Mainlkw from "./pages/kiwanlee/Main/Main";

class Routes extends React.Component {
  render() {
    retrun(
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
