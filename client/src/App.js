/** @format */
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Acceuil from './components/Acceuil';
import Commune from './components/Commune';
import Formulaire from './components/Formulaire';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Statistique from './components/Statistique';
import DB from './db';

function App(props) {
  const [db, setDb] = useState(new DB('survey'));

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route
          path='/formulaires'
          render={(props) => <Formulaire {...props} db={db} />}
        />
        <Route
          path='/statistiques'
          render={(props) => <Statistique {...props} db={db} />}
        />

        <Route
          path='/communes'
          render={(props) => <Commune {...props} db={db} />}
        />
        <Route path='/' component={Acceuil} />
      </Switch>
      <ToastContainer />
      <ScrollToTop />
    </div>
  );
}

export default App;
