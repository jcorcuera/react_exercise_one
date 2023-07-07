import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Question from './features/questions/question';

import styles from './App.module.css'
import FinalPath from './features/finalPath/finalPath';

function Header() {
  return (
    <div className={styles.header}>
      <h1>Question Branching Exercise</h1>
    </div>
  );
}

function Instructions() {
  return (
    <div className='instructions'>
      <p>Start with the <Link to='/questions/1'>first question</Link>!</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Instructions />
          </Route>
          <Route path='/questions/:id'>
            <Question />
          </Route>
          <Route path='/final'>
            <FinalPath />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
