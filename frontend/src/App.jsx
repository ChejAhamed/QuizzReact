import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Provider>
      <BrowserRouter>
       <Header/>
        <Switch>
            <Route path='/' component={Dashboard}/>
           
           
          
        </Switch>
       <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
