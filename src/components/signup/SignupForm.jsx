// react libraries
import React, { Component } from 'react';

// third party libraries
import PropTypes from 'prop-types';


// components
import SignupInputGroup from './SignupInputGroup';

/**
 * @class
 * @description renders signup form component
 * @param {object} event
 */
class SignupForm extends Component {
    state = {
      input: '',
      submittted: false,
      responseMessage: 'A verification email will be sent to your mail box'
    };

/**
 * @desc handles input change event
 *@param {object} event
 *@memberof SignupForm
*/
handleChage = (event) => {
  this.setState({
    input: event.target.value,
    submittted: false,
  });
}

/**
 * @desc handles form submit event
 *@param {object} event
 *@memberof SignupForm
*/
  handleSubmit = (event) => {
    event.preventDefault();
    const email = this.state.input;
    this.props.register(email);
    this.setState({
      input: '',
      submittted: true,
    });
  }

  /**
   * @desc sets response message from server
   *@param {object} event
  *@memberof SignupForm
  */
  setResponseMessage = () => {
    if (this.props.signup.registered === true) {
      this.setState({
        responseMessage: ' verification email has been sent to your mail box'
      });
    } else if (this.props.signup.registered === 'failed' && this.props.signup.progress === 'done') {
      this.setState({
        responseMessage: this.props.signup.message
      });
    }
  }

  render = () => (
   <div className="form-wrap pb-5 text-center">
      <form className="form-row" onSubmit={this.handleSubmit}>
        <div className="col-10 offset-1">
            <div className="input-wrap">
                <SignupInputGroup
                  type={'email'}
                  onChange={this.handleChage}
                  iconClassName={'fas fa-envelope'}
                  inputValue={this.state.input}
                />
                <div
                  className={`email-message text-left alert ${this.props.signup.registered === true ? ' alert-success' : ''}`}
                >
                  <p>{ this.state.responseMessage }</p>
                </div>
            </div>
              <button
                className="btn"
                type="submit"
                disabled={this.state.submittted}
              >
                Sign up
              </button>
        </div>
      </form>
    </div>
  );
}

SignupForm.propTypes = {
  signup: PropTypes.object,
  register: PropTypes.func,
};

export default SignupForm;
