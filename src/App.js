import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';
import logo from '../src/components/img/treefrog-lightgreen-png-head.png';

const App = () => {

  return (

    <div>
      <div className='logo-title'>
        <img className='logo' src={logo} alt={'logo'} />
        <h1 className='title'>TREEFROG</h1>
      </div>
      <Dashboard data-testid='dashboard-1' />
    </div>

  );

};

export default App;