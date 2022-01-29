import React from "react";

const Nav = () => {

    var user = {
        name: "Prakash",
        src: "user.png"
    }
    return (
        <div className="row" id="header" style={{ height: '15vh' }}>
            <div className="col-md-2  p-4 col-8">
                <p className="logo-name">Chat</p>
            </div>
            <div className="col-md-2 col-4 offset-md-1 mt-3  p-4" style={{ display: 'flex' }}>
                <i className="fa fa-lg fa-bars sort-icon "> Sort</i>
            </div>
            <div className=" col-md-3 d-none d-md-block"></div>
            <div className="col-md-1 d-none d-md-block p-4">
                <center><i className="fa fa-lg fa-bell-o"></i></center>
            </div>
            <div className="col-md-2  d-none d-md-block " >
                <div style={{ display: 'flex' }}>
                    <img src={"/images/" + user.src} alt="USER_PROFILE" style={{ flexDirection: 'column' }} className="user-profile rounded-circle mt-3" />
                    <p className="pt-4 username mx-3" style={{ flexDirection: 'column' }}>{user.name}</p>
                    <i className="pt-4 fa fa-lg fa-angle-down mx-3" style={{ color: '#03053D', flexDirection: 'column' }}></i>
                </div>

            </div>
        </div>
    );
}


export default Nav;