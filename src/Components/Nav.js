import React, { useState, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

const ChatNav = () => {

    var user = {
        name: "Prakash",
        src: "user.png"
    }

    const [collapsed, setCollapse] = useState(true);

    const toggleNavbar = () => {
        setCollapse(!collapsed);
    }

    useEffect(() => { }, [collapsed]);

    return (
        <>
            <div className="row">
                <div className="col-12">

                    <Navbar className="d-block d-md-none" dark id='sm-nav'>
                        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                        <p className="msg mx-auto pt-1">Messages</p>
                        <Collapse isOpen={!collapsed} navbar>
                            <Nav navbar>
                                <NavItem className="mt-3 mb-2 mx-3">
                                    <NavLink href="#" active><i className="fa fa-lg fa-home msg "><i className="px-3 msg"> Home </i></i></NavLink>
                                </NavItem>
                                <NavItem className="my-2 mx-3">
                                    <NavLink href="#" active><i className="fa fa-lg fa-commenting-o msg"><i className="px-3 msg"> Messages </i></i></NavLink>
                                </NavItem>
                                <NavItem className="my-2 mx-3">
                                    <NavLink href="#" active><i className='fa fa-lg fa-gears msg'><i className="px-3 msg"> Settings </i></i></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
            <div className="row" id="header" style={{ height: '15vh' }}>
                <div className="col-md-2 p-4 col-8">
                    <p className="logo-name mx-2">Chat</p>
                </div>
                <div className="col-md-2 col-4 offset-md-1  p-4" style={{ display: 'flex' }}>
                    <img src="/images/sort.jpg" alt="Sort" className="sort-icon " />
                    <i className="sort pt-2 px-1"> Sort</i>
                </div>
                <div className=" col-md-3 d-none d-md-block"></div>
                <div className="col-md-1 d-none d-md-block p-4">
                    <center><i className="fa fa-lg fa-bell-o"></i></center>
                </div>
                <div className="col-md-2  d-none d-md-block " >
                    <div style={{ display: 'flex' }}>
                        <img src={"/images/" + user.src} alt="USER_PROFILE" style={{ flexDirection: 'column' }} className="user-profile rounded-circle mt-3" />
                        <p className="pt-4 username mx-3" style={{ flexDirection: 'column' }}>{user.name}</p>
                        <i className="fa fa-lg fa-angle-down mx-3" style={{ paddingTop: '30px', color: '#03053D', flexDirection: 'column' }}></i>
                    </div>

                </div>
            </div>
        </>

    );
}


export default ChatNav;