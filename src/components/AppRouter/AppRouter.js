import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Search from 'components/Search';
import ShowPage from 'components/ShowPage';
import './AppRouter.scss';

class AppRouter extends PureComponent {
    render() {
      return (
        <div className="App">
          <Switch>
            <Route path="/shows/:id" component={ShowPage} />
            <Route exact path="*" component={Search} />
          </Switch>
        </div>
      );
    }
  }
  
  export default withRouter(AppRouter);
