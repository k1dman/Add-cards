import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, StaticRouter } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import store, { history } from '../redux'
import Home from '../components/home'
import NotFound from '../components/404'
import Startup from './startup'
import 'fontsource-roboto'

const RouterSelector = (props) =>
  typeof window !== 'undefined' ? <ConnectedRouter {...props} /> : <StaticRouter {...props} />

const theme = createMuiTheme({})

const RootComponent = (props) => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <RouterSelector history={history} location={props.location} context={props.context}>
          <Startup>
            <Switch>
              <Route exact path="/" component={() => <Home />} />
              <Route component={() => <NotFound />} />
            </Switch>
          </Startup>
        </RouterSelector>
      </MuiThemeProvider>
    </Provider>
  )
}

export default RootComponent
