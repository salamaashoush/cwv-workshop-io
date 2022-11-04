import React, { Component, lazy, Suspense } from "react"
import { Route, Switch } from "react-router"
import AuthWrapper from "./components/AuthWrapper"
const OauthRedirect = lazy(() => import("./components/OauthRedirect"))

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/redirect"
          render={() => (
            <Suspense>
              <OauthRedirect />
            </Suspense>
          )}
        />
        <Route>
          <AuthWrapper />
        </Route>
      </Switch>
    )
  }
}

export default App
