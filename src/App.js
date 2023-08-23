import {Route, Switch} from 'react-router-dom'
import Movie from './components/Movie'
import MovieSummary from './components/MovieSummary'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Movie} />
    <Route exact path="/summary/:id" component={MovieSummary} />
  </Switch>
)

export default App
