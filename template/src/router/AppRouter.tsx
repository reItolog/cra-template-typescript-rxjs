import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loader from '../shared/UI/Loader/Loader';
import Home from '../pages/Home/Home';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
