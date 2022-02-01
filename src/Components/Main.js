import React from "react";
import Chat from "./Chat";
import ChatNav from "./Nav";

const Main = (props) => {

    return (
        <div className={props.sidenav ? 'col-md-10 col-lg-10 col-12' : 'col-md-10 col-lg-10 col-12'}>
            <ChatNav />
            <Chat />
        </div >
    );
}

export default Main;