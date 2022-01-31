import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';
import Main from './Components/Main';

function App() {


  const [sidenav, setSideNav] = useState(true);

  const toggleSideNav = () => {
    //setSideNav(!sidenav);
  }

  useEffect(() => { }, [sidenav]);

  return (
    <div className='row'>
      <div className='col-0 col-md-1 d-none d-md-block' id='side-nav' style={{}}>
        <div className='py-4' style={sidenav ? { height: '100%', backgroundColor: '#303C6C', borderRadius: '0px 35px 35px 0px' } : {}}>
          <center>
            <ul className='m-0 p-1' style={{ color: 'white', listStyle: 'none' }}>
              <li className='pb-5'><i className='fa fa-lg fa-bars' onClick={toggleSideNav}></i></li>
              <li className='pt-5 pb-3'><i className='fa fa-lg fa-home'></i></li>
              <li className='py-3'><i className='fa fa-lg fa-commenting-o'></i></li>
              <li className='py-3'><i className='fa fa-lg fa-gears'></i></li>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <li className='py-3'><i className='fa fa-lg fa-sign-out'></i></li>

            </ul>
          </center>
        </div>
      </div>
      <div className='col-md-11 col-12'>
        <Main />
      </div>
      {/* <Main /> */}
    </div>
  );
}

export default App;
