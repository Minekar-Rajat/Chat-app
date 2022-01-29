import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input } from 'reactstrap';
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
                        <Input type='text' className="fa search-input " placeholder="&#xf002;  Search " />
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