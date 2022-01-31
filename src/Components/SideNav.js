import React from "react";
import { InputGroup } from "reactstrap";


const SideNav = (props) => {

    const toggleSideNav = () => {

        props.setSideNav(!props.sidenav);

    }

    return (
        <div className={props.sidenav ? 'col-md-2 d-none d-md-block' : 'col-md-1 d-none d-md-block'} id='side-nav' style={{}}>
            <div className='py-4 px-1' style={{ height: '100%', backgroundColor: '#303C6C', borderRadius: '0px 20px 20px 0px' }}>

                <ul className='m-0 p-1' style={{ color: 'white', listStyle: 'none' }}>
                    <li className=''><img src='/images/logo.png' style={props.sidenav ? {} : { display: 'none' }} alt="logo.png" className='img-fluid' onClick={toggleSideNav} /></li>
                    <li className=' pt-5 pb-3'>
                        <InputGroup className={props.sidenav ? "side-ele" : "side-ele-nohover"} onClick={toggleSideNav}>
                            <img src='/images/dashboard.png' alt="dashboard.png" className='sidenavdashboard' />
                            <p className="sidenav-text px-lg-2" style={props.sidenav ? {} : { display: 'none' }}>Dashboard </p>
                        </InputGroup>
                    </li>

                    <li className=' py-3'>
                        <InputGroup className={props.sidenav ? "side-ele" : "side-ele-nohover"}>
                            <i className="fa fa-home " id="sidenavicons"></i>
                            <p className="sidenav-text px-lg-2" style={props.sidenav ? {} : { display: 'none' }}>Home</p>
                        </InputGroup>
                    </li>

                    <li className=' py-3'>
                        <InputGroup className={props.sidenav ? "side-ele" : "side-ele-nohover"}>
                            <i className="fa fa-commenting-o " id="sidenavicons"></i>
                            <p className="sidenav-text px-lg-2" style={props.sidenav ? {} : { display: 'none' }}>Messages</p>
                        </InputGroup>
                    </li>
                    <li className=' py-3'>
                        <InputGroup className={props.sidenav ? "side-ele" : "side-ele-nohover"}>
                            <i className="fa fa-cog " id="sidenavicons"></i>
                            <p className="sidenav-text px-lg-2" style={props.sidenav ? {} : { display: 'none' }}>Setting</p>
                        </InputGroup>
                    </li>
                    <li className=' py-3'>
                        <InputGroup className={props.sidenav ? "side-ele" : "side-ele-nohover"}>
                            <i className='fa  fa-sign-out' id="sidenavicons"></i>
                            <p className="sidenav-text px-lg-2" style={props.sidenav ? {} : { display: 'none' }}> Logout</p>
                        </InputGroup>
                    </li>

                </ul>
            </div>
        </div>
    );

}

export default SideNav;

