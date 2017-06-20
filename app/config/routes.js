import React from 'react';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';

import Main from '../components/Main';
import Listing from '../components/subreddit/Listing';
import CategoryForm from '../components/subreddit/CategoryForm';
import Form from '../components/subreddit/Form';

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="add" component={CategoryForm} />
			<Route path="listing/:subredditId" component={Listing} />
			{/*<IndexRoute component={Main} />*/}
    </Route>
  </Router>
);
