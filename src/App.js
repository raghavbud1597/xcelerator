import React, {useState} from 'react'
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
import {I18nProvider, LOCALES} from './i18n';


function App() {
  const [lang, setLang] = useState(LOCALES.ENGLISH)
  return (
    <I18nProvider locale={lang}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Signin} />
          <ProtectedRoute exact path="/dashboard">
            <Dashboard setLang={setLang}/>
          </ProtectedRoute>
          <Route path="*" component={Error} />
        </Switch>
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
