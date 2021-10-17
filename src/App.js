import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import IndexContainer from './containers/IndexContainer';
import RFCContainer from './containers/RFCContainer';
import WelcomeContainer from './containers/WelcomeContainer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexContainer></IndexContainer>
        </Route>
        <Route exact path="/welcome">
            <WelcomeContainer />
        </Route>
        <Route exact path="/rfc">
            <RFCContainer/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
