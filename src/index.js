import * as React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import { Day } from './views'
import { Header, Nav } from './components'
import './reset.css'
import * as days from './days'

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <React.Fragment>
      <Link to="/">
        <Header />
      </Link>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Day num={0} />} />
        <Route
          exact
          path="/day/:num"
          render={({ match: { params: { num } } }) => {
            const file = Object.keys(days).find(day => `day_${num}` === day)

            if (!file) {
              return <Redirect to="/" />
            }

            return <Day num={num} />
          }}
        />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
