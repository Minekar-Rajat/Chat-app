import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Input, InputGroup, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'

const ChatCard = (props) => {

    const [collapsed, setCollapse] = useState(true);

    const toggleNavbar = () => {
        setCollapse(!collapsed);
    }

    useEffect(() => { }, [collapsed]);

    if (!props.chat) {
        return (
            <div>
                Welcome Start Chatting
            </div>
        )
    }





    var giveTime = (timestamp) => {


        if (timestamp.getHours() > 12) {
            return (timestamp.getHours() - 12) + ":" + timestamp.getMinutes() + " PM";
        }

        return timestamp.getHours() + ":" + timestamp.getMinutes() + " AM";


    }

    var messages = props.chat.messages.map((msg) => {

        if (msg.username === props.chat.user.name) {
            return (
                <div className="row p-2">
                    <div className="col-2">
                        <center>
                            <img src={props.chat.user.src === '' ? '/images/user.png' : "/images/" + props.chat.user.src} alt='USER_PROFILE' className=" user-profile rounded-circle " />
                        </center>
                    </div>
                    <div className="col-8 mx-4 mx-lg-1">
                        <Card className="message-card" style={{ borderRadius: '0px 20px 10px', backgroundColor: '#F4F4F4' }}>
                            <div className="row"><p className="msg-text">{msg.message}</p></div>
                            <span className="row" style={{ width: '100%', display: 'flex', textAlign: 'end' }}><p style={{ fontSize: '10px' }} >{giveTime(msg.timestamp)}</p></span>
                        </Card>

                    </div>

                </div>
            );
        }

        return (
            <div className="row p-2">
                <div className="col-8 offset-1  ">
                    <Card className="message-card" style={{ borderRadius: '10px 0px 10px 20px', backgroundColor: "rgb(180, 223, 229, 0.5)" }}>
                        <div className="row"><p className="msg-text">{msg.message}</p></div>
                        <span className="row" style={{ width: '100%', display: 'flex', textAlign: 'end' }}><p style={{ fontSize: '10px' }} >{giveTime(msg.timestamp)}</p></span>

                    </Card>

                </div>
                <div className="col-2 mx-2">
                    <center>
                        <img src='/images/user.png' alt='USER_PROFILE' className=" user-profile rounded-circle " />
                    </center>
                </div>

            </div>
        );
    })

    return (
        <Card className="chatcard" style={{ borderRadius: '20px 20px 20px 20px' }}>
            <CardHeader className="cardheader" style={{ backgroundColor: '#303C6C' }}>
                <div className="row">
                    <div className="col-12">

                        <Navbar className="d-block d-md-none px-0" dark id='sm-nav'>
                            <NavbarToggler onClick={toggleNavbar} className="" style={{ marginLeft: '-15px' }} />
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
            </CardHeader>

            <CardBody className="p-0">
                <Card className="modal-user-header p-0">
                    <div className="row ">
                        <div className="col-2 ">
                            <center><i className="fa fa-lg fa-arrow-left mt-4" onClick={() => props.toggleModal()}></i></center>
                        </div>
                        <div className="col-2 px-1">
                            <img src={props.chat.user.src === '' ? '/images/user.png' : "/images/" + props.chat.user.src} alt='USER_PROFILE' className=" modal-user-profile rounded-circle mt-1" />
                        </div>
                        <div className="col-6 ">
                            <p className="modal-username mt-2">{props.chat.user.name}</p>
                            <p className="modal-online">{props.chat.user.isOnline ? "Online" : "Offline"}</p>
                        </div>
                        <div className="col-2">
                            <center><i className="fa fa-lg fa-ellipsis-v mt-4"></i></center>
                        </div>
                    </div>
                </Card>
                <Card style={{ height: '73vh', overflowY: 'scroll', overflowX: 'hidden' }}>
                    {messages}
                </Card>

                <div className="row">
                    <div className="col-9">
                        <InputGroup>
                            <Input type='text' className="input-msg my-2" placeholder="Write a message " />
                            <span class="input-group-text my-2" style={{ backgroundColor: 'white', border: '' }} id="basic-addon1"><i className="fa fa-lg fa-paperclip"></i></span>
                        </InputGroup>
                    </div>
                    <div className="col-2 ">
                        <center>
                            <div className="border rounded-circle my-2" style={{ height: '60px', width: '60px', backgroundColor: '#C4C4C4' }}>
                                <i className="fa fa-lg fa-send-o" style={{ fontSize: '25px', marginTop: '20px' }}></i>
                            </div>
                        </center>
                    </div>
                </div>

            </CardBody>


        </Card>
    );

}

export default ChatCard;
