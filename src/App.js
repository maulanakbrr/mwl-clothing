import { Switch, Route } from 'react-router-dom';

import NavBar from './components/navbar/navbar.component';
import Homepage from './pages/homepage/homepage.component';
import ContactPage from './pages/contact/contact.component';
import ProductPage from './pages/product/product.component';
import FaqPage from './pages/faq/faq.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar/>
      <div style={{ paddingTop: '56px' }}>
        <Switch>
          <Route path='/' exact component={Homepage}/>
          <Route path='/product' component={ProductPage}/>
          <Route path='/contact' exact component={ContactPage}/>
          <Route path='/faq' exact component={FaqPage}/>
          <Route path='/sign-in-sign-up' exact component={SignInSignUpPage}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
