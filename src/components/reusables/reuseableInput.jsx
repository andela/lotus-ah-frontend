// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

/**
 * @param {object} props
 * @desc reuseableInput
 * @return {object} input
 */
const reuseableInput = props => (
  <input
    type={props.type}
    className='form-control'
    id={props.id}
    name={props.name}
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
    aria-describedby='inputGroupPrepend'
    required
  />
);

reuseableInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default reuseableInput;
