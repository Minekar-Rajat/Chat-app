import React, { useState, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

const Navsm = () => {


    const [collapsed, setCollapse] = useState(true);

    const toggleNavbar = () => {
        setCollapse(!collapsed);
    }

    useEffect(() => { }, [collapsed]);

    return (
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
    );
}


export default Navsm;