import React from "react";
import { Card, InputGroup } from 'reactstrap';

const ChatList = (props) => {



    var chats = props.chatlist.map((chat) => {
        var len = chat.messages.length;
        //console.log(chat.messages[len - 1].message);
        return (
            <Card className="p-2 usercard" onClick={() => { props.setChat(chat); props.toggleModal(); }} >
                <div className="row">
                    <div className="col-3 ">
                        <center>
                            <img src={chat.user.src == '' ? '/images/user.png' : "/images/" + chat.user.src} alt='USER_PROFILE' className=" user-profile rounded-circle " />
                        </center>
                    </div>
                    <div className="col-9">
                        <h4 className="mt-2 px-lg-0 px-md-3 px-xs-5 user-name">{chat.user.name}</h4>
                        <p className="last-text px-lg-0 px-md-3 px-xs-5 ">{chat.messages[len - 1].message}</p>
                    </div>
                </div>



            </Card>
        );
    })


    return (
        <div >
            {chats}
        </div>
    );
}

export default ChatList;

