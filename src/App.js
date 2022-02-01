import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './Components/Main';
import SideNav from './Components/SideNav';
import SigninPage from './Components/SigninPage/SigninPage';

function App() {

  const [sidenav, setSideNav] = useState(true);

  useEffect(() => { }, [sidenav]);

  return (
    <>
      <div className='row'>
        <SideNav sidenav={sidenav} setSideNav={setSideNav} />
        <Main sidenav={sidenav} />
      </div>
      <div className='row'>
        <SigninPage />
      </div>
    </>
  );
}

export default App;
