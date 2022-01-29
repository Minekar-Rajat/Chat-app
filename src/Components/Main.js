import React from "react";
import Chat from "./Chat";

const Main = () => {
    var user = {
        name: "Prakash",
        src: "user.png"
    }
    return (
        <div>
            <div className="row" id="header" style={{ height: '15vh' }}>
                <div className="col-2  p-4">
                    <p className="logo-name">Chat</p>
                </div>
                <div className="col-2 offset-1 mt-3  p-4" style={{ display: 'flex' }}>
                    <i className="fa fa-lg fa-bars sort-icon "> Sort</i>
                </div>
                <div className="col-2 col-md-3"></div>
                <div className="col-1  p-4">
                    <center><i className="fa fa-lg fa-bell-o"></i></center>
                </div>
                <div className="col-2  " style={{ display: 'flex' }}>
                    <img src={"/images/" + user.src} alt="USER_PROFILE" style={{ flexDirection: 'column' }} className="user-profile rounded-circle mt-3" />
                    <p className="pt-4 username mx-3" style={{ flexDirection: 'column' }}>{user.name}</p>
                    <i className="pt-4 fa fa-lg fa-angle-down mx-3" style={{ color: '#03053D', flexDirection: 'column' }}></i>
                </div>
            </div>
            <Chat />
        </div >
    );
}

export default Main;