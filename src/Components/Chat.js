import React, { useEffect, useState } from "react";
import { Modal, ModalBody, Input, InputGroup } from 'reactstrap';
import { chatlist } from "../data/chatlist";
import ChatCard from "./ChatCard";
import ChatList from "./ChatList";
import ModalChatCard from './ModalChatCard';

const Chat = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }


    const [chat, setChat] = useState(null);


    useEffect(() => {

    }, [modal, chat]);


    const ChatModal = () => {
        return (
            <Modal fullscreen={true} className="d-block d-md-none" isOpen={modal} toggle={toggle} >
                <ModalBody id='chat-modal'>
                    <ModalChatCard chat={chat} setChat={setChat} toggleModal={toggle} />
                </ModalBody>
            </Modal>
        );
    }




    return (
        <>
            <ChatModal />

            <div className="row">
                <div className="col-md-4  " id='chatlist-container'  >

                    <div className="m-4" >
                        <InputGroup>
                            <span class="input-group-text " style={{ backgroundColor: 'white', borderRadius: '5px 0px 0px 5px', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.35)' }} id="basic-addon1"><i className="fa fa-lg fa-search"></i></span>
                            <Input type='text' className="search-input " placeholder="Search " />
                        </InputGroup>
                    </div>

                    <div className="p-0 m-4" style={{ overflowY: 'scroll' }} id='chat-list' >
                        <ChatList toggleModal={toggle} chatlist={chatlist} setChat={setChat} />
                    </div>
                </div>
                <div className="col-md-8 p-4  d-none d-md-block" id='chat-card'>
                    <ChatCard chat={chat} setChat={setChat} />
                </div>
            </div>


        </>
    );
}

export default Chat;