import React from "react";
import { Card, CardBody, CardHeader, Input, InputGroup } from 'reactstrap'

const ChatCard = (props) => {


    if (!props.chat) {
        return (
            <div className="" style={{ height: '100%', paddingTop: '28%' }}>
                <center>
                    <i className="fa fa-lg fa-thumbs-up" style={{ color: '#303C6C', fontSize: '70px' }}></i>
                    <p className="user-name pt-4">Welcome Start Chatting</p>
                </center>
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
                    <div className="col-1">
                        <center>
                            <img src={props.chat.user.src === '' ? '/images/user.png' : "/images/" + props.chat.user.src} alt='USER_PROFILE' className=" user-profile rounded-circle " />
                        </center>
                    </div>
                    <div className="col-9 mx-4 mx-lg-1">
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
                <div className="col-9 offset-1  ">
                    <Card className="message-card" style={{ borderRadius: '10px 0px 10px 20px', backgroundColor: "rgb(180, 223, 229, 0.5)" }}>
                        <div className="row"><p className="msg-text">{msg.message}</p></div>
                        <span className="row" style={{ width: '100%', display: 'flex', textAlign: 'end' }}><p style={{ fontSize: '10px' }} >{giveTime(msg.timestamp)}</p></span>

                    </Card>

                </div>
                <div className="col-1 mx-2">
                    <center>
                        <img src='/images/user.png' alt='USER_PROFILE' className=" user-profile rounded-circle " />
                    </center>
                </div>

            </div>
        );
    })

    return (
        <Card className="chatcard" style={{ borderRadius: '20px 20px 20px 20px' }}>
            <CardHeader className="cardheader " style={{ backgroundColor: '#303C6C', borderRadius: '20px 20px 0px 0px' }}>
                <div className="row">
                    <div className="col-2 ">
                        <center>
                            <img src={props.chat.user.src === '' ? '/images/user.png' : "/images/" + props.chat.user.src} alt='USER_PROFILE' className=" user-profile rounded-circle " />
                        </center>
                    </div>
                    <div className="col-2 ">
                        <p className="charcard-header-username py-3">{props.chat.user.name}</p>
                    </div>
                    <div className="col-1 offset-6">
                        <center>
                            <i className="fa fa-lg fa-ellipsis-v my-3" ></i>
                        </center>
                    </div>

                    <div className="col-1">
                        <center>
                            <i className="fa fa-lg fa-close my-3" onClick={() => props.setChat(null)}></i>
                        </center>
                    </div>

                </div>
            </CardHeader>

            <CardBody id="messages-cardbody" style={{ overflowX: 'hidden', overflowY: 'scroll' }}>
                {messages}
            </CardBody>
            <div className="row p-2">
                <div className="col-10 ">
                    <InputGroup>
                        <Input type='text' className="input-msg my-2" placeholder="Write a message " />
                        <span class="input-group-text my-2" style={{ backgroundColor: 'white', border: '' }} id="basic-addon1"><i className="fa fa-lg fa-paperclip"></i></span>
                    </InputGroup>
                </div>
                <div className="col-1 ">
                    <center>
                        <div className="border rounded-circle my-2" style={{ height: '60px', width: '60px', backgroundColor: '#C4C4C4' }}>
                            <i className="fa fa-lg fa-send-o" style={{ fontSize: '25px', marginTop: '20px' }}></i>
                        </div>
                    </center>
                </div>
            </div>

        </Card>
    );

}

export default ChatCard;
