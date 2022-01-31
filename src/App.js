import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './Components/Main';
import SideNav from './Components/SideNav';

function App() {

  const [sidenav, setSideNav] = useState(true);

  useEffect(() => { }, [sidenav]);

  return (
    <div className='row'>
      <SideNav sidenav={sidenav} setSideNav={setSideNav} />
      <Main sidenav={sidenav} />
    </div>
  );
}

export default App;
