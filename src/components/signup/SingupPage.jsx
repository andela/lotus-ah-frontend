// react libraries
import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

// components
import SignupForm from './SignupForm';
import LoginTypeSelector from '../Login/LoginTypeSelector';


/**
 * @class
 * @desc renders signup page
 * @param {object} props
 */
class Signup extends Component {
    state = {
      isModalOpen: false,
    }

    openModal = () => {
      this.setState({
        isModalOpen: true
      });
    }

  modalStyles = () => (
    {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: '0',
        height: '42%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    }
  )

   render = () => (
    <Fragment>
        <div className="sign-up">
            <div className="container">
                <div className="row auth-h d-flex align-items-center">
                <div className="col-md-6 offset-md-3 text-center login-wrap">
                   <img src="/images/logo.png" />
                    <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="form-wrap">
                            <h1 className="form-title">Sign up</h1>
                            <LoginTypeSelector
                                onClick={this.openModal}
                            />
                        </div>
                        <div className="form-footer">
                        <p>Already have an account?
                            <a href="./login">Login</a>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <Modal
            isOpen={this.state.isModalOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={this.modalStyles()}
        >
            <SignupForm
                register={this.props.register}
                signup={this.props.signup}
            />
        </Modal>
    </Fragment>
   )
}

Signup.propTypes = {
  signup: PropTypes.object,
  register: PropTypes.func,
};


export default Signup;
