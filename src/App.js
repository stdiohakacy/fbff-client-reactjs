import React, { Component } from 'react';
import { HomePage } from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import { FBCallback } from './pages/facebook-callback/facebook-callback';
class App extends Component {
  render() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/auth/facebook/callback' component={FBCallback} />
            </Switch>
        </div>
    )
}
}

export default App;
