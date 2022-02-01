import React from 'react';
import './Signin.css';

const SigninPage = () => {

    return (
        <div className="row m-0" style={{ overflowX: 'hidden' }}>
            <div className='col-12 col-lg-6 ' id="welcome-container">
                <center>

                    <p className='welcome-text'>Welcome to <b>HireKarma</b></p>
                    <img src="/images/frontimg-signin.png" alt="Welcome pic" className='img-fluid front-img p-2' />

                    <p className='d-none d-lg-block'>
                        <p className='tnc-text pt-3'>{"By creating an account you accept Our"}</p>
                        <a className='tnc-link' href='/' >{" terms & conditions"}</a>
                        <i className='tnc-text'>{" and "}</i>
                        <a className='tnc-link' href='/' > {"privacy policy."}</a>
                    </p>
                </center>
            </div>
            <div className='col-12 col-lg-6 ' id="option-container">
                <center>
                    <ul style={{ listStyleType: 'none' }}>
                        <li>
                            <img src='/images/logo.png' alt='logo' className='img-fluid logo  ' />
                        </li>
                        <li>
                            <button className='signin-btn  shadow-lg'>Corporate</button>
                        </li>
                        <li>
                            <button className='signin-btn  shadow-lg'>University</button>
                        </li>
                        <li>
                            <button className='signin-btn  shadow-lg'>Student</button>
                        </li>
                        <li>
                            <button className='signin-btn shadow-lg'>Admin</button>
                        </li>

                    </ul>
                    <p className='d-block d-lg-none'>
                        <p className='tnc-text pt-3'>{"By creating an account you accept Our"}</p>
                        <a className='tnc-link' href='/' >{" terms & conditions"}</a>
                        <i className='tnc-text'>{" and "}</i>
                        <a className='tnc-link' href='/' > {"privacy policy."}</a>
                    </p>
                </center>

            </div>
        </div>
    );

}


export default SigninPage;

