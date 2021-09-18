import React from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from "containers/Layout";
import Container from "containers/Container";
import {CounterPage, FormPage, ListPage} from 'pages'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Container>
              <h1>Home</h1>
            </Container>
          </Layout>
        </Route>
        <Route
          exact
          path="/counter"
          render={(routeProps) => <CounterPage {...routeProps} />}
        />
        <Route
          exact
          path="/form"
          render={(routeProps) => <FormPage {...routeProps} />}
        />
        <Route
          exact
          path="/list"
          render={(routeProps) => <ListPage {...routeProps} />}
        />
      </Switch>
    </>
  );
}

export default App;
