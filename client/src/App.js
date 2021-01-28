/** @format */

import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Acceuil from './components/Acceuil';
import Footer from './components/Footer';
import Formulaire from './components/Formulaire';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Statistique from './components/Statistique';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/formulaires' component={Formulaire} />
        <Route path='/statistiques' component={Statistique} />
        <Route path='/' component={Acceuil} />
      </Switch>
      <ToastContainer />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
