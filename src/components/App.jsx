import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Header  from './Header';
import Content from './Content';

import Modal   from './Modal/';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => {
    return {
        show_modal: state.modal.show_modal,
    }
}

const App = ( props ) => (
    <Fragment>

        <div className="bar">
            <div className="mylogo">
                <img src="Assets/logo.png" alt="logo" className="imagen"/>
            </div>
            <div className="userinfo">
                <div className="yourpfp">
                    <img src="Assets/avatar.png" alt="avatar" className="imagen"/>
                </div>

                <div className="yourinfo">
                    <p className="yourname">ASHK123</p>
                    <p className="level">Level 1</p>
                    <p className="yourtext">"Work hard on your test"</p>
                </div>

            </div>
        </div>



        <Header />
        { props.show_modal && <Modal /> }
        <Content />

    </Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
