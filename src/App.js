import './style/App.scss';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Error from './Error';
import ProtectedRoute from './protected.route';
import Signin from './SignIn';
import Dashboard from './Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Signin} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
