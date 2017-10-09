import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './App.css';
import fusTheme from './fusTheme';
import SideNav from './SideNav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
          <div>
            <SideNav />

            <Switch>
              <Route exact path="/" render={() => <h1>Home View</h1>} />
              <Route exact path="/logos-posters" render={() => <h1>Logos and Posters View</h1>} />
              <Route exact path="/logos" render={() => <h1>Logos View</h1>} />
              <Route exact path="/posters" render={() => <h1>Posters View</h1>} />
              <Route exact path="/letterhead" render={() => <h1>Letterhead View</h1>} />
              <Route exact path="/share-a-story" render={() => <h1>Share a Story View</h1>} />
              <Route exact path="/planning-guide" render={() => <h1>Planning Guide View</h1>} />
              <Route exact path="/services" render={() => <h1>Services View</h1>} />
              <Route exact path="/glossary" render={() => <h1>Glossary View</h1>} />
              <Route
                exact
                path="/service-request-form"
                render={() => <h1>Service Request Form View</h1>}
              />
              <Route exact path="/tutorial" render={() => <h1>Tutorial View</h1>} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
